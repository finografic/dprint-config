# TODO

Only **future work / decisions** that aren’t already implemented or documented.

## Next

- **Plugin pinning policy**:
  - Keep pinned WASM plugin URLs (current) and update via `dprint config update`
  - Decide what counts as patch/minor/major when formatting output changes
- **Locking (optional)**: decide whether to set `"locked": true` in plugin configs to prevent consumer overrides.
- **Generated docs + types**:
  - Decide whether `docs/RULES_*.md` + `types/*.d.ts` should be committed (recommended) or generated on demand only.
  - Add a CI guard to ensure generated outputs are up to date (ex. run generator then fail on git diff).
- **Generalize schema codegen**:
  - Add similar generators for other plugins that expose `deployment/schema.json` (Markdown/JSON/TOML/YAML/Malva/Markup).

## Nice to have

- **CI formatting gate**: keep/enforce `dprint check` in CI (see `.github/workflows/ci.yml`).
- **Associations**: add more JSON associations for common dotfiles if desired (ex. `.prettierrc`, `.stylelintrc`, etc.).
