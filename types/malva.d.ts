// Generated from malva JSON schema
// Do not edit manually.

export interface MalvaOptions {
  /**
   * Control whether to tweak multi-line comments indentation.
   *
   * @default true
   */
  alignComments?: boolean;

  /**
   * Control the quotes of strings.
   *
   * Allowed values:
   * - "alwaysDouble" - Always use double quotes. Double quotes in strings will be escaped.
   * - "alwaysSingle" - Always use single quotes. Single quotes in strings will be escaped.
   * - "preferDouble" - Use double quotes as possible. However if there're double quotes in strings, quotes will be kept as-is.
   * - "preferSingle" - Use single quotes as possible. However if there're single quotes in strings, quotes will be kept as-is.
   *
   * @default "alwaysDouble"
   */
  "attrSelector.quotes"?: "alwaysDouble" | "alwaysSingle" | "preferDouble" | "preferSingle";

  /**
   * Control whether should add quotes to attribute value in selector or not if it's not quoted.
   *
   * Allowed values:
   * - "always" - Always add quotes.
   * - "ignore" - Don't add quotes to those that're not quoted. For quoted value, quotes won't be removed.
   *
   * @default "always"
   */
  attrValueQuotes?: "always" | "ignore";

  /**
   * Control line break behavior after selector commas.
   *
   * Allowed values:
   * - "always" - Always insert line break after comma.
   * - "consistent" - If the whole selector can be put on a single line, there won't be line breaks; otherwise, there will be line breaks after each comma.
   * - "wrap" - Selector will be put on one line as possible. Once it exceeds `printWidth`, line break will be inserted where the code exceeds `printWidth`.
   *
   * @default "consistent"
   */
  blockSelectorLinebreak?: "always" | "consistent" | "wrap";

  /**
   * Control the strategy of sorting CSS declarations (a.k.a. properties). If it's `null`, it won't sort CSS declarations.
   *
   * Allowed values:
   * - "alphabetical" - Order in a simple alphabetical manner from a - z. This strategy will also sort unknown properties.
   * - "smacss" - Order from most important, flow affecting properties, to least important properties. Unknown properties won't be sorted.
   * - "concentric" - Order properties applying outside the box model, moving inward to intrinsic changes. Unknown properties won't be sorted.
   * - null - Don't sort CSS declarations.
   *
   * @default null
   */
  declarationOrder?: "alphabetical" | "smacss" | "concentric" | null;

  /**
   * Control how declarations are considered as a group when sorting.
   *
   * Allowed values:
   * - "nonDeclaration" - Non-declaration statements are considered as the boundaries of declaration group.
   * - "nonDeclarationAndEmptyLine" - Non-declaration statements and empty lines (without comments) are considered as the boundaries of declaration group.
   *
   * @default "nonDeclaration"
   */
  declarationOrderGroupBy?: "nonDeclaration" | "nonDeclarationAndEmptyLine";

  /**
   * Control whether whitespace should be inserted at the beginning and end of comments.
   *
   * @default false
   */
  formatComments?: boolean;

  /**
   * Control whether items should be placed on single line as possible, even they're originally on multiple lines.
   *
   * @default false
   */
  "functionArgs.preferSingleLine"?: boolean;

  /**
   * Control the case of hex color values.
   *
   * Allowed values:
   * - "ignore" - Hex color values will be kept as-is.
   * - "lower" - Hex color values will be converted to lower case.
   * - "upper" - Hex color values will be converted to upper case.
   *
   * @default "lower"
   */
  hexCase?: "ignore" | "lower" | "upper";

  /**
   * Control the hex color values in short-hand form or long-hand form.
   *
   * Allowed values:
   * - "short" - Hex color values will be converted to short-hand form.
   * - "long" - Hex color values will be converted to long-hand form.
   * - null - Hex color values will be kept as-is.
   *
   * @default null
   */
  hexColorLength?: "short" | "long" | null;

  /**
   * Text directive for ignoring formatting specific statement.
   *
   * @default "malva-ignore"
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
   * Control whether to use percentage or keyword (`from` and `to`) notation as keyframe selectors.
   *
   * Allowed values:
   * - "keyword" - Use keyword notation. This only affects `0%` and `100%`. For other percentage values, they will be kept as-is.
   * - "percentage" - Use percentage notation.
   * - null - Keyframe selector notation will be kept as-is.
   *
   * @default null
   */
  keyframeSelectorNotation?: "keyword" | "percentage" | null;

  /**
   * Control whether items should be placed on single line as possible, even they're originally on multiple lines.
   *
   * @default false
   */
  "lessImportOptions.preferSingleLine"?: boolean;

  /**
   * Control whether items should be placed on single line as possible, even they're originally on multiple lines.
   *
   * @default false
   */
  "lessMixinArgs.preferSingleLine"?: boolean;

  /**
   * Control whether items should be placed on single line as possible, even they're originally on multiple lines.
   *
   * @default false
   */
  "lessMixinParams.preferSingleLine"?: boolean;

  /**
   * Specify use `\n` (LF) or `\r\n` (CRLF) for line break.
   *
   * Allowed values:
   * - "lf"
   * - "crlf"
   *
   * @default "lf"
   */
  lineBreak?: "lf" | "crlf";

  /**
   * Control whether line break should be inserted in pseudo class/element parens or not if current line is too long.
   *
   * @default false
   */
  linebreakInPseudoParens?: boolean;

  /**
   * Control whether omit leading zero before dot of numbers or not.
   *
   * @default false
   */
  omitNumberLeadingZero?: boolean;

  /**
   * Control whether line break should come before or after operators.
   *
   * Allowed values:
   * - "before" - Line break will come before operators.
   * - "after" - Line break will come after operators.
   *
   * @default "after"
   */
  operatorLinebreak?: "before" | "after";

  /**
   * Control whether items should be placed on single line as possible, even they're originally on multiple lines.
   *
   * @default false
   */
  preferSingleLine?: boolean;

  /**
   * The line width limitation that Malva should *(but not must)* avoid exceeding. Malva will try its best to keep line width less than this value, but it may exceed for some cases, for example, a very very long single word.
   *
   * @default 80
   */
  printWidth?: number;

  /**
   * Control the quotes of strings.
   *
   * Allowed values:
   * - "alwaysDouble" - Always use double quotes. Double quotes in strings will be escaped.
   * - "alwaysSingle" - Always use single quotes. Single quotes in strings will be escaped.
   * - "preferDouble" - Use double quotes as possible. However if there're double quotes in strings, quotes will be kept as-is.
   * - "preferSingle" - Use single quotes as possible. However if there're single quotes in strings, quotes will be kept as-is.
   *
   * @default "alwaysDouble"
   */
  quotes?: "alwaysDouble" | "alwaysSingle" | "preferDouble" | "preferSingle";

  /**
   * Control whether items should be placed on single line as possible, even they're originally on multiple lines.
   *
   * @default false
   */
  "sassContentAtRule.preferSingleLine"?: boolean;

  /**
   * Control whether items should be placed on single line as possible, even they're originally on multiple lines.
   *
   * @default false
   */
  "sassIncludeAtRule.preferSingleLine"?: boolean;

  /**
   * Control whether items should be placed on single line as possible, even they're originally on multiple lines.
   *
   * @default false
   */
  "sassMap.preferSingleLine"?: boolean;

  /**
   * Control whether items should be placed on single line as possible, even they're originally on multiple lines.
   *
   * @default false
   */
  "sassModuleConfig.preferSingleLine"?: boolean;

  /**
   * Control whether items should be placed on single line as possible, even they're originally on multiple lines.
   *
   * @default false
   */
  "sassParams.preferSingleLine"?: boolean;

  /**
   * Text directive for overriding selector formatting.
   *
   * @default "malva-selector-override"
   */
  selectorOverrideCommentDirective?: string;

  /**
   * Control whether items should be placed on single line as possible, even they're originally on multiple lines.
   *
   * @default false
   */
  "selectors.preferSingleLine"?: boolean;

  /**
   * Control the threshold value for putting block on a single line. If the number of statements in a block is less than or equal to this value, the block will be put on a single line as possible, but when the code can't fit on single line, it will still break into multiple lines.
   *
   * @default null
   */
  singleLineBlockThreshold?: number | null;

  /**
   * Control whether to force to format all top-level declarations on a single line.
   *
   * @default false
   */
  singleLineTopLevelDeclarations?: boolean;

  /**
   * Control whether trailing comma should be inserted or not.
   *
   * @default false
   */
  trailingComma?: boolean;

  /**
   * Specify use space or tab for indentation.
   *
   * @default false
   */
  useTabs?: boolean;

}
