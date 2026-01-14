// Generated from markup_fmt JSON schema
// Do not edit manually.

export interface MarkupOptions {
  /**
   * Control whether the next Angular control flow code should be on the same line with previous `}` or not.
   *
   * @default true
   */
  angularNextControlFlowSameLine?: boolean;

  /**
   * Control whether the code block in the `<script>` tag should be indented or not for Astro.
   *
   * @default null
   */
  "astro.scriptIndent"?: boolean | null;

  /**
   * Control whether the code block in the `<style>` tag should be indented or not for Astro.
   *
   * @default null
   */
  "astro.styleIndent"?: boolean | null;

  /**
   * Control whether Astro attribute should be written in short-hand form or not when possible.
   *
   * @default null
   */
  astroAttrShorthand?: boolean | null;

  /**
   * Control the closing bracket (`>`) of a multi-line element should come at the end of the last line or on the next line (with a line break).
   *
   * @default false
   */
  closingBracketSameLine?: boolean;

  /**
   * When there're no children in an element, this option controls whether to insert a line break before the closing tag or not.
   *
   * Allowed values:
   * - "always" - Always insert a line break before the closing tag.
   * - "fit" - Only insert a line break if it doesn't fit the `printWidth` option.
   * - "never" - Don't insert a line break.
   *
   * @default "fit"
   */
  closingTagLineBreakForEmpty?: "always" | "fit" | "never";

  /**
   * Control whether Vue/Svelte/Astro/Angular component should be self-closed or not if it doesn't have children.
   *
   * @default null
   */
  "component.selfClosing"?: boolean | null;

  /**
   * Control Vue `v-slot` directive style for Vue components.
   *
   * Allowed values:
   * - "short"
   * - "long"
   * - "vSlot"
   * - null
   *
   * @default null
   */
  "component.vSlotStyle"?: "short" | "long" | "vSlot" | null;

  /**
   * Control the whitespace sensitivity before and after the children of an element for components.
   *
   * Allowed values:
   * - "css" - Respect the default value of CSS `display` property.
   * - "strict" - Whitespace (or the lack of it) around all tags is considered significant.
   * - "ignore" - Whitespace (or the lack of it) around all tags is considered insignificant.
   * - null - Use the value of `whitespaceSensitivity` option.
   *
   * @default null
   */
  "component.whitespaceSensitivity"?: "css" | "strict" | "ignore" | null;

  /**
   * Control Vue `v-slot` directive style for default slot.
   *
   * Allowed values:
   * - "short"
   * - "long"
   * - "vSlot"
   * - null
   *
   * @default null
   */
  "default.vSlotStyle"?: "short" | "long" | "vSlot" | null;

  /**
   * Control the case of "doctype" keyword in `<!DOCTYPE>`.
   *
   * Allowed values:
   * - "ignore" - Keep the case as-is.
   * - "upper" - Print "DOCTYPE" in upper case.
   * - "lower" - Print "doctype" in lower case.
   *
   * @default "upper"
   */
  doctypeKeywordCase?: "ignore" | "upper" | "lower";

  /**
   * Control whether whitespace should be inserted at the beginning and end of comments and comments should be indented properly or not.
   *
   * @default false
   */
  formatComments?: boolean;

  /**
   * Control whether HTML normal element should be self-closed or not if it doesn't have children.
   *
   * @default null
   */
  "html.normal.selfClosing"?: boolean | null;

  /**
   * Control whether the code block in the `<script>` tag should be indented or not for HTML.
   *
   * @default null
   */
  "html.scriptIndent"?: boolean | null;

  /**
   * Control whether the code block in the `<style>` tag should be indented or not for HTML.
   *
   * @default null
   */
  "html.styleIndent"?: boolean | null;

  /**
   * Control whether HTML void element should be self-closed or not if it doesn't have children.
   *
   * @default null
   */
  "html.void.selfClosing"?: boolean | null;

  /**
   * Text directive for ignoring formatting specific element or node.
   *
   * @default "markup-fmt-ignore"
   */
  ignoreCommentDirective?: string;

  /**
   * Text directive for ignoring formatting a whole file.
   *
   * @default "dprint-ignore-file"
   */
  ignoreFileCommentDirective?: string;

  /**
   * Size of indentation. When enabled `useTabs`, this option may be disregarded, since only one tab will be inserted when indented once.
   *
   * @default 2
   */
  indentWidth?: number;

  /**
   * Specify whether use `\n` (LF) or `\r\n` (CRLF) for line break.
   *
   * Allowed values:
   * - "lf"
   * - "crlf"
   *
   * @default "lf"
   */
  lineBreak?: "lf" | "crlf";

  /**
   * Control whether MathML element should be self-closed or not if it doesn't have children.
   *
   * @default null
   */
  "mathml.selfClosing"?: boolean | null;

  /**
   * Control the maximum number of attributes in one line. If this option is unset, there won't be any limitations. This option conflicts with `preferAttrsSingleLine` option.
   *
   * @default null
   */
  maxAttrsPerLine?: number | null;

  /**
   * Control Vue `v-slot` directive style for named slot.
   *
   * Allowed values:
   * - "short"
   * - "long"
   * - "vSlot"
   * - null
   *
   * @default null
   */
  "named.vSlotStyle"?: "short" | "long" | "vSlot" | null;

  /**
   * Control whether attributes should be put on single line when possible. This option conflicts with `maxAttrsPerLine` option.
   *
   * @default false
   */
  preferAttrsSingleLine?: boolean;

  /**
   * The line width limitation that markup_fmt should *(but not must)* avoid exceeding. markup_fmt will try its best to keep line width less than this value, but it may exceed for some cases, for example, a very very long single word.
   *
   * @default 80
   */
  printWidth?: number;

  /**
   * Control the quotes of attribute value.
   *
   * Allowed values:
   * - "double" - Use double quotes as possible. However if there're double quotes in strings, quotes will be kept as-is.
   * - "single" - Use single quotes as possible. However if there're single quotes in strings, quotes will be kept as-is.
   *
   * @default "double"
   */
  quotes?: "double" | "single";

  /**
   * Tell markup_fmt what script formatter you are using.
   *
   * @default "dprint"
   */
  scriptFormatter?: string | null;

  /**
   * Control whether the code block in the `<script>` tag should be indented or not.
   *
   * @default false
   */
  scriptIndent?: boolean;

  /**
   * Control whether single attribute should be put on the same line with tag name.
   *
   * @default true
   */
  singleAttrSameLine?: boolean;

  /**
   * Control whether Svelte attribute value should be in strict mode or not.
   *
   * @default false
   */
  strictSvelteAttr?: boolean;

  /**
   * Control whether the code block in the `<style>` tag should be indented or not.
   *
   * @default false
   */
  styleIndent?: boolean;

  /**
   * Control whether the code block in the `<script>` tag should be indented or not for Svelte.
   *
   * @default null
   */
  "svelte.scriptIndent"?: boolean | null;

  /**
   * Control whether the code block in the `<style>` tag should be indented or not for Svelte.
   *
   * @default null
   */
  "svelte.styleIndent"?: boolean | null;

  /**
   * Control whether Svelte attribute should be written in short-hand form or not when possible.
   *
   * @default null
   */
  svelteAttrShorthand?: boolean | null;

  /**
   * Control whether Svelte directive should be written in short-hand form or not when possible.
   *
   * @default null
   */
  svelteDirectiveShorthand?: boolean | null;

  /**
   * Control whether SVG element should be self-closed or not if it doesn't have children.
   *
   * @default null
   */
  "svg.selfClosing"?: boolean | null;

  /**
   * Specify use space or tab for indentation.
   *
   * @default false
   */
  useTabs?: boolean;

  /**
   * Control whether Vue attribute should be written in short-hand form or not if attribute name and value are same.
   *
   * @default null
   */
  vBindSameNameShortHand?: boolean | null;

  /**
   * Control Vue `v-bind` directive style.
   *
   * Allowed values:
   * - "short" - Use short-hand form like `:value`.
   * - "long" - Use long-hand form like `v-bind:value`.
   * - null - Style of `v-bind` directive won't be changed.
   *
   * @default null
   */
  vBindStyle?: "short" | "long" | null;

  /**
   * Control Vue `v-for` directive delimiter style.
   *
   * Allowed values:
   * - "in" - Use `in` as `v-for` delimiter.
   * - "of" - Use `of` as `v-for` delimiter.
   * - null - Style of `v-for` directive delimiter won't be changed.
   *
   * @default null
   */
  vForDelimiterStyle?: "in" | "of" | null;

  /**
   * Control Vue `v-on` directive style.
   *
   * Allowed values:
   * - "short" - Use short-hand form like `@click`.
   * - "long" - Use long-hand form like `v-on:click`.
   * - null - Style of `v-on` directive won't be changed.
   *
   * @default null
   */
  vOnStyle?: "short" | "long" | null;

  /**
   * Control Vue `v-slot` directive style.
   *
   * Allowed values:
   * - "short" - Use short-hand form like `#default` or `#named`.
   * - "long" - Use long-hand form like `v-slot:default` or `v-slot:named`.
   * - "vSlot" - For default slot, use `v-slot` (shorter than `#default`); otherwise, use short-hand form.
   * - null - Style of `v-slot` directive won't be changed.
   *
   * @default null
   */
  vSlotStyle?: "short" | "long" | "vSlot" | null;

  /**
   * Control whether the code block in the `<script>` tag should be indented or not for Vue.
   *
   * @default null
   */
  "vue.scriptIndent"?: boolean | null;

  /**
   * Control whether the code block in the `<style>` tag should be indented or not for Vue.
   *
   * @default null
   */
  "vue.styleIndent"?: boolean | null;

  /**
   * Control the component naming style in template.
   *
   * Allowed values:
   * - "ignore" - Component names will not be changed.
   * - "pascalCase" - Component names will be converted to PascalCase.
   * - "kebabCase" - Component names will be converted to kebab-case.
   *
   * @default "ignore"
   */
  vueComponentCase?: "ignore" | "pascalCase" | "kebabCase";

  /**
   * Control the whitespace sensitivity before and after the children of an element.
   *
   * Allowed values:
   * - "css" - Respect the default value of CSS `display` property.
   * - "strict" - Whitespace (or the lack of it) around all tags is considered significant.
   * - "ignore" - Whitespace (or the lack of it) around all tags is considered insignificant.
   *
   * @default "css"
   */
  whitespaceSensitivity?: "css" | "strict" | "ignore";

}
