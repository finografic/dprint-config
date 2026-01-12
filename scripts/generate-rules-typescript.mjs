#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const SCHEMA_URL =
  'https://raw.githubusercontent.com/dprint/dprint-plugin-typescript/main/deployment/schema.json';

// Temporary convenience: allow using a downloaded schema in this repo.
// This should match the remote schema shape (definitions + properties + $ref).
const LOCAL_SCHEMA_PATH = 'scripts/schema.json';

const DOCS_OUT = 'docs/RULES_TYPESCRIPT.md';
const TYPES_OUT = 'types/dprint-typescript-options.d.ts';

async function loadSchema() {
  // Prefer remote (keeps docs/types up to date), but fall back to local for offline/dev.
  try {
    const res = await globalThis.fetch(SCHEMA_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch schema: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    const local = await fs.readFile(LOCAL_SCHEMA_PATH, 'utf8');
    const schema = JSON.parse(local);
    globalThis.console.warn(
      `⚠️  Using local schema fallback at ${LOCAL_SCHEMA_PATH} because remote fetch failed.`,
    );
    globalThis.console.warn(`   Remote: ${SCHEMA_URL}`);
    globalThis.console.warn(`   Reason: ${err instanceof Error ? err.message : String(err)}`);
    return schema;
  }
}

function createSchemaHelpers(schema) {
  function resolvePointer(pointer) {
    if (typeof pointer !== 'string' || !pointer.startsWith('#/')) return null;
    const parts = pointer
      .slice(2)
      .split('/')
      .map((p) => p.replaceAll('~1', '/').replaceAll('~0', '~'));

    let current = schema;
    for (const part of parts) {
      if (!current || typeof current !== 'object') return null;
      current = current[part];
    }
    return current ?? null;
  }

  function deref(node, seen = new Set()) {
    if (!node || typeof node !== 'object') return node;
    if (!node.$ref) return node;

    const ref = node.$ref;
    if (seen.has(ref)) return node; // break cycles defensively
    seen.add(ref);

    const resolved = resolvePointer(ref);
    if (!resolved || typeof resolved !== 'object') return node;

    // Merge: local fields override resolved, but keep $ref out of the final merged node.
    // This allows properties to add local description/default if needed.
    const rest = { ...node };
    delete rest.$ref;
    return { ...deref(resolved, seen), ...rest };
  }

  function extractAllowed(prop) {
    const p = deref(prop);
    if (!p || typeof p !== 'object') return [];

    // Some schemas use enum, but dprint schemas commonly use oneOf + const.
    if (Array.isArray(p.enum)) {
      return p.enum.map((v) => ({ value: v, description: '' }));
    }

    if (Array.isArray(p.oneOf)) {
      const values = [];
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

  function extractDefault(prop) {
    const p = deref(prop);
    if (p && typeof p === 'object' && 'default' in p) return p.default;
    return undefined;
  }

  function extractDescription(prop) {
    const p = deref(prop);
    if (p && typeof p === 'object' && typeof p.description === 'string' && p.description.trim()) {
      return p.description.trim();
    }
    return '';
  }

  function inferTsType(prop) {
    const p = deref(prop);
    const allowed = extractAllowed(p);

    if (allowed.length > 0) {
      return allowed.map((a) => JSON.stringify(a.value)).join(' | ');
    }

    const t = p?.type;
    if (Array.isArray(t)) {
      return t.map(mapJsonTypeToTs).join(' | ');
    }
    if (typeof t === 'string') {
      return mapJsonTypeToTs(t);
    }

    return 'unknown';
  }

  function mapJsonTypeToTs(t) {
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
      default:
        return 'unknown';
    }
  }

  function isSafeIdentifier(name) {
    return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
  }

  function renderPropertyKey(name) {
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

function renderMarkdown(schema) {
  const {
    deref,
    extractAllowed,
    extractDefault,
    extractDescription,
    inferTsType,
  } = createSchemaHelpers(schema);

  const lines = [];
  lines.push('# TypeScript Formatter Rules (dprint)');
  lines.push('');
  lines.push('> Generated from the official dprint-plugin-typescript JSON schema.');
  lines.push('');

  const entries = Object.entries(schema.properties ?? {}).sort(([a], [b]) =>
    a.localeCompare(b),
  );

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

  return lines.join('\n');
}

function renderTypes(schema) {
  const {
    deref,
    extractAllowed,
    extractDefault,
    extractDescription,
    inferTsType,
    renderPropertyKey,
  } = createSchemaHelpers(schema);

  const lines = [];
  lines.push('// Generated from dprint-plugin-typescript JSON schema');
  lines.push('// Do not edit manually.');
  lines.push('');
  lines.push('export interface DprintTypeScriptOptions {');

  const entries = Object.entries(schema.properties ?? {}).sort(([a], [b]) =>
    a.localeCompare(b),
  );

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

async function main() {
  const schema = await loadSchema();

  await fs.mkdir(path.dirname(DOCS_OUT), { recursive: true });
  await fs.mkdir(path.dirname(TYPES_OUT), { recursive: true });

  await fs.writeFile(DOCS_OUT, renderMarkdown(schema) + '\n', 'utf8');
  await fs.writeFile(TYPES_OUT, renderTypes(schema), 'utf8');

  globalThis.console.log('✅ Generated TypeScript formatter docs and types');
}

main().catch((err) => {
  globalThis.console.error(err);
  process.exit(1);
});
