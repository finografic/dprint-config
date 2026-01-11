# @finografic/dprint-config

Opinionated, minimal **dprint configuration** for the finografic ecosystem.

This package provides a **single, versioned source of truth for formatting**, designed to be used alongside (but fully independent from) `@finografic/eslint-config`.

## Maintaining plugin versions (maintainers)

This package relies on **pinned dprint plugin versions** (WASM plugin URLs).

To update all configured plugins to their latest compatible versions, run:

```bash
dprint config update
```

Tip: if you ever end up with multiple config entrypoints in different directories, use `dprint config update --recursive`.

## Why this exists

- Replace **Prettier** with **dprint**
- Keep formatting **out of ESLint**
- Provide a **stable, explicit formatting policy**
- Work cleanly in TypeScript-first, pnpm-based monorepos

## Installation

Install the config package:

```bash
pnpm add -D @finografic/dprint-config
```

Install `dprint` (the CLI) however you prefer:

- `pnpm add -D dprint` (Node projects)
- Or follow the official install docs: [dprint install](https://dprint.dev/install/)

## Usage (recommended)

Create a `dprint.jsonc` in your repo root:

```jsonc
{
  "$schema": "https://dprint.dev/schemas/v0.json",
  "extends": "node_modules/@finografic/dprint-config/dprint.jsonc"

  // Optional local overrides below
}
```

## Alternative: copy-based ownership

If you want full local ownership (no inheritance), copy the config:

```bash
cp node_modules/@finografic/dprint-config/dprint.jsonc .
```

## What this package provides

- A shared `dprint.jsonc` (with `extends` split-outs like `dprint-json.jsonc`, `dprint-typescript.jsonc`, etc.)
- Pinned formatter plugins via WASM plugin URLs
- Opinionated but minimal defaults

## Included plugins (pinned via WASM URLs)

Configured today (and easy to expand):

- TypeScript / JavaScript
- JSON / JSONC
- Markdown
- TOML
- YAML (Pretty YAML)
- CSS / SCSS / Sass (Malva)
- Markup (HTML/Vue/Svelte/Astro via `markup_fmt`)

## Running dprint

- **Format (write changes)**:

```bash
dprint fmt
```

- **Check only (CI)**:

```bash
dprint check
```

## Design boundaries

- **Does**: ship formatting policy + pinned plugin URLs
- **Does not**: install or run dprint for consumers, integrate with ESLint, provide a wrapper/CLI, or aim for Prettier parity

## Versioning & stability

Formatting behavior is treated as API:

- Patch: non-behavioral changes
- Minor: intentional formatting changes
- Major: breaking opinion shifts

## License

MIT © [finografic](https://github.com/finografic)
