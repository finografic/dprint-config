# 🦋 @finografic/dprint-config

Opinionated, minimal **dprint configuration** for the finografic ecosystem.

Use it alongside (but independent from) `@finografic/eslint-config`—ESLint for correctness, dprint for formatting.

## Goals

- Replace **Prettier** with **dprint**
- Keep formatting **out of ESLint**
- Provide a **stable, explicit formatting policy**
- Fast and lightweight (powered by Rust)
- Work cleanly in TypeScript-first, pnpm-based monorepos

## Usage

Create `dprint.jsonc` in your repo root:

```jsonc
{
  "$schema": "https://dprint.dev/schemas/v0.json",
  "extends": "node_modules/@finografic/dprint-config/dprint.jsonc",
}
```

## Maintainers

Maintainer scripts live in `scripts/*.ts` and run via `tsx`.

```bash
# Update all plugin versions (WASM URLs)
pnpm dprint.plugins.update

# Generate docs + types for all plugins
pnpm rules.generate

# Generate flattened ~/dprint.jsonc
pnpm home.config.generate
```

### Plugin registry

All plugin metadata is centralized in `configs/plugins.config.ts`. Generated outputs follow a consistent naming convention:

```
configs/{plugin}.jsonc       # dprint config
docs/rules/{plugin}.rules.md # formatted docs
schemas/{plugin}.schema.json # cached JSON schema
types/{plugin}.d.ts          # TypeScript types
```

## What it formats

- TypeScript / JavaScript
- JSON / JSONC
- Markdown
- TOML
- YAML (Pretty YAML)
- CSS / SCSS / Sass (Malva)
- Markup (HTML/Vue/Svelte/Astro via `markup_fmt`)

## Commands

```bash
# format (write)
dprint fmt

# check (CI)
dprint check
```

## License

MIT © [finografic](https://github.com/finografic)
