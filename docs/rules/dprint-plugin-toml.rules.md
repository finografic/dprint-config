# TOML Formatter Rules

> Generated from the dprint-plugin-toml JSON schema.

## `cargo.applyConventions`

Whether to apply sorting to a Cargo.toml file.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `true`

## `comment.forceLeadingSpace`

Whether to force a leading space in a comment.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Adds a leading space if there is none (ex. `# comment`)
  - `false` — Doesn't force a space to be added and maintains what was done (ex. `#comment`)
- **Default**: `true`

## `indentWidth`

The number of characters for an indent.

- **Type**: `number`
- **Default**: `2`

## `lineWidth`

The width of a line the printer will try to stay under. Note that the printer may exceed this width in certain cases.

- **Type**: `number`
- **Default**: `120`

## `locked`

Whether the configuration is not allowed to be overriden or extended.

- **Type**: `boolean`

## `newLineKind`

The kind of newline to use.

- **Type**: `"auto" | "crlf" | "lf" | "system"`
- **Allowed values**:
  - `"auto"` — For each file, uses the newline kind found at the end of the last line.
  - `"crlf"` — Uses carriage return, line feed.
  - `"lf"` — Uses line feed.
  - `"system"` — Uses the system standard (ex. crlf on Windows).
- **Default**: `"lf"`

## `useTabs`

Whether to use tabs (true) or spaces (false).

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

