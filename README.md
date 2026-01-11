# @finografic/dprint-config

> Opinionated dprint configuration for the **@finografic** ecosystem.

This package provides a shared dprint configuration that pairs with `@finografic/eslint-config` to replace Prettier with a faster, more deterministic formatter.

## ✨ Features

- 📦 **Config-only package** - Just the configuration, no plugin dependencies
- 🎨 **Multi-language support** - TypeScript/JavaScript, JSON, Markdown, TOML, YAML, and CSS/SCSS/Sass
- 🔧 **Editor IntelliSense** - Uses dprint's official JSON Schema for autocomplete and validation
- 🎯 **Aligned with ESLint** - Config matches `@finografic/eslint-config` stylistic rules
- 🚫 **No runtime complexity** - Static config only, no execution or magic

## 📦 Installation

```bash
pnpm add -D @finografic/dprint-config dprint dprint-plugin-typescript dprint-plugin-json dprint-plugin-markdown dprint-plugin-toml dprint-plugin-yaml dprint-plugin-malva
```

This installs:

- The config package (just the configuration file)
- The `dprint` CLI (as a dev dependency)
- The dprint plugins (install only the ones you need)

## 🚀 Usage

### Copy-Based (Recommended)

Copy `dprint.jsonc` from this package into your project root:

```bash
# After installing
cp node_modules/@finografic/dprint-config/dprint.jsonc ./dprint.jsonc
```

Or manually copy the file from `node_modules/@finografic/dprint-config/dprint.jsonc`.

**Note:** We use `.jsonc` (JSON with Comments) to allow inline documentation of configuration choices.

### Extend-Based (Advanced)

If you need to override specific settings, you can extend the config:

```jsonc
{
  "$schema": "https://dprint.dev/schemas/v0.json",
  "extends": "node_modules/@finografic/dprint-config/dprint.jsonc",
  "lineWidth": 120,
}
```

**Note:** Copy-based is the recommended default for predictability and debuggability.

## 📋 Supported Plugins

This package's configuration supports the following plugins (you need to install them separately):

- **TypeScript/JavaScript** (`dprint-plugin-typescript`) - Handles `.ts`, `.tsx`, `.js`, `.jsx`, `.mjs`, `.cjs`
- **JSON** (`dprint-plugin-json`) - Formats `.json` files
- **Markdown** (`dprint-plugin-markdown`) - Formats `.md` files
- **TOML** (`dprint-plugin-toml`) - Formats `.toml` files
- **YAML** (`dprint-plugin-yaml`) - Formats `.yaml`, `.yml` files
- **Malva** (`dprint-plugin-malva`) - Formats `.css`, `.scss`, `.sass` files

## 🎨 Configuration Highlights

The config is aligned with `@finografic/eslint-config` stylistic rules:

- **Line width:** 100 characters
- **Indentation:** 2 spaces
- **Quotes:** Single quotes (preferred), double for JSX
- **Semicolons:** Always
- **Trailing commas:** Always (multiline)
- **Line endings:** LF

See `dprint.jsonc` for the complete configuration.

## 🔗 Pairing with ESLint

This package is designed to work alongside `@finografic/eslint-config`:

- **ESLint** handles semantic correctness and code quality
- **dprint** handles syntactic layout and formatting
- No plugin bridge or circular dependencies
- Each tool can evolve independently

## 🧠 Design Philosophy

This package follows the **explicit, boring, architecture-first** philosophy:

- ✅ **Explicit** - `$schema` is declared, config is visible
- ✅ **No magic** - No JS execution, static config only
- ✅ **Clear boundaries** - dprint stays dumb & fast
- ✅ **Editor-friendly** - IntelliSense via JSON Schema
- ✅ **Future-proof** - Schema evolves versionedly

This package uses dprint's official JSON Schema to provide editor IntelliSense and validation. Configuration is intentionally static and non-executable.

## 🛠️ Development

```bash
# Install dependencies (automatically sets up git hooks)
pnpm install

# Lint
pnpm lint

# Format (using dprint)
dprint fmt
```

**Note:** Git hooks are automatically configured on `pnpm install`. See [docs/DEVELOPER_WORKFLOW.md](./docs/DEVELOPER_WORKFLOW.md) for the complete workflow.

## 📚 Documentation

- [Developer Workflow](./docs/DEVELOPER_WORKFLOW.md) - Daily development workflow
- [Release Process](./docs/RELEASES.md) - How to cut releases
- [GitHub Packages Setup](./docs/GITHUB_PACKAGES_SETUP.md) - Publishing and consuming packages

## License

MIT © [finografic](https://github.com/finografic)
