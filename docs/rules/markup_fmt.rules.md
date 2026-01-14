# Markup (HTML/Vue/Svelte/Astro) Formatter Rules

> Generated from the markup_fmt JSON schema.

## `angularNextControlFlowSameLine`

Control whether the next Angular control flow code should be on the same line with previous `}` or not.

- **Type**: `boolean`
- **Default**: `true`

## `astro.scriptIndent`

Control whether the code block in the `<script>` tag should be indented or not for Astro.

- **Type**: `boolean | null`
- **Default**: `null`

## `astro.styleIndent`

Control whether the code block in the `<style>` tag should be indented or not for Astro.

- **Type**: `boolean | null`
- **Default**: `null`

## `astroAttrShorthand`

Control whether Astro attribute should be written in short-hand form or not when possible.

- **Type**: `boolean | null`
- **Default**: `null`

## `closingBracketSameLine`

Control the closing bracket (`>`) of a multi-line element should come at the end of the last line or on the next line (with a line break).

- **Type**: `boolean`
- **Default**: `false`

## `closingTagLineBreakForEmpty`

When there're no children in an element, this option controls whether to insert a line break before the closing tag or not.

- **Type**: `"always" | "fit" | "never"`
- **Allowed values**:
  - `"always"` — Always insert a line break before the closing tag.
  - `"fit"` — Only insert a line break if it doesn't fit the `printWidth` option.
  - `"never"` — Don't insert a line break.
- **Default**: `"fit"`

## `component.selfClosing`

Control whether Vue/Svelte/Astro/Angular component should be self-closed or not if it doesn't have children.

- **Type**: `boolean | null`
- **Default**: `null`

## `component.vSlotStyle`

Control Vue `v-slot` directive style for Vue components.

- **Type**: `"short" | "long" | "vSlot" | null`
- **Allowed values**:
  - `"short"`
  - `"long"`
  - `"vSlot"`
  - `null`
- **Default**: `null`

## `component.whitespaceSensitivity`

Control the whitespace sensitivity before and after the children of an element for components.

- **Type**: `"css" | "strict" | "ignore" | null`
- **Allowed values**:
  - `"css"` — Respect the default value of CSS `display` property.
  - `"strict"` — Whitespace (or the lack of it) around all tags is considered significant.
  - `"ignore"` — Whitespace (or the lack of it) around all tags is considered insignificant.
  - `null` — Use the value of `whitespaceSensitivity` option.
- **Default**: `null`

## `default.vSlotStyle`

Control Vue `v-slot` directive style for default slot.

- **Type**: `"short" | "long" | "vSlot" | null`
- **Allowed values**:
  - `"short"`
  - `"long"`
  - `"vSlot"`
  - `null`
- **Default**: `null`

## `doctypeKeywordCase`

Control the case of "doctype" keyword in `<!DOCTYPE>`.

- **Type**: `"ignore" | "upper" | "lower"`
- **Allowed values**:
  - `"ignore"` — Keep the case as-is.
  - `"upper"` — Print "DOCTYPE" in upper case.
  - `"lower"` — Print "doctype" in lower case.
- **Default**: `"upper"`

## `formatComments`

Control whether whitespace should be inserted at the beginning and end of comments and comments should be indented properly or not.

- **Type**: `boolean`
- **Default**: `false`

## `html.normal.selfClosing`

Control whether HTML normal element should be self-closed or not if it doesn't have children.

- **Type**: `boolean | null`
- **Default**: `null`

## `html.scriptIndent`

Control whether the code block in the `<script>` tag should be indented or not for HTML.

- **Type**: `boolean | null`
- **Default**: `null`

## `html.styleIndent`

Control whether the code block in the `<style>` tag should be indented or not for HTML.

- **Type**: `boolean | null`
- **Default**: `null`

## `html.void.selfClosing`

Control whether HTML void element should be self-closed or not if it doesn't have children.

- **Type**: `boolean | null`
- **Default**: `null`

## `ignoreCommentDirective`

Text directive for ignoring formatting specific element or node.

- **Type**: `string`
- **Default**: `"markup-fmt-ignore"`

## `ignoreFileCommentDirective`

Text directive for ignoring formatting a whole file.

- **Type**: `string`
- **Default**: `"dprint-ignore-file"`

## `indentWidth`

Size of indentation. When enabled `useTabs`, this option may be disregarded, since only one tab will be inserted when indented once.

- **Type**: `number`
- **Default**: `2`

## `lineBreak`

Specify whether use `\n` (LF) or `\r\n` (CRLF) for line break.

- **Type**: `"lf" | "crlf"`
- **Allowed values**:
  - `"lf"`
  - `"crlf"`
- **Default**: `"lf"`

## `mathml.selfClosing`

Control whether MathML element should be self-closed or not if it doesn't have children.

- **Type**: `boolean | null`
- **Default**: `null`

## `maxAttrsPerLine`

Control the maximum number of attributes in one line. If this option is unset, there won't be any limitations. This option conflicts with `preferAttrsSingleLine` option.

- **Type**: `number | null`
- **Default**: `null`

## `named.vSlotStyle`

Control Vue `v-slot` directive style for named slot.

- **Type**: `"short" | "long" | "vSlot" | null`
- **Allowed values**:
  - `"short"`
  - `"long"`
  - `"vSlot"`
  - `null`
- **Default**: `null`

## `preferAttrsSingleLine`

Control whether attributes should be put on single line when possible. This option conflicts with `maxAttrsPerLine` option.

- **Type**: `boolean`
- **Default**: `false`

## `printWidth`

The line width limitation that markup_fmt should *(but not must)* avoid exceeding. markup_fmt will try its best to keep line width less than this value, but it may exceed for some cases, for example, a very very long single word.

- **Type**: `number`
- **Default**: `80`

## `quotes`

Control the quotes of attribute value.

- **Type**: `"double" | "single"`
- **Allowed values**:
  - `"double"` — Use double quotes as possible. However if there're double quotes in strings, quotes will be kept as-is.
  - `"single"` — Use single quotes as possible. However if there're single quotes in strings, quotes will be kept as-is.
- **Default**: `"double"`

## `scriptFormatter`

Tell markup_fmt what script formatter you are using.

- **Type**: `string | null`
- **Default**: `"dprint"`

## `scriptIndent`

Control whether the code block in the `<script>` tag should be indented or not.

- **Type**: `boolean`
- **Default**: `false`

## `singleAttrSameLine`

Control whether single attribute should be put on the same line with tag name.

- **Type**: `boolean`
- **Default**: `true`

## `strictSvelteAttr`

Control whether Svelte attribute value should be in strict mode or not.

- **Type**: `boolean`
- **Default**: `false`

## `styleIndent`

Control whether the code block in the `<style>` tag should be indented or not.

- **Type**: `boolean`
- **Default**: `false`

## `svelte.scriptIndent`

Control whether the code block in the `<script>` tag should be indented or not for Svelte.

- **Type**: `boolean | null`
- **Default**: `null`

## `svelte.styleIndent`

Control whether the code block in the `<style>` tag should be indented or not for Svelte.

- **Type**: `boolean | null`
- **Default**: `null`

## `svelteAttrShorthand`

Control whether Svelte attribute should be written in short-hand form or not when possible.

- **Type**: `boolean | null`
- **Default**: `null`

## `svelteDirectiveShorthand`

Control whether Svelte directive should be written in short-hand form or not when possible.

- **Type**: `boolean | null`
- **Default**: `null`

## `svg.selfClosing`

Control whether SVG element should be self-closed or not if it doesn't have children.

- **Type**: `boolean | null`
- **Default**: `null`

## `useTabs`

Specify use space or tab for indentation.

- **Type**: `boolean`
- **Default**: `false`

## `vBindSameNameShortHand`

Control whether Vue attribute should be written in short-hand form or not if attribute name and value are same.

- **Type**: `boolean | null`
- **Default**: `null`

## `vBindStyle`

Control Vue `v-bind` directive style.

- **Type**: `"short" | "long" | null`
- **Allowed values**:
  - `"short"` — Use short-hand form like `:value`.
  - `"long"` — Use long-hand form like `v-bind:value`.
  - `null` — Style of `v-bind` directive won't be changed.
- **Default**: `null`

## `vForDelimiterStyle`

Control Vue `v-for` directive delimiter style.

- **Type**: `"in" | "of" | null`
- **Allowed values**:
  - `"in"` — Use `in` as `v-for` delimiter.
  - `"of"` — Use `of` as `v-for` delimiter.
  - `null` — Style of `v-for` directive delimiter won't be changed.
- **Default**: `null`

## `vOnStyle`

Control Vue `v-on` directive style.

- **Type**: `"short" | "long" | null`
- **Allowed values**:
  - `"short"` — Use short-hand form like `@click`.
  - `"long"` — Use long-hand form like `v-on:click`.
  - `null` — Style of `v-on` directive won't be changed.
- **Default**: `null`

## `vSlotStyle`

Control Vue `v-slot` directive style.

- **Type**: `"short" | "long" | "vSlot" | null`
- **Allowed values**:
  - `"short"` — Use short-hand form like `#default` or `#named`.
  - `"long"` — Use long-hand form like `v-slot:default` or `v-slot:named`.
  - `"vSlot"` — For default slot, use `v-slot` (shorter than `#default`); otherwise, use short-hand form.
  - `null` — Style of `v-slot` directive won't be changed.
- **Default**: `null`

## `vue.scriptIndent`

Control whether the code block in the `<script>` tag should be indented or not for Vue.

- **Type**: `boolean | null`
- **Default**: `null`

## `vue.styleIndent`

Control whether the code block in the `<style>` tag should be indented or not for Vue.

- **Type**: `boolean | null`
- **Default**: `null`

## `vueComponentCase`

Control the component naming style in template.

- **Type**: `"ignore" | "pascalCase" | "kebabCase"`
- **Allowed values**:
  - `"ignore"` — Component names will not be changed.
  - `"pascalCase"` — Component names will be converted to PascalCase.
  - `"kebabCase"` — Component names will be converted to kebab-case.
- **Default**: `"ignore"`

## `whitespaceSensitivity`

Control the whitespace sensitivity before and after the children of an element.

- **Type**: `"css" | "strict" | "ignore"`
- **Allowed values**:
  - `"css"` — Respect the default value of CSS `display` property.
  - `"strict"` — Whitespace (or the lack of it) around all tags is considered significant.
  - `"ignore"` — Whitespace (or the lack of it) around all tags is considered insignificant.
- **Default**: `"css"`

