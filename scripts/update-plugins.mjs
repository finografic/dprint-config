#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * List of dprint config files that own plugin definitions.
 * Each file will be updated independently using:
 *
 *   dprint config update -c <file>
 *
 * This script is for maintainers only.
 */
const DPRINT_CONFIG_FILES = [
  'dprint-json.jsonc',
  'dprint-typescript.jsonc',
  'dprint-markdown.jsonc',
  'dprint-toml.jsonc',
  'dprint-malva.jsonc',
  'dprint-markup.jsonc',
  'dprint-yaml.jsonc',
];

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

for (const configFile of DPRINT_CONFIG_FILES) {
  const fullPath = join(globalThis.process.cwd(), 'configs', configFile);
  if (!existsSync(fullPath)) {
    globalThis.console.warn(`⚠️  Skipping missing config: ${configFile}`);
    continue;
  }

  globalThis.console.log(`\n🔄 Updating plugins in ${configFile}`);
  run(`dprint config update -c ${fullPath}`);
}

globalThis.console.log('\n✅ dprint plugin update complete');
