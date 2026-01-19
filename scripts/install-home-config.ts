#!/usr/bin/env tsx

/**
 * Installs a flattened dprint.jsonc to the user's home directory.
 *
 * This script:
 *   1. Generates a flattened config (via generate-flat-config.ts)
 *   2. Copies it to ~/dprint.jsonc
 *
 * Usage:
 *   pnpm home.config.install
 */

import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { generateFlatConfig } from './generate-flat-config.js';

const HOME_TARGET = path.join(os.homedir(), 'dprint.jsonc');

async function main(): Promise<void> {
  console.log('📦 Generating flattened config...');
  const generatedPath = await generateFlatConfig();
  console.log(`✅ Generated: ${generatedPath}`);

  console.log(`\n📥 Installing to home directory...`);
  await fs.copyFile(generatedPath, HOME_TARGET);
  console.log(`✅ Installed: ${HOME_TARGET}`);
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
