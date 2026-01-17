#!/usr/bin/env tsx

/**
 * Generates documentation and TypeScript types from dprint plugin JSON schemas.
 *
 * Usage:
 *   pnpm rules.generate                    # Generate for all plugins
 *   pnpm rules.generate dprint-plugin-typescript  # Generate for specific plugin
 *   pnpm rules.generate malva markup_fmt   # Generate for multiple plugins
 *
 * Outputs:
 *   docs/rules/{plugin}.rules.md
 *   types/{plugin}.d.ts
 *   schemas/{plugin}.schema.json (cached)
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import {
  getOrderedPluginKeys,
  getPluginPaths,
  getSchemaUrl,
  PLUGINS,
} from 'configs/plugins.registry';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(SCRIPT_DIR, '..');

// ─── JSON Schema Types ───

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

// ─── Schema Helpers ───

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
      current = (current as Record<string, unknown>)[part];
    }
    return current ?? null;
  }

  function deref(node: JsonSchemaProperty, seen = new Set<string>()): JsonSchemaProperty {
    if (!node || typeof node !== 'object') return node;
    if (!node.$ref) return node;

    const ref = node.$ref;
    if (seen.has(ref)) return node;
    seen.add(ref);

    const resolved = resolvePointer(ref);
    if (!resolved || typeof resolved !== 'object') return node;

    const rest: JsonSchemaProperty = { ...node };
    delete rest.$ref;
    return { ...deref(resolved as JsonSchemaProperty, seen), ...rest };
  }

  function extractAllowed(
    prop: JsonSchemaProperty,
  ): Array<{ value: unknown; description: string }> {
    const p = deref(prop);

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

// ─── Schema Loading ───

async function loadSchema(pluginKey: string): Promise<JsonSchema | null> {
  const schemaUrl = getSchemaUrl(pluginKey);
  const paths = getPluginPaths(pluginKey);
  const localSchemaPath = path.join(PACKAGE_ROOT, paths.schema);

  // Try remote first
  try {
    const res = await fetch(schemaUrl);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const schema = (await res.json()) as JsonSchema;

    // Cache locally
    await fs.mkdir(path.dirname(localSchemaPath), { recursive: true });
    await fs.writeFile(localSchemaPath, JSON.stringify(schema, null, 2), 'utf8');

    return schema;
  } catch (err) {
    // Try local fallback
    try {
      const local = await fs.readFile(localSchemaPath, 'utf8');
      const schema = JSON.parse(local) as JsonSchema;
      console.warn(`⚠️  Using cached schema for ${pluginKey}`);
      console.warn(`   Remote: ${schemaUrl}`);
      console.warn(`   Reason: ${err instanceof Error ? err.message : String(err)}`);
      return schema;
    } catch {
      console.error(`❌ Failed to load schema for ${pluginKey}`);
      console.error(`   URL: ${schemaUrl}`);
      console.error(`   Error: ${err instanceof Error ? err.message : String(err)}`);
      return null;
    }
  }
}

// ─── Markdown Generation ───

function renderMarkdown(schema: JsonSchema, pluginKey: string): string {
  const plugin = PLUGINS[pluginKey];
  const { deref, extractAllowed, extractDefault, extractDescription, inferTsType } =
    createSchemaHelpers(schema);

  function renderLiteralForDocs(value: unknown): string {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }

  const lines: string[] = [];
  lines.push(`# ${plugin.displayName} Formatter Rules`);
  lines.push('');
  lines.push(`> Generated from the ${pluginKey} JSON schema.`);
  lines.push('');

  const entries = Object.entries(schema.properties ?? {}).sort(([a], [b]) => a.localeCompare(b));

  if (entries.length === 0) {
    lines.push('_No configuration options found in schema._');
    lines.push('');
    return lines.join('\n');
  }

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
        lines.push(`  - \`${renderLiteralForDocs(value)}\`${suffix}`);
      }
    }

    if (def !== undefined) {
      lines.push(`- **Default**: \`${JSON.stringify(def)}\``);
    }

    lines.push('');
  }

  return lines.join('\n') + '\n';
}

// ─── TypeScript Types Generation ───

function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function renderTypes(schema: JsonSchema, pluginKey: string): string {
  const plugin = PLUGINS[pluginKey];
  const interfaceName = `${toPascalCase(plugin.configKey)}Options`;

  const {
    deref,
    extractAllowed,
    extractDefault,
    extractDescription,
    inferTsType,
    renderPropertyKey,
  } = createSchemaHelpers(schema);

  const lines: string[] = [];
  lines.push(`// Generated from ${pluginKey} JSON schema`);
  lines.push('// Do not edit manually.');
  lines.push('');
  lines.push(`export interface ${interfaceName} {`);

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

// ─── Main ───

async function generateForPlugin(pluginKey: string): Promise<boolean> {
  const plugin = PLUGINS[pluginKey];
  if (!plugin) {
    console.error(`❌ Unknown plugin: ${pluginKey}`);
    return false;
  }

  console.log(`\n📦 ${plugin.displayName} (${pluginKey})`);

  const schema = await loadSchema(pluginKey);
  if (!schema) {
    return false;
  }

  const paths = getPluginPaths(pluginKey);
  const docsOut = path.join(PACKAGE_ROOT, paths.docs);
  const typesOut = path.join(PACKAGE_ROOT, paths.types);

  await fs.mkdir(path.dirname(docsOut), { recursive: true });
  await fs.mkdir(path.dirname(typesOut), { recursive: true });

  const propertyCount = Object.keys(schema.properties ?? {}).length;

  if (propertyCount === 0) {
    console.log(`   ⚠️  No properties found in schema`);
  } else {
    console.log(`   📝 ${propertyCount} configuration options`);
  }

  await fs.writeFile(docsOut, renderMarkdown(schema, pluginKey), 'utf8');
  await fs.writeFile(typesOut, renderTypes(schema, pluginKey), 'utf8');

  console.log(`   ✅ ${paths.docs}`);
  console.log(`   ✅ ${paths.types}`);

  return true;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  // Determine which plugins to process
  const pluginKeys = args.length > 0
    ? args.filter((arg) => !arg.startsWith('-'))
    : getOrderedPluginKeys();

  console.log('🔧 Generating plugin rules and types...');

  let success = 0;
  let failed = 0;

  for (const key of pluginKeys) {
    const ok = await generateForPlugin(key);
    if (ok) {
      success++;
    } else {
      failed++;
    }
  }

  console.log('\n' + '─'.repeat(50));
  console.log(`✅ Generated: ${success} plugins`);
  if (failed > 0) {
    console.log(`❌ Failed: ${failed} plugins`);
    process.exit(1);
  }
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
