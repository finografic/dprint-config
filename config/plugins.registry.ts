/**
 * Centralized plugin configuration for @finografic/dprint-config
 *
 * This is the single source of truth for all plugin metadata.
 * All file paths, names, and URLs are derived from the plugin key.
 *
 * Naming convention:
 *   config/defaults/{key}.jsonc      # Generated reference (all options)
 *   config/overrides/{key}.jsonc     # Customized config (consumed)
 *   docs/rules/{key}.rules.md        # Generated documentation
 *   internal/schemas/{key}.schema.json # Cached JSON schema
 *   types/{key}.d.ts                 # Generated TypeScript types
 */

export type PluginSource = 'dprint' | 'g-plane';

export interface PluginConfig {
  /** Display name for comments/docs */
  displayName: string;

  /** GitHub organization */
  source: PluginSource;

  /** GitHub repo name (defaults to key) */
  repo?: string;

  /** Path to schema.json in repo (defaults based on source) */
  schemaPath?: string;

  /** dprint config key (e.g., "typescript", "json", "malva") */
  configKey: string;

  /** Order for generated output (lower = first) */
  order: number;
}

/**
 * Plugin registry - the universal key is the repo/package name
 *
 * dprint plugins: dprint-plugin-{name}
 * g-plane plugins: {name} (no prefix)
 */
export const PLUGINS: Record<string, PluginConfig> = {
  // ─── dprint plugins ───
  'dprint-plugin-typescript': {
    displayName: 'TypeScript',
    source: 'dprint',
    configKey: 'typescript',
    order: 1,
  },
  'dprint-plugin-json': {
    displayName: 'JSON',
    source: 'dprint',
    configKey: 'json',
    order: 2,
  },
  'dprint-plugin-markdown': {
    displayName: 'Markdown',
    source: 'dprint',
    configKey: 'markdown',
    order: 3,
  },
  'dprint-plugin-toml': {
    displayName: 'TOML',
    source: 'dprint',
    configKey: 'toml',
    order: 4,
  },
  // ─── g-plane plugins ───
  malva: {
    displayName: 'Malva (CSS/SCSS/Sass)',
    source: 'g-plane',
    configKey: 'malva',
    order: 5,
  },
  markup_fmt: {
    displayName: 'Markup (HTML/Vue/Svelte/Astro)',
    source: 'g-plane',
    configKey: 'markup',
    order: 6,
  },
  pretty_yaml: {
    displayName: 'Pretty YAML',
    source: 'g-plane',
    configKey: 'yaml',
    order: 7,
  },
};

// ─── Derived paths and URLs ───

/**
 * Get the GitHub org for a plugin source
 */
export function getGitHubOrg(source: PluginSource): string {
  return source === 'dprint' ? 'dprint' : 'g-plane';
}

/**
 * Get the default schema path based on source
 */
export function getDefaultSchemaPath(source: PluginSource): string {
  return source === 'dprint'
    ? 'deployment/schema.json'
    : 'dprint_plugin/deployment/schema.json';
}

/**
 * Get the schema URL for a plugin
 */
export function getSchemaUrl(key: string): string {
  const plugin = PLUGINS[key];
  if (!plugin) throw new Error(`Unknown plugin: ${key}`);

  const org = getGitHubOrg(plugin.source);
  const repo = plugin.repo ?? key;
  const schemaPath = plugin.schemaPath ?? getDefaultSchemaPath(plugin.source);

  return `https://raw.githubusercontent.com/${org}/${repo}/main/${schemaPath}`;
}

/**
 * Get all derived paths for a plugin
 */
export function getPluginPaths(key: string) {
  return {
    defaults: `config/defaults/${key}.jsonc`,
    configs: `config/overrides/${key}.jsonc`,
    docs: `docs/rules/${key}.rules.md`,
    schema: `internal/schemas/${key}.schema.json`,
    types: `types/${key}.d.ts`,
  };
}

/**
 * Get plugin keys in order
 */
export function getOrderedPluginKeys(): string[] {
  return Object.entries(PLUGINS)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key]) => key);
}

/**
 * Get all config file paths (for scripts that iterate configs)
 */
export function getAllConfigPaths(): string[] {
  return getOrderedPluginKeys().map((key) => `config/overrides/${key}.jsonc`);
}

/**
 * Get all config filenames (just the filename, no path)
 */
export function getAllConfigFilenames(): string[] {
  return getOrderedPluginKeys().map((key) => `${key}.jsonc`);
}
