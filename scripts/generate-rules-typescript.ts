import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const SCHEMA_URL =
  'https://raw.githubusercontent.com/dprint/dprint-plugin-typescript/main/deployment/schema.json';

// Temporary convenience: allow using a downloaded schema in this repo.
// This should match the remote schema shape (definitions + properties + $ref).
const LOCAL_SCHEMA_PATH = 'scripts/schema.json';

const DOCS_OUT = 'docs/RULES_TYPESCRIPT.md';
const TYPES_OUT = 'types/dprint-typescript-options.d.ts';

// Resolve output relative to the package root (not the current working directory).
const PACKAGE_ROOT = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

type JsonSchemaPrimitiveType =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'null'
  | 'array'
  | 'object';

type JsonSchemaType = JsonSchemaPrimitiveType | JsonSchemaPrimitiveType[];

type JsonSchema = {
  $schema?: string;
  $id?: string;
  type?: JsonSchemaType;
  properties?: Record<string, JsonSchemaProperty>;
  definitions?: Record<string, JsonSchemaProperty>;
};

type JsonSchemaProperty = {
  $ref?: string;
  type?: JsonSchemaType;
  description?: string;
  default?: unknown;
  enum?: unknown[];
  oneOf?: Array<{ const?: unknown; description?: string } & Record<string, unknown>>;
} & Record<string, unknown>;

async function loadSchema(): Promise<JsonSchema> {
  // Prefer remote (keeps docs/types up to date), but fall back to local for offline/dev.
  try {
    const res = await fetch(SCHEMA_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch schema: ${res.status}`);
    }
    return (await res.json()) as JsonSchema;
  } catch (err) {
    const local = await fs.readFile(LOCAL_SCHEMA_PATH, 'utf8');
    const schema = JSON.parse(local) as JsonSchema;
    console.warn(
      `⚠️  Using local schema fallback at ${LOCAL_SCHEMA_PATH} because remote fetch failed.`,
    );
    console.warn(`   Remote: ${SCHEMA_URL}`);
    console.warn(`   Reason: ${err instanceof Error ? err.message : String(err)}`);
    return schema;
  }
}

function createSchemaHelpers(schema: JsonSchema) {
  function resolvePointer(pointer: string): unknown {
    if (!pointer.startsWith('#/')) return null;
    const parts = pointer
      .slice(2)
      .split('/')
      .map((p) => p.replaceAll('~1', '/').replaceAll('~0', '~'));

    let current: unknown = schema;
    for (const part of parts) {
      if (!current || typeof current !== 'object') return null;
       
      current = (current as any)[part];
    }
    return current ?? null;
  }

  function deref(node: JsonSchemaProperty, seen = new Set<string>()): JsonSchemaProperty {
    if (!node || typeof node !== 'object') return node;
    if (!node.$ref) return node;

    const ref = node.$ref;
    if (seen.has(ref)) return node; // break cycles defensively
    seen.add(ref);

    const resolved = resolvePointer(ref);
    if (!resolved || typeof resolved !== 'object') return node;

    // Merge: local fields override resolved, but keep $ref out of the final merged node.
    // This allows properties to add local description/default if needed.
    const rest: JsonSchemaProperty = { ...node };
    delete rest.$ref;
    return { ...deref(resolved as JsonSchemaProperty, seen), ...rest };
  }

  function extractAllowed(prop: JsonSchemaProperty): Array<{ value: unknown; description: string }> {
    const p = deref(prop);

    // Some schemas use enum, but dprint schemas commonly use oneOf + const.
    if (Array.isArray(p.enum)) {
      return p.enum.map((v) => ({ value: v, description: '' }));
    }

    if (Array.isArray(p.oneOf)) {
      const values: Array<{ value: unknown; description: string }> = [];
      for (const option of p.oneOf) {
        if (option && typeof option === 'object' && 'const' in option) {
          values.push({
            value: option.const,
            description: typeof option.description === 'string' ? option.description : '',
          });
        }
      }
      return values;
    }

    return [];
  }

  function extractDefault(prop: JsonSchemaProperty): unknown {
    const p = deref(prop);
    return 'default' in p ? p.default : undefined;
  }

  function extractDescription(prop: JsonSchemaProperty): string {
    const p = deref(prop);
    return typeof p.description === 'string' ? p.description.trim() : '';
  }

  function mapJsonTypeToTs(t: JsonSchemaPrimitiveType): string {
    switch (t) {
      case 'string':
      case 'number':
      case 'boolean':
        return t;
      case 'integer':
        return 'number';
      case 'null':
        return 'null';
      case 'array':
        return 'unknown[]';
      case 'object':
        return 'Record<string, unknown>';
      default: {
        // Exhaustive guard (should never happen if JsonSchemaPrimitiveType is correct)
        const _exhaustive: never = t;
        return _exhaustive;
      }
    }
  }

  function inferTsType(prop: JsonSchemaProperty): string {
    const p = deref(prop);
    const allowed = extractAllowed(p);

    if (allowed.length > 0) {
      return allowed.map((a) => JSON.stringify(a.value)).join(' | ');
    }

    const t = p.type;
    if (Array.isArray(t)) {
      return t.map(mapJsonTypeToTs).join(' | ');
    }
    if (typeof t === 'string') {
      return mapJsonTypeToTs(t);
    }

    return 'unknown';
  }

  function isSafeIdentifier(name: string): boolean {
    return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
  }

  function renderPropertyKey(name: string): string {
    return isSafeIdentifier(name) ? name : JSON.stringify(name);
  }

  return {
    deref,
    extractAllowed,
    extractDefault,
    extractDescription,
    inferTsType,
    renderPropertyKey,
  };
}

function renderMarkdown(schema: JsonSchema): string {
  const { deref, extractAllowed, extractDefault, extractDescription, inferTsType } =
    createSchemaHelpers(schema);

  const lines: string[] = [];
  lines.push('# TypeScript Formatter Rules (dprint)');
  lines.push('');
  lines.push('> Generated from the official dprint-plugin-typescript JSON schema.');
  lines.push('');

  const entries = Object.entries(schema.properties ?? {}).sort(([a], [b]) => a.localeCompare(b));

  for (const [name, prop] of entries) {
    const resolved = deref(prop);
    const description = extractDescription(resolved);
    const allowed = extractAllowed(resolved);
    const def = extractDefault(resolved);
    const tsType = inferTsType(resolved);

    lines.push(`## \`${name}\``);
    lines.push('');
    if (description) {
      lines.push(description);
      lines.push('');
    }

    lines.push(`- **Type**: \`${tsType}\``);

    if (allowed.length > 0) {
      lines.push('- **Allowed values**:');
      for (const { value, description: valueDesc } of allowed) {
        const suffix = valueDesc ? ` — ${valueDesc}` : '';
        lines.push(`  - \`${String(value)}\`${suffix}`);
      }
    }

    if (def !== undefined) {
      lines.push(`- **Default**: \`${JSON.stringify(def)}\``);
    }

    lines.push('');
  }

  return lines.join('\n') + '\n';
}

function renderTypes(schema: JsonSchema): string {
  const { deref, extractAllowed, extractDefault, extractDescription, inferTsType, renderPropertyKey } =
    createSchemaHelpers(schema);

  const lines: string[] = [];
  lines.push('// Generated from dprint-plugin-typescript JSON schema');
  lines.push('// Do not edit manually.');
  lines.push('');
  lines.push('export interface DprintTypeScriptOptions {');

  const entries = Object.entries(schema.properties ?? {}).sort(([a], [b]) => a.localeCompare(b));

  for (const [name, prop] of entries) {
    const resolved = deref(prop);
    const description = extractDescription(resolved);
    const def = extractDefault(resolved);
    const allowed = extractAllowed(resolved);
    const tsType = inferTsType(resolved);
    const key = renderPropertyKey(name);

    const hasDoc = Boolean(description) || def !== undefined || allowed.length > 0;

    if (hasDoc) {
      lines.push('  /**');
      if (description) {
        lines.push(`   * ${description}`);
      }
      if (allowed.length > 0) {
        lines.push('   *');
        lines.push('   * Allowed values:');
        for (const { value, description: valueDesc } of allowed) {
          const suffix = valueDesc ? ` - ${valueDesc}` : '';
          lines.push(`   * - ${JSON.stringify(value)}${suffix}`);
        }
      }
      if (def !== undefined) {
        lines.push('   *');
        lines.push(`   * @default ${JSON.stringify(def)}`);
      }
      lines.push('   */');
    }

    lines.push(`  ${key}?: ${tsType};`);
    lines.push('');
  }

  lines.push('}');
  return lines.join('\n').trimEnd() + '\n';
}

async function main(): Promise<void> {
  const schema = await loadSchema();

  const docsOut = path.join(PACKAGE_ROOT, DOCS_OUT);
  const typesOut = path.join(PACKAGE_ROOT, TYPES_OUT);

  await fs.mkdir(path.dirname(docsOut), { recursive: true });
  await fs.mkdir(path.dirname(typesOut), { recursive: true });

  await fs.writeFile(docsOut, renderMarkdown(schema), 'utf8');
  await fs.writeFile(typesOut, renderTypes(schema), 'utf8');

  console.log('✅ Generated TypeScript formatter docs and types');
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});

