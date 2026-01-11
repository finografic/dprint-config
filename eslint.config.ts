import js from '@eslint/js';
import type { Linter } from 'eslint';
import tseslint from 'typescript-eslint';

const config: Linter.Config[] = [
  js.configs.recommended,

  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.github/**',
    ],
  },

  {
    files: ['**/*.ts', '**/*.tsx', '*.mjs'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      // Let TS handle these
      'no-unused-vars': 'off',
      'no-redeclare': 'off',

      // Minimal TS correctness
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-redeclare': 'error',

      // This is a config package — logs are fine
      'no-console': 'off',
    },
  },
];

export default config;
