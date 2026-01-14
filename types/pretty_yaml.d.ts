// Generated from pretty_yaml JSON schema
// Do not edit manually.

export interface YamlOptions {
  /**
   * Control whether whitespace should be inserted between braces or not.
   *
   * @default true
   */
  braceSpacing?: boolean;

  /**
   * Control whether whitespace should be inserted between brackets or not.
   *
   * @default false
   */
  bracketSpacing?: boolean;

  /**
   * Control the whitespace behavior of block compact map in block sequence value. This option is only effective when `indentWidth` is greater than 2.
   *
   * Allowed values:
   * - "oneSpace" - Insert only one space after `-`.
   * - "indent" - Insert spaces to align indentation, respecting `indentWidth` option.
   *
   * @default "oneSpace"
   */
  dashSpacing?: "oneSpace" | "indent";

  /**
   * Control whether items should be placed on single line as possible, even they're originally on multiple lines.
   *
   * @default false
   */
  "flowMap.preferSingleLine"?: boolean;

  /**
   * Control whether items should be placed on single line as possible, even they're originally on multiple lines.
   *
   * @default false
   */
  "flowSequence.preferSingleLine"?: boolean;

  /**
   * Control whether whitespace should be inserted at the beginning of comments or not.
   *
   * @default false
   */
  formatComments?: boolean;

  /**
   * Text directive for ignoring formatting specific content.
   *
   * @default "pretty-yaml-ignore"
   */
  ignoreCommentDirective?: string;

  /**
   * Control whether block sequence should be indented or not in a block map.
   *
   * @default true
   */
  indentBlockSequenceInMap?: boolean;

  /**
   * Size of indentation.
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
   * Control whether items should be placed on single line as possible, even they're originally on multiple lines.
   *
   * @default false
   */
  preferSingleLine?: boolean;

  /**
   * The line width limitation that Pretty YAML should *(but not must)* avoid exceeding. Pretty YAML will try its best to keep line width less than this value, but it may exceed for some cases, for example, a very very long single word.
   *
   * @default 80
   */
  printWidth?: number;

  /**
   * Control whether to wrap prose in plain scalars when they exceed the print width.
   *
   * Allowed values:
   * - "preserve" - Don't change how prose is wrapped.
   * - "always" - Wrap prose if it exceeds the print width.
   *
   * @default "preserve"
   */
  proseWrap?: "preserve" | "always";

  /**
   * Control the quotes.
   *
   * Allowed values:
   * - "preferDouble" - Use double quotes as possible. However if there're quotes or escaped characters in strings, quotes will be kept as-is.
   * - "preferSingle" - Use single quotes as possible. However if there're quotes or `\` characters in strings, quotes will be kept as-is.
   * - "forceDouble" - Use double quotes as possible. However if there're escaped characters in strings, quotes will be kept as-is.
   * - "forceSingle" - Use single quotes as possible. However if there're `\` char or `"` char in strings, quotes will be kept as-is.
   *
   * @default "preferDouble"
   */
  quotes?: "preferDouble" | "preferSingle" | "forceDouble" | "forceSingle";

  /**
   * Control whether trailing comma should be inserted or not.
   *
   * @default true
   */
  trailingComma?: boolean;

  /**
   * Control whether trailing whitespaces should be trimmed or not.
   *
   * @default true
   */
  trimTrailingWhitespaces?: boolean;

  /**
   * Control whether trailing zeros should be removed or not.
   *
   * @default false
   */
  trimTrailingZero?: boolean;

}
