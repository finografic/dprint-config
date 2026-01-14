// Generated from dprint-plugin-markdown JSON schema
// Do not edit manually.

export interface MarkdownOptions {
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
   * The character to use for emphasis/italics.
   *
   * Allowed values:
   * - "asterisks" - Uses asterisks (*) for emphasis.
   * - "underscores" - Uses underscores (_) for emphasis.
   *
   * @default "underscores"
   */
  emphasisKind?: "asterisks" | "underscores";

  /**
   * The text to use for an ignore directive (ex. `<!-- dprint-ignore -->`).
   *
   * @default "dprint-ignore"
   */
  ignoreDirective?: string;

  /**
   * The text to use for an ignore end directive (ex. `<!-- dprint-ignore-end -->`).
   *
   * @default "dprint-ignore-end"
   */
  ignoreEndDirective?: string;

  /**
   * The text to use for an ignore file directive (ex. `<!-- dprint-ignore-file -->`).
   *
   * @default "dprint-ignore-file"
   */
  ignoreFileDirective?: string;

  /**
   * The text to use for an ignore start directive (ex. `<!-- dprint-ignore-start -->`).
   *
   * @default "dprint-ignore-start"
   */
  ignoreStartDirective?: string;

  /**
   * The width of a line the printer will try to stay under. Note that the printer may exceed this width in certain cases.
   *
   * @default 80
   */
  lineWidth?: number;

  /**
   * Whether the configuration is not allowed to be overridden or extended.
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
   * The character to use for strong emphasis/bold.
   *
   * Allowed values:
   * - "asterisks" - Uses asterisks (**) for strong emphasis.
   * - "underscores" - Uses underscores (__) for strong emphasis.
   *
   * @default "asterisks"
   */
  strongKind?: "asterisks" | "underscores";

  /**
   * Text wrapping possibilities.
   *
   * Allowed values:
   * - "always" - Always wraps text.
   * - "maintain" - Maintains line breaks.
   * - "never" - Never wraps text.
   *
   * @default "maintain"
   */
  textWrap?: "always" | "maintain" | "never";

}
