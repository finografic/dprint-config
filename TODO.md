# TODO

Only **future work / decisions** that aren’t already implemented or documented.

## Next

- **Split per-plugin configs**: move per-plugin blocks out of `dprint.jsonc` into dedicated files and add them to `extends`:
  - `dprint-markdown.jsonc`
  - `dprint-toml.jsonc`
  - `dprint-yaml.jsonc` (Pretty YAML)
  - `dprint-malva.jsonc`
  - `dprint-markup.jsonc` (`markup_fmt`)
- **Plugin pinning policy**:
  - Keep pinned WASM plugin URLs (current) and update via `dprint config update`
  - Decide what counts as patch/minor/major when formatting output changes
- **Locking (optional)**: decide whether to set `"locked": true` in plugin configs to prevent consumer overrides.

## Nice to have

- **CI formatting gate**: keep/enforce `dprint check` in CI (see `.github/workflows/ci.yml`).
- **Associations**: add more JSON associations for common dotfiles if desired (ex. `.prettierrc`, `.stylelintrc`, etc.).
