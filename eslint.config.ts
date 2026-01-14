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
    files: ['**/*.{ts,tsx,mjs}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
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
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      '@typescript-eslint/no-redeclare': 'error',

      'no-console': 'off',
    },
  },
];

export default config;
