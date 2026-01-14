# Markdown Formatter Rules

> Generated from the dprint-plugin-markdown JSON schema.

## `deno`

Top level configuration that sets the configuration to what is used in Deno.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `emphasisKind`

The character to use for emphasis/italics.

- **Type**: `"asterisks" | "underscores"`
- **Allowed values**:
  - `"asterisks"` — Uses asterisks (*) for emphasis.
  - `"underscores"` — Uses underscores (_) for emphasis.
- **Default**: `"underscores"`

## `ignoreDirective`

The text to use for an ignore directive (ex. `<!-- dprint-ignore -->`).

- **Type**: `string`
- **Default**: `"dprint-ignore"`

## `ignoreEndDirective`

The text to use for an ignore end directive (ex. `<!-- dprint-ignore-end -->`).

- **Type**: `string`
- **Default**: `"dprint-ignore-end"`

## `ignoreFileDirective`

The text to use for an ignore file directive (ex. `<!-- dprint-ignore-file -->`).

- **Type**: `string`
- **Default**: `"dprint-ignore-file"`

## `ignoreStartDirective`

The text to use for an ignore start directive (ex. `<!-- dprint-ignore-start -->`).

- **Type**: `string`
- **Default**: `"dprint-ignore-start"`

## `lineWidth`

The width of a line the printer will try to stay under. Note that the printer may exceed this width in certain cases.

- **Type**: `number`
- **Default**: `80`

## `locked`

Whether the configuration is not allowed to be overridden or extended.

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

## `strongKind`

The character to use for strong emphasis/bold.

- **Type**: `"asterisks" | "underscores"`
- **Allowed values**:
  - `"asterisks"` — Uses asterisks (**) for strong emphasis.
  - `"underscores"` — Uses underscores (__) for strong emphasis.
- **Default**: `"asterisks"`

## `textWrap`

Text wrapping possibilities.

- **Type**: `"always" | "maintain" | "never"`
- **Allowed values**:
  - `"always"` — Always wraps text.
  - `"maintain"` — Maintains line breaks.
  - `"never"` — Never wraps text.
- **Default**: `"maintain"`

