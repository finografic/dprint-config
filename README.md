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
# Update plugin versions AND regenerate schemas/docs/types (recommended)
pnpm dprint.update

# Or run individually:
pnpm dprint.plugins.update        # Update plugin versions in defaults/ and overrides/
pnpm dprint.plugins.generate       # Generate docs/types/defaults from schemas
pnpm dprint.plugins.generate --force  # Clear cached schemas and regenerate

# Generate flattened ~/dprint.jsonc
pnpm home.config.generate
pnpm home.config.install           # Copy to ~/dprint.jsonc
```

### Plugin registry

All plugin metadata is centralized in `config/plugins.registry.ts`. Generated outputs follow a consistent naming convention:

```text
config/defaults/{plugin}.jsonc        # Generated reference (all options with defaults)
config/overrides/{plugin}.jsonc       # Customized config (consumed, never overwritten)
docs/rules/{plugin}.rules.md          # Generated documentation
internal/schemas/{plugin}.schema.json # Cached JSON schema
types/{plugin}.d.ts                   # TypeScript types
```

**Workflow:**

- `dprint.plugins.update` updates WASM plugin URLs in both `defaults/` and `overrides/`
- `dprint.plugins.generate` fetches fresh schemas and regenerates docs/types/defaults
- Use `--force` flag to clear cached schemas and ensure fresh data after plugin updates

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
