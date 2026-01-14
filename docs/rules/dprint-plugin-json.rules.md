# JSON Formatter Rules

> Generated from the dprint-plugin-json JSON schema.

## `array.preferSingleLine`

If arrays and objects should collapse to a single line if it would be below the line width.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `commentLine.forceSpaceAfterSlashes`

Forces a space after slashes.  For example: `// comment` instead of `//comment`

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `true`

## `deno`

Top level configuration that sets the configuration to what is used in Deno.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `ignoreNodeCommentText`

The text to use for an ignore comment (ex. `// dprint-ignore`).

- **Type**: `string`
- **Default**: `"dprint-ignore"`

## `indentWidth`

The number of characters for an indent.

- **Type**: `number`
- **Default**: `2`

## `jsonTrailingCommaFiles`

When `trailingCommas` is `jsonc`, treat these files as JSONC and use trailing commas (ex. `["tsconfig.json", ".vscode/settings.json"]`).

- **Type**: `unknown[]`

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

## `object.preferSingleLine`

If arrays and objects should collapse to a single line if it would be below the line width.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `preferSingleLine`

If arrays and objects should collapse to a single line if it would be below the line width.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `trailingCommas`

Whether to use trailing commas.

- **Type**: `"always" | "jsonc" | "maintain" | "never"`
- **Allowed values**:
  - `"always"` — Always format with trailing commas. Beware: trailing commas can cause many JSON parsers to fail.
  - `"jsonc"` — Use trailing commas in JSONC files and do not use trailing commas in JSON files.
  - `"maintain"` — Keep the trailing comma if it exists.
  - `"never"` — Never format with trailing commas.
- **Default**: `"jsonc"`

## `useTabs`

Whether to use tabs (true) or spaces (false).

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

