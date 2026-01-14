// Generated from dprint-plugin-toml JSON schema
// Do not edit manually.

export interface TomlOptions {
  /**
   * Whether to apply sorting to a Cargo.toml file.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default true
   */
  "cargo.applyConventions"?: true | false;

  /**
   * Whether to force a leading space in a comment.
   *
   * Allowed values:
   * - true - Adds a leading space if there is none (ex. `# comment`)
   * - false - Doesn't force a space to be added and maintains what was done (ex. `#comment`)
   *
   * @default true
   */
  "comment.forceLeadingSpace"?: true | false;

  /**
   * The number of characters for an indent.
   *
   * @default 2
   */
  indentWidth?: number;

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
