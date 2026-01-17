import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { getAllConfigFilenames } from 'config/plugins.registry';

/**
 * Updates dprint plugin versions in all config files.
 *
 * Each config file is updated independently using:
 *   dprint config update -c <file>
 *
 * This script is for maintainers only.
 */

// Resolve paths relative to the package root (not the current working directory).
const PACKAGE_ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');

function run(cmd: string) {
  execSync(cmd, { stdio: 'inherit' });
}

const configFiles = getAllConfigFilenames();

for (const configFile of configFiles) {
  const fullPath = join(PACKAGE_ROOT, 'config', 'overrides', configFile);
  if (!existsSync(fullPath)) {
    console.warn(`⚠️  Skipping missing config: ${configFile}`);
    continue;
  }

  console.log(`\n🔄 Updating plugins in ${configFile}`);
  run(`dprint config update -c ${fullPath}`);
}

console.log('\n✅ dprint plugin update complete');
