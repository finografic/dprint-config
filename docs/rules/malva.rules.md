# Malva (CSS/SCSS/Sass) Formatter Rules

> Generated from the malva JSON schema.

## `alignComments`

Control whether to tweak multi-line comments indentation.

- **Type**: `boolean`
- **Default**: `true`

## `attrSelector.quotes`

Control the quotes of strings.

- **Type**: `"alwaysDouble" | "alwaysSingle" | "preferDouble" | "preferSingle"`
- **Allowed values**:
  - `"alwaysDouble"` — Always use double quotes. Double quotes in strings will be escaped.
  - `"alwaysSingle"` — Always use single quotes. Single quotes in strings will be escaped.
  - `"preferDouble"` — Use double quotes as possible. However if there're double quotes in strings, quotes will be kept as-is.
  - `"preferSingle"` — Use single quotes as possible. However if there're single quotes in strings, quotes will be kept as-is.
- **Default**: `"alwaysDouble"`

## `attrValueQuotes`

Control whether should add quotes to attribute value in selector or not if it's not quoted.

- **Type**: `"always" | "ignore"`
- **Allowed values**:
  - `"always"` — Always add quotes.
  - `"ignore"` — Don't add quotes to those that're not quoted. For quoted value, quotes won't be removed.
- **Default**: `"always"`

## `blockSelectorLinebreak`

Control line break behavior after selector commas.

- **Type**: `"always" | "consistent" | "wrap"`
- **Allowed values**:
  - `"always"` — Always insert line break after comma.
  - `"consistent"` — If the whole selector can be put on a single line, there won't be line breaks; otherwise, there will be line breaks after each comma.
  - `"wrap"` — Selector will be put on one line as possible. Once it exceeds `printWidth`, line break will be inserted where the code exceeds `printWidth`.
- **Default**: `"consistent"`

## `declarationOrder`

Control the strategy of sorting CSS declarations (a.k.a. properties). If it's `null`, it won't sort CSS declarations.

- **Type**: `"alphabetical" | "smacss" | "concentric" | null`
- **Allowed values**:
  - `"alphabetical"` — Order in a simple alphabetical manner from a - z. This strategy will also sort unknown properties.
  - `"smacss"` — Order from most important, flow affecting properties, to least important properties. Unknown properties won't be sorted.
  - `"concentric"` — Order properties applying outside the box model, moving inward to intrinsic changes. Unknown properties won't be sorted.
  - `null` — Don't sort CSS declarations.
- **Default**: `null`

## `declarationOrderGroupBy`

Control how declarations are considered as a group when sorting.

- **Type**: `"nonDeclaration" | "nonDeclarationAndEmptyLine"`
- **Allowed values**:
  - `"nonDeclaration"` — Non-declaration statements are considered as the boundaries of declaration group.
  - `"nonDeclarationAndEmptyLine"` — Non-declaration statements and empty lines (without comments) are considered as the boundaries of declaration group.
- **Default**: `"nonDeclaration"`

## `formatComments`

Control whether whitespace should be inserted at the beginning and end of comments.

- **Type**: `boolean`
- **Default**: `false`

## `functionArgs.preferSingleLine`

Control whether items should be placed on single line as possible, even they're originally on multiple lines.

- **Type**: `boolean`
- **Default**: `false`

## `hexCase`

Control the case of hex color values.

- **Type**: `"ignore" | "lower" | "upper"`
- **Allowed values**:
  - `"ignore"` — Hex color values will be kept as-is.
  - `"lower"` — Hex color values will be converted to lower case.
  - `"upper"` — Hex color values will be converted to upper case.
- **Default**: `"lower"`

## `hexColorLength`

Control the hex color values in short-hand form or long-hand form.

- **Type**: `"short" | "long" | null`
- **Allowed values**:
  - `"short"` — Hex color values will be converted to short-hand form.
  - `"long"` — Hex color values will be converted to long-hand form.
  - `null` — Hex color values will be kept as-is.
- **Default**: `null`

## `ignoreCommentDirective`

Text directive for ignoring formatting specific statement.

- **Type**: `string`
- **Default**: `"malva-ignore"`

## `ignoreFileCommentDirective`

Text directive for ignoring formatting a whole file.

- **Type**: `string`
- **Default**: `"dprint-ignore-file"`

## `indentWidth`

Size of indentation. When enabled `useTabs`, this option may be disregarded, since only one tab will be inserted when indented once.

- **Type**: `number`
- **Default**: `2`

## `keyframeSelectorNotation`

Control whether to use percentage or keyword (`from` and `to`) notation as keyframe selectors.

- **Type**: `"keyword" | "percentage" | null`
- **Allowed values**:
  - `"keyword"` — Use keyword notation. This only affects `0%` and `100%`. For other percentage values, they will be kept as-is.
  - `"percentage"` — Use percentage notation.
  - `null` — Keyframe selector notation will be kept as-is.
- **Default**: `null`

## `lessImportOptions.preferSingleLine`

Control whether items should be placed on single line as possible, even they're originally on multiple lines.

- **Type**: `boolean`
- **Default**: `false`

## `lessMixinArgs.preferSingleLine`

Control whether items should be placed on single line as possible, even they're originally on multiple lines.

- **Type**: `boolean`
- **Default**: `false`

## `lessMixinParams.preferSingleLine`

Control whether items should be placed on single line as possible, even they're originally on multiple lines.

- **Type**: `boolean`
- **Default**: `false`

## `lineBreak`

Specify use `\n` (LF) or `\r\n` (CRLF) for line break.

- **Type**: `"lf" | "crlf"`
- **Allowed values**:
  - `"lf"`
  - `"crlf"`
- **Default**: `"lf"`

## `linebreakInPseudoParens`

Control whether line break should be inserted in pseudo class/element parens or not if current line is too long.

- **Type**: `boolean`
- **Default**: `false`

## `omitNumberLeadingZero`

Control whether omit leading zero before dot of numbers or not.

- **Type**: `boolean`
- **Default**: `false`

## `operatorLinebreak`

Control whether line break should come before or after operators.

- **Type**: `"before" | "after"`
- **Allowed values**:
  - `"before"` — Line break will come before operators.
  - `"after"` — Line break will come after operators.
- **Default**: `"after"`

## `preferSingleLine`

Control whether items should be placed on single line as possible, even they're originally on multiple lines.

- **Type**: `boolean`
- **Default**: `false`

## `printWidth`

The line width limitation that Malva should *(but not must)* avoid exceeding. Malva will try its best to keep line width less than this value, but it may exceed for some cases, for example, a very very long single word.

- **Type**: `number`
- **Default**: `80`

## `quotes`

Control the quotes of strings.

- **Type**: `"alwaysDouble" | "alwaysSingle" | "preferDouble" | "preferSingle"`
- **Allowed values**:
  - `"alwaysDouble"` — Always use double quotes. Double quotes in strings will be escaped.
  - `"alwaysSingle"` — Always use single quotes. Single quotes in strings will be escaped.
  - `"preferDouble"` — Use double quotes as possible. However if there're double quotes in strings, quotes will be kept as-is.
  - `"preferSingle"` — Use single quotes as possible. However if there're single quotes in strings, quotes will be kept as-is.
- **Default**: `"alwaysDouble"`

## `sassContentAtRule.preferSingleLine`

Control whether items should be placed on single line as possible, even they're originally on multiple lines.

- **Type**: `boolean`
- **Default**: `false`

## `sassIncludeAtRule.preferSingleLine`

Control whether items should be placed on single line as possible, even they're originally on multiple lines.

- **Type**: `boolean`
- **Default**: `false`

## `sassMap.preferSingleLine`

Control whether items should be placed on single line as possible, even they're originally on multiple lines.

- **Type**: `boolean`
- **Default**: `false`

## `sassModuleConfig.preferSingleLine`

Control whether items should be placed on single line as possible, even they're originally on multiple lines.

- **Type**: `boolean`
- **Default**: `false`

## `sassParams.preferSingleLine`

Control whether items should be placed on single line as possible, even they're originally on multiple lines.

- **Type**: `boolean`
- **Default**: `false`

## `selectorOverrideCommentDirective`

Text directive for overriding selector formatting.

- **Type**: `string`
- **Default**: `"malva-selector-override"`

## `selectors.preferSingleLine`

Control whether items should be placed on single line as possible, even they're originally on multiple lines.

- **Type**: `boolean`
- **Default**: `false`

## `singleLineBlockThreshold`

Control the threshold value for putting block on a single line. If the number of statements in a block is less than or equal to this value, the block will be put on a single line as possible, but when the code can't fit on single line, it will still break into multiple lines.

- **Type**: `number | null`
- **Default**: `null`

## `singleLineTopLevelDeclarations`

Control whether to force to format all top-level declarations on a single line.

- **Type**: `boolean`
- **Default**: `false`

## `trailingComma`

Control whether trailing comma should be inserted or not.

- **Type**: `boolean`
- **Default**: `false`

## `useTabs`

Specify use space or tab for indentation.

- **Type**: `boolean`
- **Default**: `false`

