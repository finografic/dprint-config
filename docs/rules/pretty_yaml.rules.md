# Pretty YAML Formatter Rules

> Generated from the pretty_yaml JSON schema.

## `braceSpacing`

Control whether whitespace should be inserted between braces or not.

- **Type**: `boolean`
- **Default**: `true`

## `bracketSpacing`

Control whether whitespace should be inserted between brackets or not.

- **Type**: `boolean`
- **Default**: `false`

## `dashSpacing`

Control the whitespace behavior of block compact map in block sequence value. This option is only effective when `indentWidth` is greater than 2.

- **Type**: `"oneSpace" | "indent"`
- **Allowed values**:
  - `"oneSpace"` — Insert only one space after `-`.
  - `"indent"` — Insert spaces to align indentation, respecting `indentWidth` option.
- **Default**: `"oneSpace"`

## `flowMap.preferSingleLine`

Control whether items should be placed on single line as possible, even they're originally on multiple lines.

- **Type**: `boolean`
- **Default**: `false`

## `flowSequence.preferSingleLine`

Control whether items should be placed on single line as possible, even they're originally on multiple lines.

- **Type**: `boolean`
- **Default**: `false`

## `formatComments`

Control whether whitespace should be inserted at the beginning of comments or not.

- **Type**: `boolean`
- **Default**: `false`

## `ignoreCommentDirective`

Text directive for ignoring formatting specific content.

- **Type**: `string`
- **Default**: `"pretty-yaml-ignore"`

## `indentBlockSequenceInMap`

Control whether block sequence should be indented or not in a block map.

- **Type**: `boolean`
- **Default**: `true`

## `indentWidth`

Size of indentation.

- **Type**: `number`
- **Default**: `2`

## `lineBreak`

Specify whether use `\n` (LF) or `\r\n` (CRLF) for line break.

- **Type**: `"lf" | "crlf"`
- **Allowed values**:
  - `"lf"`
  - `"crlf"`
- **Default**: `"lf"`

## `preferSingleLine`

Control whether items should be placed on single line as possible, even they're originally on multiple lines.

- **Type**: `boolean`
- **Default**: `false`

## `printWidth`

The line width limitation that Pretty YAML should *(but not must)* avoid exceeding. Pretty YAML will try its best to keep line width less than this value, but it may exceed for some cases, for example, a very very long single word.

- **Type**: `number`
- **Default**: `80`

## `proseWrap`

Control whether to wrap prose in plain scalars when they exceed the print width.

- **Type**: `"preserve" | "always"`
- **Allowed values**:
  - `"preserve"` — Don't change how prose is wrapped.
  - `"always"` — Wrap prose if it exceeds the print width.
- **Default**: `"preserve"`

## `quotes`

Control the quotes.

- **Type**: `"preferDouble" | "preferSingle" | "forceDouble" | "forceSingle"`
- **Allowed values**:
  - `"preferDouble"` — Use double quotes as possible. However if there're quotes or escaped characters in strings, quotes will be kept as-is.
  - `"preferSingle"` — Use single quotes as possible. However if there're quotes or `\` characters in strings, quotes will be kept as-is.
  - `"forceDouble"` — Use double quotes as possible. However if there're escaped characters in strings, quotes will be kept as-is.
  - `"forceSingle"` — Use single quotes as possible. However if there're `\` char or `"` char in strings, quotes will be kept as-is.
- **Default**: `"preferDouble"`

## `trailingComma`

Control whether trailing comma should be inserted or not.

- **Type**: `boolean`
- **Default**: `true`

## `trimTrailingWhitespaces`

Control whether trailing whitespaces should be trimmed or not.

- **Type**: `boolean`
- **Default**: `true`

## `trimTrailingZero`

Control whether trailing zeros should be removed or not.

- **Type**: `boolean`
- **Default**: `false`

