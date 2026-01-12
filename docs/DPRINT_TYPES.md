# Generated `.d.ts` files

This repo generates TypeScript declaration files from upstream dprint plugin schemas (starting with the TypeScript plugin).

These files are shipped with the package (`types/*.d.ts`) as **reference material**. They are not intended to be a runtime import surface.

## What this is for

### A readable spec for config options

The generated interfaces provide a single, easy-to-scan list of supported options, including descriptions, defaults, and allowed values (when available from the schema). This is often faster to read than raw JSON Schema or Rust source.

### Better review signal for upstream changes

Schema diffs can be noisy. `.d.ts` diffs tend to be compact and readable, which helps with:

- semver decisions
- changelog/release notes

### Foundation for optional tooling

If we ever add maintainer tooling (validation helpers, config generators, etc.), the types are already in place and derived from the same source of truth.

## What this is not for

- It does not validate `dprint.jsonc` at runtime.
- It does not replace the `$schema` field in dprint configs.
- It does not integrate with the dprint CLI.

## How to regenerate

Run:

```bash
pnpm rules.typescript.generate
```

This regenerates:

- `docs/RULES_TYPESCRIPT.md`
- `types/dprint-typescript-options.d.ts`

