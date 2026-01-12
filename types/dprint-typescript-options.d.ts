// Generated from dprint-plugin-typescript JSON schema
// Do not edit manually.

export interface DprintTypeScriptOptions {
  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - "always" - Always prefers hanging regardless of the number of elements.
   * - "onlySingleItem" - Only prefers hanging if there is a single item.
   * - "never" - Never prefers hanging.
   *
   * @default "never"
   */
  "arguments.preferHanging"?: "always" | "onlySingleItem" | "never";

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "arguments.preferSingleLine"?: true | false;

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  "arguments.spaceAround"?: true | false;

  /**
   * If trailing commas should be used.
   *
   * Allowed values:
   * - "never" - Trailing commas should not be used.
   * - "always" - Trailing commas should always be used.
   * - "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
   *
   * @default "onlyMultiLine"
   */
  "arguments.trailingCommas"?: "never" | "always" | "onlyMultiLine";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - "always" - Always prefers hanging regardless of the number of elements.
   * - "onlySingleItem" - Only prefers hanging if there is a single item.
   * - "never" - Never prefers hanging.
   *
   * @default "never"
   */
  "arrayExpression.preferHanging"?: "always" | "onlySingleItem" | "never";

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "arrayExpression.preferSingleLine"?: true | false;

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  "arrayExpression.spaceAround"?: true | false;

  /**
   * If trailing commas should be used.
   *
   * Allowed values:
   * - "never" - Trailing commas should not be used.
   * - "always" - Trailing commas should always be used.
   * - "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
   *
   * @default "onlyMultiLine"
   */
  "arrayExpression.trailingCommas"?: "never" | "always" | "onlyMultiLine";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "arrayPattern.preferHanging"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "arrayPattern.preferSingleLine"?: true | false;

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  "arrayPattern.spaceAround"?: true | false;

  /**
   * If trailing commas should be used.
   *
   * Allowed values:
   * - "never" - Trailing commas should not be used.
   * - "always" - Trailing commas should always be used.
   * - "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
   *
   * @default "onlyMultiLine"
   */
  "arrayPattern.trailingCommas"?: "never" | "always" | "onlyMultiLine";

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "arrowFunction.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Whether to use parentheses around a single parameter in an arrow function.
   *
   * Allowed values:
   * - "force" - Forces parentheses.
   * - "maintain" - Maintains the current state of the parentheses.
   * - "preferNone" - Prefers not using parentheses when possible.
   *
   * @default "maintain"
   */
  "arrowFunction.useParentheses"?: "force" | "maintain" | "preferNone";

  /**
   * Whether to force a line per expression when spanning multiple lines.
   *
   * Allowed values:
   * - true - Formats with each part on a new line.
   * - false - Maintains the line breaks as written by the programmer.
   *
   * @default false
   */
  "binaryExpression.linePerExpression"?: true | false;

  /**
   * Where to place the operator for expressions that span multiple lines.
   *
   * Allowed values:
   * - "maintain" - Maintains the operator being on the next line or the same line.
   * - "sameLine" - Forces the operator to be on the same line.
   * - "nextLine" - Forces the operator to be on the next line.
   *
   * @default "nextLine"
   */
  "binaryExpression.operatorPosition"?: "maintain" | "sameLine" | "nextLine";

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "binaryExpression.preferSingleLine"?: true | false;

  /**
   * Whether to surround the operator in a binary expression with spaces.
   *
   * Allowed values:
   * - true - Ex. `1 + 2`
   * - false - Ex. `1+2`
   *
   * @default true
   */
  "binaryExpression.spaceSurroundingBitwiseAndArithmeticOperator"?: true | false;

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  bracePosition?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  "catchClause.spaceAround"?: true | false;

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "classDeclaration.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "classExpression.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Forces a space after the double slash in a comment line.
   *
   * Allowed values:
   * - true - Ex. `//test` -> `// test`
   * - false - Ex. `//test` -> `//test`
   *
   * @default true
   */
  "commentLine.forceSpaceAfterSlashes"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "computed.preferSingleLine"?: true | false;

  /**
   * Where to place the operator for expressions that span multiple lines.
   *
   * Allowed values:
   * - "maintain" - Maintains the operator being on the next line or the same line.
   * - "sameLine" - Forces the operator to be on the same line.
   * - "nextLine" - Forces the operator to be on the next line.
   *
   * @default "nextLine"
   */
  "conditionalExpression.operatorPosition"?: "maintain" | "sameLine" | "nextLine";

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "conditionalExpression.preferSingleLine"?: true | false;

  /**
   * Where to place the operator for expressions that span multiple lines.
   *
   * Allowed values:
   * - "maintain" - Maintains the operator being on the next line or the same line.
   * - "sameLine" - Forces the operator to be on the same line.
   * - "nextLine" - Forces the operator to be on the next line.
   *
   * @default "nextLine"
   */
  "conditionalType.operatorPosition"?: "maintain" | "sameLine" | "nextLine";

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "conditionalType.preferSingleLine"?: true | false;

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "constructor.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Whether to add a space before the parentheses of a constructor.
   *
   * Allowed values:
   * - true - Ex. `constructor ()`
   * - false - Ex. `constructor()`
   *
   * @default false
   */
  "constructor.spaceBeforeParentheses"?: true | false;

  /**
   * Whether to add a space after the `new` keyword in a constructor type.
   *
   * Allowed values:
   * - true - Ex. `type MyClassCtor = new () => MyClass;`
   * - false - Ex. `type MyClassCtor = new() => MyClass;`
   *
   * @default false
   */
  "constructorType.spaceAfterNewKeyword"?: true | false;

  /**
   * Whether to add a space after the `new` keyword in a construct signature.
   *
   * Allowed values:
   * - true - Ex. `new (): MyClass;`
   * - false - Ex. `new(): MyClass;`
   *
   * @default false
   */
  "constructSignature.spaceAfterNewKeyword"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "decorators.preferSingleLine"?: true | false;

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
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "doWhileStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Where to place the next control flow within a control flow statement.
   *
   * Allowed values:
   * - "maintain" - Maintains the next control flow being on the next line or the same line.
   * - "sameLine" - Forces the next control flow to be on the same line.
   * - "nextLine" - Forces the next control flow to be on the next line.
   *
   * @default "sameLine"
   */
  "doWhileStatement.nextControlFlowPosition"?: "maintain" | "sameLine" | "nextLine";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "doWhileStatement.preferHanging"?: true | false;

  /**
   * Whether to add a space after the `while` keyword in a do while statement.
   *
   * Allowed values:
   * - true - Ex. `do {
} while (condition);`
   * - false - Ex. `do {
} while(condition);`
   *
   * @default true
   */
  "doWhileStatement.spaceAfterWhileKeyword"?: true | false;

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  "doWhileStatement.spaceAround"?: true | false;

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "enumDeclaration.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * How to space the members of an enum.
   *
   * Allowed values:
   * - "newLine" - Forces a new line between members.
   * - "blankLine" - Forces a blank line between members.
   * - "maintain" - Maintains whether a newline or blankline is used.
   *
   * @default "maintain"
   */
  "enumDeclaration.memberSpacing"?: "newLine" | "blankLine" | "maintain";

  /**
   * If trailing commas should be used.
   *
   * Allowed values:
   * - "never" - Trailing commas should not be used.
   * - "always" - Trailing commas should always be used.
   * - "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
   *
   * @default "onlyMultiLine"
   */
  "enumDeclaration.trailingCommas"?: "never" | "always" | "onlyMultiLine";

  /**
   * If code import/export specifiers should be forced to be on multiple lines.
   *
   * Allowed values:
   * - "always"
   * - "never"
   * - "whenMultiple" - Force multiple lines only if importing more than one thing.
   *
   * @default "never"
   */
  "exportDeclaration.forceMultiLine"?: "always" | "never" | "whenMultiple";

  /**
   * If code should be forced to be on a single line if able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "exportDeclaration.forceSingleLine"?: true | false;

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "exportDeclaration.preferHanging"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "exportDeclaration.preferSingleLine"?: true | false;

  /**
   * The kind of sort ordering to use.
   *
   * Allowed values:
   * - "maintain" - Maintains the current ordering.
   * - "caseSensitive" - Alphabetically and case sensitive.
   * - "caseInsensitive" - Alphabetically and case insensitive.
   *
   * @default "caseInsensitive"
   */
  "exportDeclaration.sortNamedExports"?: "maintain" | "caseSensitive" | "caseInsensitive";

  /**
   * The kind of sort ordering to use for typed imports and exports.
   *
   * Allowed values:
   * - "first" - Puts type-only named imports and exports first.
   * - "last" - Puts type-only named imports and exports last.
   * - "none" - Does not sort based on if a type-only named import or export.
   *
   * @default "none"
   */
  "exportDeclaration.sortTypeOnlyExports"?: "first" | "last" | "none";

  /**
   * Whether to add spaces around named exports in an export declaration.
   *
   * Allowed values:
   * - true - Ex. `export { SomeExport, OtherExport };`
   * - false - Ex. `export {SomeExport, OtherExport};`
   *
   * @default true
   */
  "exportDeclaration.spaceSurroundingNamedExports"?: true | false;

  /**
   * If trailing commas should be used.
   *
   * Allowed values:
   * - "never" - Trailing commas should not be used.
   * - "always" - Trailing commas should always be used.
   * - "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
   *
   * @default "onlyMultiLine"
   */
  "exportDeclaration.trailingCommas"?: "never" | "always" | "onlyMultiLine";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "extendsClause.preferHanging"?: true | false;

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "forInStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "forInStatement.preferHanging"?: true | false;

  /**
   * Where to place the expression of a statement that could possibly be on one line (ex. `if (true) console.log(5);`).
   *
   * Allowed values:
   * - "maintain" - Maintains the position of the expression.
   * - "sameLine" - Forces the whole statement to be on one line.
   * - "nextLine" - Forces the expression to be on the next line.
   *
   * @default "maintain"
   */
  "forInStatement.singleBodyPosition"?: "maintain" | "sameLine" | "nextLine";

  /**
   * Whether to add a space after the `for` keyword in a "for in" statement.
   *
   * Allowed values:
   * - true - Ex. `for (const prop in obj)`
   * - false - Ex. `for(const prop in obj)`
   *
   * @default true
   */
  "forInStatement.spaceAfterForKeyword"?: true | false;

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  "forInStatement.spaceAround"?: true | false;

  /**
   * If braces should be used or not.
   *
   * Allowed values:
   * - "maintain" - Uses braces if they're used. Doesn't use braces if they're not used.
   * - "whenNotSingleLine" - Uses braces when the body is on a different line.
   * - "always" - Forces the use of braces. Will add them if they aren't used.
   * - "preferNone" - Forces no braces when the header is one line and body is one line. Otherwise forces braces.
   *
   * @default "whenNotSingleLine"
   */
  "forInStatement.useBraces"?: "maintain" | "whenNotSingleLine" | "always" | "preferNone";

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "forOfStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "forOfStatement.preferHanging"?: true | false;

  /**
   * Where to place the expression of a statement that could possibly be on one line (ex. `if (true) console.log(5);`).
   *
   * Allowed values:
   * - "maintain" - Maintains the position of the expression.
   * - "sameLine" - Forces the whole statement to be on one line.
   * - "nextLine" - Forces the expression to be on the next line.
   *
   * @default "maintain"
   */
  "forOfStatement.singleBodyPosition"?: "maintain" | "sameLine" | "nextLine";

  /**
   * Whether to add a space after the `for` keyword in a "for of" statement.
   *
   * Allowed values:
   * - true - Ex. `for (const value of myArray)`
   * - false - Ex. `for(const value of myArray)`
   *
   * @default true
   */
  "forOfStatement.spaceAfterForKeyword"?: true | false;

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  "forOfStatement.spaceAround"?: true | false;

  /**
   * If braces should be used or not.
   *
   * Allowed values:
   * - "maintain" - Uses braces if they're used. Doesn't use braces if they're not used.
   * - "whenNotSingleLine" - Uses braces when the body is on a different line.
   * - "always" - Forces the use of braces. Will add them if they aren't used.
   * - "preferNone" - Forces no braces when the header is one line and body is one line. Otherwise forces braces.
   *
   * @default "whenNotSingleLine"
   */
  "forOfStatement.useBraces"?: "maintain" | "whenNotSingleLine" | "always" | "preferNone";

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "forStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "forStatement.preferHanging"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "forStatement.preferSingleLine"?: true | false;

  /**
   * Where to place the expression of a statement that could possibly be on one line (ex. `if (true) console.log(5);`).
   *
   * Allowed values:
   * - "maintain" - Maintains the position of the expression.
   * - "sameLine" - Forces the whole statement to be on one line.
   * - "nextLine" - Forces the expression to be on the next line.
   *
   * @default "maintain"
   */
  "forStatement.singleBodyPosition"?: "maintain" | "sameLine" | "nextLine";

  /**
   * Whether to add a space after the `for` keyword in a "for" statement.
   *
   * Allowed values:
   * - true - Ex. `for (let i = 0; i < 5; i++)`
   * - false - Ex. `for(let i = 0; i < 5; i++)`
   *
   * @default true
   */
  "forStatement.spaceAfterForKeyword"?: true | false;

  /**
   * Whether to add a space after the semi-colons in a "for" statement.
   *
   * Allowed values:
   * - true - Ex. `for (let i = 0; i < 5; i++)`
   * - false - Ex. `for (let i = 0;i < 5;i++)`
   *
   * @default true
   */
  "forStatement.spaceAfterSemiColons"?: true | false;

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  "forStatement.spaceAround"?: true | false;

  /**
   * If braces should be used or not.
   *
   * Allowed values:
   * - "maintain" - Uses braces if they're used. Doesn't use braces if they're not used.
   * - "whenNotSingleLine" - Uses braces when the body is on a different line.
   * - "always" - Forces the use of braces. Will add them if they aren't used.
   * - "preferNone" - Forces no braces when the header is one line and body is one line. Otherwise forces braces.
   *
   * @default "whenNotSingleLine"
   */
  "forStatement.useBraces"?: "maintain" | "whenNotSingleLine" | "always" | "preferNone";

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "functionDeclaration.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Whether to add a space before the parentheses of a function declaration.
   *
   * Allowed values:
   * - true - Ex. `function myFunction ()`
   * - false - Ex. `function myFunction()`
   *
   * @default false
   */
  "functionDeclaration.spaceBeforeParentheses"?: true | false;

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "functionExpression.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Whether to add a space after the function keyword of a function expression.
   *
   * Allowed values:
   * - true - Ex. `function <T>()`
   * - false - Ex. `function<T>()`
   *
   * @default false
   */
  "functionExpression.spaceAfterFunctionKeyword"?: true | false;

  /**
   * Whether to add a space before the parentheses of a function expression.
   *
   * Allowed values:
   * - true - Ex. `function<T> ()`
   * - false - Ex. `function<T>()`
   *
   * @default false
   */
  "functionExpression.spaceBeforeParentheses"?: true | false;

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "getAccessor.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Whether to add a space before the parentheses of a get accessor.
   *
   * Allowed values:
   * - true - Ex. `get myProp ()`
   * - false - Ex. `get myProp()`
   *
   * @default false
   */
  "getAccessor.spaceBeforeParentheses"?: true | false;

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "ifStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Where to place the next control flow within a control flow statement.
   *
   * Allowed values:
   * - "maintain" - Maintains the next control flow being on the next line or the same line.
   * - "sameLine" - Forces the next control flow to be on the same line.
   * - "nextLine" - Forces the next control flow to be on the next line.
   *
   * @default "sameLine"
   */
  "ifStatement.nextControlFlowPosition"?: "maintain" | "sameLine" | "nextLine";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "ifStatement.preferHanging"?: true | false;

  /**
   * Where to place the expression of a statement that could possibly be on one line (ex. `if (true) console.log(5);`).
   *
   * Allowed values:
   * - "maintain" - Maintains the position of the expression.
   * - "sameLine" - Forces the whole statement to be on one line.
   * - "nextLine" - Forces the expression to be on the next line.
   *
   * @default "maintain"
   */
  "ifStatement.singleBodyPosition"?: "maintain" | "sameLine" | "nextLine";

  /**
   * Whether to add a space after the `if` keyword in an "if" statement.
   *
   * Allowed values:
   * - true - Ex. `if (true)`
   * - false - Ex. `if(true)`
   *
   * @default true
   */
  "ifStatement.spaceAfterIfKeyword"?: true | false;

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  "ifStatement.spaceAround"?: true | false;

  /**
   * If braces should be used or not.
   *
   * Allowed values:
   * - "maintain" - Uses braces if they're used. Doesn't use braces if they're not used.
   * - "whenNotSingleLine" - Uses braces when the body is on a different line.
   * - "always" - Forces the use of braces. Will add them if they aren't used.
   * - "preferNone" - Forces no braces when the header is one line and body is one line. Otherwise forces braces.
   *
   * @default "whenNotSingleLine"
   */
  "ifStatement.useBraces"?: "maintain" | "whenNotSingleLine" | "always" | "preferNone";

  /**
   * The text to use for a file ignore comment (ex. `// dprint-ignore-file`).
   *
   * @default "dprint-ignore-file"
   */
  ignoreFileCommentText?: string;

  /**
   * The text to use for an ignore comment (ex. `// dprint-ignore`).
   *
   * @default "dprint-ignore"
   */
  ignoreNodeCommentText?: string;

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "implementsClause.preferHanging"?: true | false;

  /**
   * If code import/export specifiers should be forced to be on multiple lines.
   *
   * Allowed values:
   * - "always"
   * - "never"
   * - "whenMultiple" - Force multiple lines only if importing more than one thing.
   *
   * @default "never"
   */
  "importDeclaration.forceMultiLine"?: "always" | "never" | "whenMultiple";

  /**
   * If code should be forced to be on a single line if able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "importDeclaration.forceSingleLine"?: true | false;

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "importDeclaration.preferHanging"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "importDeclaration.preferSingleLine"?: true | false;

  /**
   * The kind of sort ordering to use.
   *
   * Allowed values:
   * - "maintain" - Maintains the current ordering.
   * - "caseSensitive" - Alphabetically and case sensitive.
   * - "caseInsensitive" - Alphabetically and case insensitive.
   *
   * @default "caseInsensitive"
   */
  "importDeclaration.sortNamedImports"?: "maintain" | "caseSensitive" | "caseInsensitive";

  /**
   * The kind of sort ordering to use for typed imports and exports.
   *
   * Allowed values:
   * - "first" - Puts type-only named imports and exports first.
   * - "last" - Puts type-only named imports and exports last.
   * - "none" - Does not sort based on if a type-only named import or export.
   *
   * @default "none"
   */
  "importDeclaration.sortTypeOnlyImports"?: "first" | "last" | "none";

  /**
   * Whether to add spaces around named imports in an import declaration.
   *
   * Allowed values:
   * - true - Ex. `import { SomeExport, OtherExport } from "my-module";`
   * - false - Ex. `import {SomeExport, OtherExport} from "my-module";`
   *
   * @default true
   */
  "importDeclaration.spaceSurroundingNamedImports"?: true | false;

  /**
   * If trailing commas should be used.
   *
   * Allowed values:
   * - "never" - Trailing commas should not be used.
   * - "always" - Trailing commas should always be used.
   * - "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
   *
   * @default "onlyMultiLine"
   */
  "importDeclaration.trailingCommas"?: "never" | "always" | "onlyMultiLine";

  /**
   * The number of columns for an indent.
   *
   * @default 2
   */
  indentWidth?: number;

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "interfaceDeclaration.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * If the end angle bracket of a jsx open element or self closing element should be on the same or next line when the attributes span multiple lines.
   *
   * Allowed values:
   * - "maintain" - Maintains the position of the end angle bracket.
   * - "sameLine" - Forces the end angle bracket to be on the same line.
   * - "nextLine" - Forces the end angle bracket to be on the next line.
   *
   * @default "nextLine"
   */
  "jsx.bracketPosition"?: "maintain" | "sameLine" | "nextLine";

  /**
   * Forces newlines surrounding the content of JSX elements.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "jsx.forceNewLinesSurroundingContent"?: true | false;

  /**
   * Surrounds the top-most JSX element or fragment in parentheses when it spans multiple lines.
   *
   * Allowed values:
   * - "never" - Never wrap JSX with parentheses.
   * - "prefer" - Prefer wrapping with parentheses in most scenarios, except in function arguments and JSX attributes.
   * - "always" - Always wrap JSX with parentheses if it spans multiple lines.
   *
   * @default "prefer"
   */
  "jsx.multiLineParens"?: "never" | "prefer" | "always";

  /**
   * How to use single or double quotes in JSX attributes.
   *
   * Allowed values:
   * - "preferDouble" - Prefers using double quotes except in scenarios where the string contains more double quotes than single quotes.
   * - "preferSingle" - Prefers using single quotes except in scenarios where the string contains more single quotes than double quotes.
   *
   * @default "preferDouble"
   */
  "jsx.quoteStyle"?: "preferDouble" | "preferSingle";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "jsxAttributes.preferHanging"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "jsxAttributes.preferSingleLine"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "jsxElement.preferSingleLine"?: true | false;

  /**
   * Whether to add a space surrounding the expression of a JSX container.
   *
   * Allowed values:
   * - true - Ex. `{ myValue }`
   * - false - Ex. `{myValue}`
   *
   * @default false
   */
  "jsxExpressionContainer.spaceSurroundingExpression"?: true | false;

  /**
   * If the end angle bracket of a jsx open element or self closing element should be on the same or next line when the attributes span multiple lines.
   *
   * Allowed values:
   * - "maintain" - Maintains the position of the end angle bracket.
   * - "sameLine" - Forces the end angle bracket to be on the same line.
   * - "nextLine" - Forces the end angle bracket to be on the next line.
   *
   * @default "nextLine"
   */
  "jsxOpeningElement.bracketPosition"?: "maintain" | "sameLine" | "nextLine";

  /**
   * If the end angle bracket of a jsx open element or self closing element should be on the same or next line when the attributes span multiple lines.
   *
   * Allowed values:
   * - "maintain" - Maintains the position of the end angle bracket.
   * - "sameLine" - Forces the end angle bracket to be on the same line.
   * - "nextLine" - Forces the end angle bracket to be on the next line.
   *
   * @default "nextLine"
   */
  "jsxSelfClosingElement.bracketPosition"?: "maintain" | "sameLine" | "nextLine";

  /**
   * Whether to add a space before a JSX element's slash when self closing.
   *
   * Allowed values:
   * - true - Ex. `<Test />`
   * - false - Ex. `<Test/>`
   *
   * @default true
   */
  "jsxSelfClosingElement.spaceBeforeSlash"?: true | false;

  /**
   * The width of a line the printer will try to stay under. Note that the printer may exceed this width in certain cases.
   *
   * @default 120
   */
  lineWidth?: number;

  /**
   * Whether the configuration is not allowed to be overridden or extended.
   */
  locked?: boolean;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "mappedType.preferSingleLine"?: true | false;

  /**
   * Whether to force a line per expression when spanning multiple lines.
   *
   * Allowed values:
   * - true - Formats with each part on a new line.
   * - false - Maintains the line breaks as written by the programmer.
   *
   * @default false
   */
  "memberExpression.linePerExpression"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "memberExpression.preferSingleLine"?: true | false;

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "method.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Whether to add a space before the parentheses of a method.
   *
   * Allowed values:
   * - true - Ex. `myMethod ()`
   * - false - Ex. `myMethod()`
   *
   * @default false
   */
  "method.spaceBeforeParentheses"?: true | false;

  /**
   * The kind of sort ordering to use.
   *
   * Allowed values:
   * - "maintain" - Maintains the current ordering.
   * - "caseSensitive" - Alphabetically and case sensitive.
   * - "caseInsensitive" - Alphabetically and case insensitive.
   *
   * @default "caseInsensitive"
   */
  "module.sortExportDeclarations"?: "maintain" | "caseSensitive" | "caseInsensitive";

  /**
   * The kind of sort ordering to use.
   *
   * Allowed values:
   * - "maintain" - Maintains the current ordering.
   * - "caseSensitive" - Alphabetically and case sensitive.
   * - "caseInsensitive" - Alphabetically and case insensitive.
   *
   * @default "caseInsensitive"
   */
  "module.sortImportDeclarations"?: "maintain" | "caseSensitive" | "caseInsensitive";

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "moduleDeclaration.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * The kind of newline to use.
   *
   * Allowed values:
   * - "auto" - For each file, uses the last newline kind found in the file.
   * - "crlf" - Uses carriage return, line feed.
   * - "lf" - Uses line feed.
   * - "system" - Uses the system standard (ex. crlf on Windows).
   *
   * @default "lf"
   */
  newLineKind?: "auto" | "crlf" | "lf" | "system";

  /**
   * Where to place the next control flow within a control flow statement.
   *
   * Allowed values:
   * - "maintain" - Maintains the next control flow being on the next line or the same line.
   * - "sameLine" - Forces the next control flow to be on the same line.
   * - "nextLine" - Forces the next control flow to be on the next line.
   *
   * @default "sameLine"
   */
  nextControlFlowPosition?: "maintain" | "sameLine" | "nextLine";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "objectExpression.preferHanging"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "objectExpression.preferSingleLine"?: true | false;

  /**
   * Whether to add a space surrounding the properties of a single line object expression.
   *
   * Allowed values:
   * - true - Ex. `{ key: value }`
   * - false - Ex. `{key: value}`
   *
   * @default true
   */
  "objectExpression.spaceSurroundingProperties"?: true | false;

  /**
   * If trailing commas should be used.
   *
   * Allowed values:
   * - "never" - Trailing commas should not be used.
   * - "always" - Trailing commas should always be used.
   * - "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
   *
   * @default "onlyMultiLine"
   */
  "objectExpression.trailingCommas"?: "never" | "always" | "onlyMultiLine";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "objectPattern.preferHanging"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "objectPattern.preferSingleLine"?: true | false;

  /**
   * Whether to add a space surrounding the properties of a single line object pattern.
   *
   * Allowed values:
   * - true - Ex. `{ key: value } = obj`
   * - false - Ex. `{key: value} = obj`
   *
   * @default true
   */
  "objectPattern.spaceSurroundingProperties"?: true | false;

  /**
   * If trailing commas should be used.
   *
   * Allowed values:
   * - "never" - Trailing commas should not be used.
   * - "always" - Trailing commas should always be used.
   * - "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
   *
   * @default "onlyMultiLine"
   */
  "objectPattern.trailingCommas"?: "never" | "always" | "onlyMultiLine";

  /**
   * Where to place the operator for expressions that span multiple lines.
   *
   * Allowed values:
   * - "maintain" - Maintains the operator being on the next line or the same line.
   * - "sameLine" - Forces the operator to be on the same line.
   * - "nextLine" - Forces the operator to be on the next line.
   *
   * @default "nextLine"
   */
  operatorPosition?: "maintain" | "sameLine" | "nextLine";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - "always" - Always prefers hanging regardless of the number of elements.
   * - "onlySingleItem" - Only prefers hanging if there is a single item.
   * - "never" - Never prefers hanging.
   *
   * @default "never"
   */
  "parameters.preferHanging"?: "always" | "onlySingleItem" | "never";

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "parameters.preferSingleLine"?: true | false;

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  "parameters.spaceAround"?: true | false;

  /**
   * If trailing commas should be used.
   *
   * Allowed values:
   * - "never" - Trailing commas should not be used.
   * - "always" - Trailing commas should always be used.
   * - "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
   *
   * @default "onlyMultiLine"
   */
  "parameters.trailingCommas"?: "never" | "always" | "onlyMultiLine";

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  "parenExpression.spaceAround"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "parentheses.preferSingleLine"?: true | false;

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  preferHanging?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  preferSingleLine?: true | false;

  /**
   * Change when properties in objects are quoted.
   *
   * Allowed values:
   * - "asNeeded" - Remove unnecessary quotes around property names.
   * - "consistent" - Same as 'asNeeded', but if one property requires quotes then quote them all.
   * - "preserve" - Preserve quotes around property names.
   *
   * @default "preserve"
   */
  quoteProps?: "asNeeded" | "consistent" | "preserve";

  /**
   * How to use single or double quotes.
   *
   * Allowed values:
   * - "alwaysDouble" - Always uses double quotes.
   * - "alwaysSingle" - Always uses single quotes.
   * - "preferDouble" - Prefers using double quotes except in scenarios where the string contains more double quotes than single quotes.
   * - "preferSingle" - Prefers using single quotes except in scenarios where the string contains more single quotes than double quotes.
   *
   * @default "alwaysDouble"
   */
  quoteStyle?: "alwaysDouble" | "alwaysSingle" | "preferDouble" | "preferSingle";

  /**
   * How semi-colons should be used.
   *
   * Allowed values:
   * - "always" - Always uses semi-colons where applicable.
   * - "prefer" - Prefers semi-colons, but doesn't add one in certain scenarios such as for the last member of a single-line type literal.
   * - "asi" - Uses automatic semi-colon insertion. Only adds a semi-colon at the start of some expression statements when necessary. Read more: https://standardjs.com/rules.html#semicolons
   *
   * @default "prefer"
   */
  semiColons?: "always" | "prefer" | "asi";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "sequenceExpression.preferHanging"?: true | false;

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "setAccessor.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Whether to add a space before the parentheses of a set accessor.
   *
   * Allowed values:
   * - true - Ex. `set myProp (value: string)`
   * - false - Ex. `set myProp(value: string)`
   *
   * @default false
   */
  "setAccessor.spaceBeforeParentheses"?: true | false;

  /**
   * Where to place the expression of a statement that could possibly be on one line (ex. `if (true) console.log(5);`).
   *
   * Allowed values:
   * - "maintain" - Maintains the position of the expression.
   * - "sameLine" - Forces the whole statement to be on one line.
   * - "nextLine" - Forces the expression to be on the next line.
   *
   * @default "maintain"
   */
  singleBodyPosition?: "maintain" | "sameLine" | "nextLine";

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  spaceAround?: true | false;

  /**
   * Whether to add a space surrounding the properties of single line object-like nodes.
   *
   * Allowed values:
   * - true - Ex. `{ key: value }`
   * - false - Ex. `{key: value}`
   *
   * @default true
   */
  spaceSurroundingProperties?: true | false;

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "staticBlock.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "switchCase.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "switchStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "switchStatement.preferHanging"?: true | false;

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  "switchStatement.spaceAround"?: true | false;

  /**
   * Whether to add a space before the literal in a tagged template.
   *
   * Allowed values:
   * - true - Ex. `html `<element />``
   * - false - Ex. `html`<element />``
   *
   * @default false
   */
  "taggedTemplate.spaceBeforeLiteral"?: true | false;

  /**
   * If trailing commas should be used.
   *
   * Allowed values:
   * - "never" - Trailing commas should not be used.
   * - "always" - Trailing commas should always be used.
   * - "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
   *
   * @default "onlyMultiLine"
   */
  trailingCommas?: "never" | "always" | "onlyMultiLine";

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "tryStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Where to place the next control flow within a control flow statement.
   *
   * Allowed values:
   * - "maintain" - Maintains the next control flow being on the next line or the same line.
   * - "sameLine" - Forces the next control flow to be on the same line.
   * - "nextLine" - Forces the next control flow to be on the next line.
   *
   * @default "sameLine"
   */
  "tryStatement.nextControlFlowPosition"?: "maintain" | "sameLine" | "nextLine";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - "always" - Always prefers hanging regardless of the number of elements.
   * - "onlySingleItem" - Only prefers hanging if there is a single item.
   * - "never" - Never prefers hanging.
   *
   * @default "never"
   */
  "tupleType.preferHanging"?: "always" | "onlySingleItem" | "never";

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "tupleType.preferSingleLine"?: true | false;

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  "tupleType.spaceAround"?: true | false;

  /**
   * If trailing commas should be used.
   *
   * Allowed values:
   * - "never" - Trailing commas should not be used.
   * - "always" - Trailing commas should always be used.
   * - "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
   *
   * @default "onlyMultiLine"
   */
  "tupleType.trailingCommas"?: "never" | "always" | "onlyMultiLine";

  /**
   * Whether to add a space before the colon of a type annotation.
   *
   * Allowed values:
   * - true - Ex. `function myFunction() : string`
   * - false - Ex. `function myFunction(): string`
   *
   * @default false
   */
  "typeAnnotation.spaceBeforeColon"?: true | false;

  /**
   * Whether to add a space before the expression in a type assertion.
   *
   * Allowed values:
   * - true - Ex. `<string> myValue`
   * - false - Ex. `<string>myValue`
   *
   * @default true
   */
  "typeAssertion.spaceBeforeExpression"?: true | false;

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "typeLiteral.preferHanging"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "typeLiteral.preferSingleLine"?: true | false;

  /**
   * The kind of separator to use in type literals.
   *
   * Allowed values:
   * - "semiColon" - Use semi-colons.
   * - "comma" - Use commas.
   *
   * @default "semiColon"
   */
  "typeLiteral.separatorKind"?: "semiColon" | "comma";

  /**
   * The kind of separator to use in type literals.
   *
   * Allowed values:
   * - "semiColon" - Use semi-colons.
   * - "comma" - Use commas.
   *
   * @default "semiColon"
   */
  "typeLiteral.separatorKind.multiLine"?: "semiColon" | "comma";

  /**
   * The kind of separator to use in type literals.
   *
   * Allowed values:
   * - "semiColon" - Use semi-colons.
   * - "comma" - Use commas.
   *
   * @default "semiColon"
   */
  "typeLiteral.separatorKind.singleLine"?: "semiColon" | "comma";

  /**
   * Whether to add a space surrounding the properties of a single line type literal.
   *
   * Allowed values:
   * - true - Ex. `type Test = { key: string }`
   * - false - Ex. `type Test = {key: string}`
   *
   * @default true
   */
  "typeLiteral.spaceSurroundingProperties"?: true | false;

  /**
   * If trailing commas should be used.
   *
   * Allowed values:
   * - "never" - Trailing commas should not be used.
   * - "always" - Trailing commas should always be used.
   * - "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
   *
   * @default "onlyMultiLine"
   */
  "typeLiteral.trailingCommas"?: "never" | "always" | "onlyMultiLine";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - "always" - Always prefers hanging regardless of the number of elements.
   * - "onlySingleItem" - Only prefers hanging if there is a single item.
   * - "never" - Never prefers hanging.
   *
   * @default "never"
   */
  "typeParameters.preferHanging"?: "always" | "onlySingleItem" | "never";

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "typeParameters.preferSingleLine"?: true | false;

  /**
   * If trailing commas should be used.
   *
   * Allowed values:
   * - "never" - Trailing commas should not be used.
   * - "always" - Trailing commas should always be used.
   * - "onlyMultiLine" - Trailing commas should only be used in multi-line scenarios.
   *
   * @default "onlyMultiLine"
   */
  "typeParameters.trailingCommas"?: "never" | "always" | "onlyMultiLine";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "unionAndIntersectionType.preferHanging"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "unionAndIntersectionType.preferSingleLine"?: true | false;

  /**
   * If braces should be used or not.
   *
   * Allowed values:
   * - "maintain" - Uses braces if they're used. Doesn't use braces if they're not used.
   * - "whenNotSingleLine" - Uses braces when the body is on a different line.
   * - "always" - Forces the use of braces. Will add them if they aren't used.
   * - "preferNone" - Forces no braces when the header is one line and body is one line. Otherwise forces braces.
   *
   * @default "whenNotSingleLine"
   */
  useBraces?: "maintain" | "whenNotSingleLine" | "always" | "preferNone";

  /**
   * Whether to use tabs (true) or spaces (false).
   *
   * Allowed values:
   * - true - Uses tabs for indentation.
   * - false - Uses spaces for indentation.
   *
   * @default false
   */
  useTabs?: true | false;

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "variableStatement.preferHanging"?: true | false;

  /**
   * If code should revert back from being on multiple lines to being on a single line when able.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "variableStatement.preferSingleLine"?: true | false;

  /**
   * Where to place the opening brace.
   *
   * Allowed values:
   * - "maintain" - Maintains the brace being on the next line or the same line.
   * - "sameLine" - Forces the brace to be on the same line.
   * - "nextLine" - Forces the brace to be on the next line.
   * - "sameLineUnlessHanging" - Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
   *
   * @default "sameLineUnlessHanging"
   */
  "whileStatement.bracePosition"?: "maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging";

  /**
   * Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.
   *
   * Allowed values:
   * - true
   * - false
   *
   * @default false
   */
  "whileStatement.preferHanging"?: true | false;

  /**
   * Where to place the expression of a statement that could possibly be on one line (ex. `if (true) console.log(5);`).
   *
   * Allowed values:
   * - "maintain" - Maintains the position of the expression.
   * - "sameLine" - Forces the whole statement to be on one line.
   * - "nextLine" - Forces the expression to be on the next line.
   *
   * @default "maintain"
   */
  "whileStatement.singleBodyPosition"?: "maintain" | "sameLine" | "nextLine";

  /**
   * Whether to add a space after the `while` keyword in a while statement.
   *
   * Allowed values:
   * - true - Ex. `while (true)`
   * - false - Ex. `while(true)`
   *
   * @default true
   */
  "whileStatement.spaceAfterWhileKeyword"?: true | false;

  /**
   * Whether to place spaces around enclosed expressions.
   *
   * Allowed values:
   * - true - Ex. `myFunction( true )`
   * - false - Ex. `myFunction(true)`
   *
   * @default false
   */
  "whileStatement.spaceAround"?: true | false;

  /**
   * If braces should be used or not.
   *
   * Allowed values:
   * - "maintain" - Uses braces if they're used. Doesn't use braces if they're not used.
   * - "whenNotSingleLine" - Uses braces when the body is on a different line.
   * - "always" - Forces the use of braces. Will add them if they aren't used.
   * - "preferNone" - Forces no braces when the header is one line and body is one line. Otherwise forces braces.
   *
   * @default "whenNotSingleLine"
   */
  "whileStatement.useBraces"?: "maintain" | "whenNotSingleLine" | "always" | "preferNone";

}
