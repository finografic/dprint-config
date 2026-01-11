Perfect — you’ve got the model **exactly right now** 👍
Here’s a **clean, intentional `README.md`** that matches everything you’ve decided:

* prominent, simple usage
* no magic
* no postinstall nonsense
* clearly positioned as *policy*, not tooling
* `@finografic/create` mentioned, but not centered

I’ve written this as if it’s **already v1-ready**.

---

# `@finografic/dprint-config`

Opinionated, minimal **dprint configuration** for the finografic ecosystem.

This package provides a **single, versioned source of truth for code formatting**, designed to be used **alongside** (but fully independent from):

* `@finografic/eslint-config` (linting / correctness)
* `dprint` (formatting)

Formatting and linting are treated as **separate concerns**.

---

## Why this exists

This package exists to:

* replace **Prettier** entirely with **dprint**
* keep formatting **out of ESLint**
* provide a **stable, explicit formatting policy**
* work cleanly in TypeScript-first, pnpm-based monorepos

The goal is **not** Prettier compatibility — only **intent preservation**.

---

## Installation

Install the config package (and dprint itself, if you don’t already have it):

```bash
pnpm add -D @finografic/dprint-config
```

> dprint is a standalone tool (not a Node runtime dependency).
> See [https://dprint.dev/install/](https://dprint.dev/install/) for installation options.

---

## Usage (recommended)

Create a `dprint.jsonc` file at the root of your repository:

```jsonc
{
  "$schema": "https://dprint.dev/schemas/v0.json",
  "extends": "node_modules/@finografic/dprint-config/dprint.jsonc"

  // Optional local overrides below
}
```

That’s it.

* The path does **not** include a version number
* Upgrading the package automatically updates formatting behavior
* This file typically never needs to change

---

## Alternative: copy-based ownership

If you prefer full local ownership, you may copy the config instead:

```bash
cp node_modules/@finografic/dprint-config/dprint.jsonc .
```

This approach makes customization explicit and avoids any inheritance.

---

## What this package provides

* A shared `dprint.jsonc`
* Pinned formatter plugins (via dprint WASM plugin URLs)
* Opinionated but minimal defaults
* A stable formatting contract

---

## What this package does **not** do

* ❌ Does not install or run dprint
* ❌ Does not mutate consumer repositories
* ❌ Does not integrate with ESLint
* ❌ Does not provide a CLI or wrapper
* ❌ Does not attempt Prettier parity

Consumers are responsible for running dprint themselves (editor or CI).

---

## Design philosophy

* Formatting ≠ linting
* Explicit > implicit
* Boring > clever
* No hidden behavior
* Easy to explain and reason about

This package mirrors the architectural values of `@finografic/eslint-config`, without coupling the two.

---

## CI usage

In CI, formatting should be checked using:

```bash
dprint check
```

This package is compatible with the official `dprint/check-action` for GitHub Actions.

---

## Tooling integration

If you use the `@finografic/create` scaffolding tool, a minimal `dprint.jsonc` file may be generated for you automatically.

This is a convenience only — the generated file is equivalent to the manual setup described above.

---

## Versioning & stability

Formatting behavior is treated as **API**:

* Patch versions: non-behavioral changes
* Minor versions: intentional formatting changes
* Major versions: breaking or opinion shifts

Consumers should upgrade deliberately, like any other tooling dependency.

---

## License

MIT © [finografic](https://github.com/finografic)
