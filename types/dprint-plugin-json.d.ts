// Generated from dprint-plugin-json JSON schema
// Do not edit manually.

export interface JsonOptions {
  /**
   * If arrays and objects should collapse to a single line if it would be below the line width.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "array.preferSingleLine"?: true | false;

  /**
   * Forces a space after slashes.  For example: `// comment` instead of `//comment`
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default true
   */
  "commentLine.forceSpaceAfterSlashes"?: true | false;

  /**
   * Top level configuration that sets the configuration to what is used in Deno.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  deno?: true | false;

  /**
   * The text to use for an ignore comment (ex. `// dprint-ignore`).
   *
   * @default "dprint-ignore"
   */
  ignoreNodeCommentText?: string;

  /**
   * The number of characters for an indent.
   *
   * @default 2
   */
  indentWidth?: number;

  /**
   * When `trailingCommas` is `jsonc`, treat these files as JSONC and use trailing commas (ex. `["tsconfig.json", ".vscode/settings.json"]`).
   */
  jsonTrailingCommaFiles?: unknown[];

  /**
   * The width of a line the printer will try to stay under. Note that the printer may exceed this width in certain cases.
   *
   * @default 120
   */
  lineWidth?: number;

  /**
   * Whether the configuration is not allowed to be overriden or extended.
   */
  locked?: boolean;

  /**
   * The kind of newline to use.
   *
   * Allowed values:
   * - "auto" - For each file, uses the newline kind found at the end of the last line.
   * - "crlf" - Uses carriage return, line feed.
   * - "lf" - Uses line feed.
   * - "system" - Uses the system standard (ex. crlf on Windows).
   *
   * @default "lf"
   */
  newLineKind?: "auto" | "crlf" | "lf" | "system";

  /**
   * If arrays and objects should collapse to a single line if it would be below the line width.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "object.preferSingleLine"?: true | false;

  /**
   * If arrays and objects should collapse to a single line if it would be below the line width.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  preferSingleLine?: true | false;

  /**
   * Whether to use trailing commas.
   *
   * Allowed values:
   * - "always" - Always format with trailing commas. Beware: trailing commas can cause many JSON parsers to fail.
   * - "jsonc" - Use trailing commas in JSONC files and do not use trailing commas in JSON files.
   * - "maintain" - Keep the trailing comma if it exists.
   * - "never" - Never format with trailing commas.
   *
   * @default "jsonc"
   */
  trailingCommas?: "always" | "jsonc" | "maintain" | "never";

  /**
   * Whether to use tabs (true) or spaces (false).
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  useTabs?: true | false;

}
