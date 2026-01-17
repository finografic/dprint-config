import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { getAllConfigFilenames } from 'config/plugins.registry';

/**
 * Updates dprint plugin versions in all config files.
 *
 * Updates both:
 *   - config/overrides/*.jsonc (customized configs)
 *   - config/defaults/*.jsonc (reference configs)
 *
 * Each config file is updated independently using:
 *   dprint config update -c <file>
 *
 * This script is for maintainers only.
 * Typically run via: pnpm dprint.plugins.update
 * (which also regenerates schemas/docs/types with --force)
 */

// Resolve paths relative to the package root (not the current working directory).
const PACKAGE_ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');

function run(cmd: string) {
  execSync(cmd, { stdio: 'inherit' });
}

const configFiles = getAllConfigFilenames();

// Update overrides (customized configs)
console.log('\n📝 Updating plugin versions in overrides...');
for (const configFile of configFiles) {
  const fullPath = join(PACKAGE_ROOT, 'config', 'overrides', configFile);
  if (!existsSync(fullPath)) {
    console.warn(`⚠️  Skipping missing override: ${configFile}`);
    continue;
  }

  console.log(`\n🔄 Updating plugins in overrides/${configFile}`);
  run(`dprint config update -c ${fullPath}`);
}

// Update defaults (reference configs)
console.log('\n📝 Updating plugin versions in defaults...');
for (const configFile of configFiles) {
  const fullPath = join(PACKAGE_ROOT, 'config', 'defaults', configFile);
  if (!existsSync(fullPath)) {
    console.warn(`⚠️  Skipping missing default: ${configFile}`);
    continue;
  }

  console.log(`\n🔄 Updating plugins in defaults/${configFile}`);
  run(`dprint config update -c ${fullPath}`);
}

console.log('\n✅ dprint plugin update complete');
