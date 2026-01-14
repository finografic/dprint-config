# TypeScript Formatter Rules

> Generated from the dprint-plugin-typescript JSON schema.

## `arguments.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `"always" | "onlySingleItem" | "never"`
- **Allowed values**:
  - `"always"` — Always prefers hanging regardless of the number of elements.
  - `"onlySingleItem"` — Only prefers hanging if there is a single item.
  - `"never"` — Never prefers hanging.
- **Default**: `"never"`

## `arguments.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `arguments.spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `arguments.trailingCommas`

If trailing commas should be used.

- **Type**: `"never" | "always" | "onlyMultiLine"`
- **Allowed values**:
  - `"never"` — Trailing commas should not be used.
  - `"always"` — Trailing commas should always be used.
  - `"onlyMultiLine"` — Trailing commas should only be used in multi-line scenarios.
- **Default**: `"onlyMultiLine"`

## `arrayExpression.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `"always" | "onlySingleItem" | "never"`
- **Allowed values**:
  - `"always"` — Always prefers hanging regardless of the number of elements.
  - `"onlySingleItem"` — Only prefers hanging if there is a single item.
  - `"never"` — Never prefers hanging.
- **Default**: `"never"`

## `arrayExpression.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `arrayExpression.spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `arrayExpression.trailingCommas`

If trailing commas should be used.

- **Type**: `"never" | "always" | "onlyMultiLine"`
- **Allowed values**:
  - `"never"` — Trailing commas should not be used.
  - `"always"` — Trailing commas should always be used.
  - `"onlyMultiLine"` — Trailing commas should only be used in multi-line scenarios.
- **Default**: `"onlyMultiLine"`

## `arrayPattern.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `arrayPattern.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `arrayPattern.spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `arrayPattern.trailingCommas`

If trailing commas should be used.

- **Type**: `"never" | "always" | "onlyMultiLine"`
- **Allowed values**:
  - `"never"` — Trailing commas should not be used.
  - `"always"` — Trailing commas should always be used.
  - `"onlyMultiLine"` — Trailing commas should only be used in multi-line scenarios.
- **Default**: `"onlyMultiLine"`

## `arrowFunction.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `arrowFunction.useParentheses`

Whether to use parentheses around a single parameter in an arrow function.

- **Type**: `"force" | "maintain" | "preferNone"`
- **Allowed values**:
  - `"force"` — Forces parentheses.
  - `"maintain"` — Maintains the current state of the parentheses.
  - `"preferNone"` — Prefers not using parentheses when possible.
- **Default**: `"maintain"`

## `binaryExpression.linePerExpression`

Whether to force a line per expression when spanning multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Formats with each part on a new line.
  - `false` — Maintains the line breaks as written by the programmer.
- **Default**: `false`

## `binaryExpression.operatorPosition`

Where to place the operator for expressions that span multiple lines.

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the operator being on the next line or the same line.
  - `"sameLine"` — Forces the operator to be on the same line.
  - `"nextLine"` — Forces the operator to be on the next line.
- **Default**: `"nextLine"`

## `binaryExpression.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `binaryExpression.spaceSurroundingBitwiseAndArithmeticOperator`

Whether to surround the operator in a binary expression with spaces.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `1 + 2`
  - `false` — Ex. `1+2`
- **Default**: `true`

## `bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `catchClause.spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `classDeclaration.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `classExpression.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `commentLine.forceSpaceAfterSlashes`

Forces a space after the double slash in a comment line.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `//test` -> `// test`
  - `false` — Ex. `//test` -> `//test`
- **Default**: `true`

## `computed.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `conditionalExpression.operatorPosition`

Where to place the operator for expressions that span multiple lines.

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the operator being on the next line or the same line.
  - `"sameLine"` — Forces the operator to be on the same line.
  - `"nextLine"` — Forces the operator to be on the next line.
- **Default**: `"nextLine"`

## `conditionalExpression.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `conditionalType.operatorPosition`

Where to place the operator for expressions that span multiple lines.

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the operator being on the next line or the same line.
  - `"sameLine"` — Forces the operator to be on the same line.
  - `"nextLine"` — Forces the operator to be on the next line.
- **Default**: `"nextLine"`

## `conditionalType.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `constructor.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `constructor.spaceBeforeParentheses`

Whether to add a space before the parentheses of a constructor.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `constructor ()`
  - `false` — Ex. `constructor()`
- **Default**: `false`

## `constructorType.spaceAfterNewKeyword`

Whether to add a space after the `new` keyword in a constructor type.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `type MyClassCtor = new () => MyClass;`
  - `false` — Ex. `type MyClassCtor = new() => MyClass;`
- **Default**: `false`

## `constructSignature.spaceAfterNewKeyword`

Whether to add a space after the `new` keyword in a construct signature.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `new (): MyClass;`
  - `false` — Ex. `new(): MyClass;`
- **Default**: `false`

## `decorators.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `deno`

Top level configuration that sets the configuration to what is used in Deno.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `doWhileStatement.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `doWhileStatement.nextControlFlowPosition`

Where to place the next control flow within a control flow statement.

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the next control flow being on the next line or the same line.
  - `"sameLine"` — Forces the next control flow to be on the same line.
  - `"nextLine"` — Forces the next control flow to be on the next line.
- **Default**: `"sameLine"`

## `doWhileStatement.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `doWhileStatement.spaceAfterWhileKeyword`

Whether to add a space after the `while` keyword in a do while statement.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `do {
} while (condition);`
  - `false` — Ex. `do {
} while(condition);`
- **Default**: `true`

## `doWhileStatement.spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `enumDeclaration.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `enumDeclaration.memberSpacing`

How to space the members of an enum.

- **Type**: `"newLine" | "blankLine" | "maintain"`
- **Allowed values**:
  - `"newLine"` — Forces a new line between members.
  - `"blankLine"` — Forces a blank line between members.
  - `"maintain"` — Maintains whether a newline or blankline is used.
- **Default**: `"maintain"`

## `enumDeclaration.trailingCommas`

If trailing commas should be used.

- **Type**: `"never" | "always" | "onlyMultiLine"`
- **Allowed values**:
  - `"never"` — Trailing commas should not be used.
  - `"always"` — Trailing commas should always be used.
  - `"onlyMultiLine"` — Trailing commas should only be used in multi-line scenarios.
- **Default**: `"onlyMultiLine"`

## `exportDeclaration.forceMultiLine`

If code import/export specifiers should be forced to be on multiple lines.

- **Type**: `"always" | "never" | "whenMultiple"`
- **Allowed values**:
  - `"always"`
  - `"never"`
  - `"whenMultiple"` — Force multiple lines only if importing more than one thing.
- **Default**: `"never"`

## `exportDeclaration.forceSingleLine`

If code should be forced to be on a single line if able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `exportDeclaration.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `exportDeclaration.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `exportDeclaration.sortNamedExports`

The kind of sort ordering to use.

- **Type**: `"maintain" | "caseSensitive" | "caseInsensitive"`
- **Allowed values**:
  - `"maintain"` — Maintains the current ordering.
  - `"caseSensitive"` — Alphabetically and case sensitive.
  - `"caseInsensitive"` — Alphabetically and case insensitive.
- **Default**: `"caseInsensitive"`

## `exportDeclaration.sortTypeOnlyExports`

The kind of sort ordering to use for typed imports and exports.

- **Type**: `"first" | "last" | "none"`
- **Allowed values**:
  - `"first"` — Puts type-only named imports and exports first.
  - `"last"` — Puts type-only named imports and exports last.
  - `"none"` — Does not sort based on if a type-only named import or export.
- **Default**: `"none"`

## `exportDeclaration.spaceSurroundingNamedExports`

Whether to add spaces around named exports in an export declaration.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `export { SomeExport, OtherExport };`
  - `false` — Ex. `export {SomeExport, OtherExport};`
- **Default**: `true`

## `exportDeclaration.trailingCommas`

If trailing commas should be used.

- **Type**: `"never" | "always" | "onlyMultiLine"`
- **Allowed values**:
  - `"never"` — Trailing commas should not be used.
  - `"always"` — Trailing commas should always be used.
  - `"onlyMultiLine"` — Trailing commas should only be used in multi-line scenarios.
- **Default**: `"onlyMultiLine"`

## `extendsClause.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `forInStatement.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `forInStatement.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `forInStatement.singleBodyPosition`

Where to place the expression of a statement that could possibly be on one line (ex. `if (true) console.log(5);`).

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the position of the expression.
  - `"sameLine"` — Forces the whole statement to be on one line.
  - `"nextLine"` — Forces the expression to be on the next line.
- **Default**: `"maintain"`

## `forInStatement.spaceAfterForKeyword`

Whether to add a space after the `for` keyword in a "for in" statement.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `for (const prop in obj)`
  - `false` — Ex. `for(const prop in obj)`
- **Default**: `true`

## `forInStatement.spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `forInStatement.useBraces`

If braces should be used or not.

- **Type**: `"maintain" | "whenNotSingleLine" | "always" | "preferNone"`
- **Allowed values**:
  - `"maintain"` — Uses braces if they're used. Doesn't use braces if they're not used.
  - `"whenNotSingleLine"` — Uses braces when the body is on a different line.
  - `"always"` — Forces the use of braces. Will add them if they aren't used.
  - `"preferNone"` — Forces no braces when the header is one line and body is one line. Otherwise forces braces.
- **Default**: `"whenNotSingleLine"`

## `forOfStatement.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `forOfStatement.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `forOfStatement.singleBodyPosition`

Where to place the expression of a statement that could possibly be on one line (ex. `if (true) console.log(5);`).

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the position of the expression.
  - `"sameLine"` — Forces the whole statement to be on one line.
  - `"nextLine"` — Forces the expression to be on the next line.
- **Default**: `"maintain"`

## `forOfStatement.spaceAfterForKeyword`

Whether to add a space after the `for` keyword in a "for of" statement.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `for (const value of myArray)`
  - `false` — Ex. `for(const value of myArray)`
- **Default**: `true`

## `forOfStatement.spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `forOfStatement.useBraces`

If braces should be used or not.

- **Type**: `"maintain" | "whenNotSingleLine" | "always" | "preferNone"`
- **Allowed values**:
  - `"maintain"` — Uses braces if they're used. Doesn't use braces if they're not used.
  - `"whenNotSingleLine"` — Uses braces when the body is on a different line.
  - `"always"` — Forces the use of braces. Will add them if they aren't used.
  - `"preferNone"` — Forces no braces when the header is one line and body is one line. Otherwise forces braces.
- **Default**: `"whenNotSingleLine"`

## `forStatement.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `forStatement.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `forStatement.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `forStatement.singleBodyPosition`

Where to place the expression of a statement that could possibly be on one line (ex. `if (true) console.log(5);`).

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the position of the expression.
  - `"sameLine"` — Forces the whole statement to be on one line.
  - `"nextLine"` — Forces the expression to be on the next line.
- **Default**: `"maintain"`

## `forStatement.spaceAfterForKeyword`

Whether to add a space after the `for` keyword in a "for" statement.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `for (let i = 0; i < 5; i++)`
  - `false` — Ex. `for(let i = 0; i < 5; i++)`
- **Default**: `true`

## `forStatement.spaceAfterSemiColons`

Whether to add a space after the semi-colons in a "for" statement.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `for (let i = 0; i < 5; i++)`
  - `false` — Ex. `for (let i = 0;i < 5;i++)`
- **Default**: `true`

## `forStatement.spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `forStatement.useBraces`

If braces should be used or not.

- **Type**: `"maintain" | "whenNotSingleLine" | "always" | "preferNone"`
- **Allowed values**:
  - `"maintain"` — Uses braces if they're used. Doesn't use braces if they're not used.
  - `"whenNotSingleLine"` — Uses braces when the body is on a different line.
  - `"always"` — Forces the use of braces. Will add them if they aren't used.
  - `"preferNone"` — Forces no braces when the header is one line and body is one line. Otherwise forces braces.
- **Default**: `"whenNotSingleLine"`

## `functionDeclaration.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `functionDeclaration.spaceBeforeParentheses`

Whether to add a space before the parentheses of a function declaration.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `function myFunction ()`
  - `false` — Ex. `function myFunction()`
- **Default**: `false`

## `functionExpression.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `functionExpression.spaceAfterFunctionKeyword`

Whether to add a space after the function keyword of a function expression.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `function <T>()`
  - `false` — Ex. `function<T>()`
- **Default**: `false`

## `functionExpression.spaceBeforeParentheses`

Whether to add a space before the parentheses of a function expression.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `function<T> ()`
  - `false` — Ex. `function<T>()`
- **Default**: `false`

## `getAccessor.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `getAccessor.spaceBeforeParentheses`

Whether to add a space before the parentheses of a get accessor.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `get myProp ()`
  - `false` — Ex. `get myProp()`
- **Default**: `false`

## `ifStatement.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `ifStatement.nextControlFlowPosition`

Where to place the next control flow within a control flow statement.

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the next control flow being on the next line or the same line.
  - `"sameLine"` — Forces the next control flow to be on the same line.
  - `"nextLine"` — Forces the next control flow to be on the next line.
- **Default**: `"sameLine"`

## `ifStatement.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `ifStatement.singleBodyPosition`

Where to place the expression of a statement that could possibly be on one line (ex. `if (true) console.log(5);`).

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the position of the expression.
  - `"sameLine"` — Forces the whole statement to be on one line.
  - `"nextLine"` — Forces the expression to be on the next line.
- **Default**: `"maintain"`

## `ifStatement.spaceAfterIfKeyword`

Whether to add a space after the `if` keyword in an "if" statement.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `if (true)`
  - `false` — Ex. `if(true)`
- **Default**: `true`

## `ifStatement.spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `ifStatement.useBraces`

If braces should be used or not.

- **Type**: `"maintain" | "whenNotSingleLine" | "always" | "preferNone"`
- **Allowed values**:
  - `"maintain"` — Uses braces if they're used. Doesn't use braces if they're not used.
  - `"whenNotSingleLine"` — Uses braces when the body is on a different line.
  - `"always"` — Forces the use of braces. Will add them if they aren't used.
  - `"preferNone"` — Forces no braces when the header is one line and body is one line. Otherwise forces braces.
- **Default**: `"whenNotSingleLine"`

## `ignoreFileCommentText`

The text to use for a file ignore comment (ex. `// dprint-ignore-file`).

- **Type**: `string`
- **Default**: `"dprint-ignore-file"`

## `ignoreNodeCommentText`

The text to use for an ignore comment (ex. `// dprint-ignore`).

- **Type**: `string`
- **Default**: `"dprint-ignore"`

## `implementsClause.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `importDeclaration.forceMultiLine`

If code import/export specifiers should be forced to be on multiple lines.

- **Type**: `"always" | "never" | "whenMultiple"`
- **Allowed values**:
  - `"always"`
  - `"never"`
  - `"whenMultiple"` — Force multiple lines only if importing more than one thing.
- **Default**: `"never"`

## `importDeclaration.forceSingleLine`

If code should be forced to be on a single line if able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `importDeclaration.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `importDeclaration.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `importDeclaration.sortNamedImports`

The kind of sort ordering to use.

- **Type**: `"maintain" | "caseSensitive" | "caseInsensitive"`
- **Allowed values**:
  - `"maintain"` — Maintains the current ordering.
  - `"caseSensitive"` — Alphabetically and case sensitive.
  - `"caseInsensitive"` — Alphabetically and case insensitive.
- **Default**: `"caseInsensitive"`

## `importDeclaration.sortTypeOnlyImports`

The kind of sort ordering to use for typed imports and exports.

- **Type**: `"first" | "last" | "none"`
- **Allowed values**:
  - `"first"` — Puts type-only named imports and exports first.
  - `"last"` — Puts type-only named imports and exports last.
  - `"none"` — Does not sort based on if a type-only named import or export.
- **Default**: `"none"`

## `importDeclaration.spaceSurroundingNamedImports`

Whether to add spaces around named imports in an import declaration.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `import { SomeExport, OtherExport } from "my-module";`
  - `false` — Ex. `import {SomeExport, OtherExport} from "my-module";`
- **Default**: `true`

## `importDeclaration.trailingCommas`

If trailing commas should be used.

- **Type**: `"never" | "always" | "onlyMultiLine"`
- **Allowed values**:
  - `"never"` — Trailing commas should not be used.
  - `"always"` — Trailing commas should always be used.
  - `"onlyMultiLine"` — Trailing commas should only be used in multi-line scenarios.
- **Default**: `"onlyMultiLine"`

## `indentWidth`

The number of columns for an indent.

- **Type**: `number`
- **Default**: `2`

## `interfaceDeclaration.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `jsx.bracketPosition`

If the end angle bracket of a jsx open element or self closing element should be on the same or next line when the attributes span multiple lines.

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the position of the end angle bracket.
  - `"sameLine"` — Forces the end angle bracket to be on the same line.
  - `"nextLine"` — Forces the end angle bracket to be on the next line.
- **Default**: `"nextLine"`

## `jsx.forceNewLinesSurroundingContent`

Forces newlines surrounding the content of JSX elements.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `jsx.multiLineParens`

Surrounds the top-most JSX element or fragment in parentheses when it spans multiple lines.

- **Type**: `"never" | "prefer" | "always"`
- **Allowed values**:
  - `"never"` — Never wrap JSX with parentheses.
  - `"prefer"` — Prefer wrapping with parentheses in most scenarios, except in function arguments and JSX attributes.
  - `"always"` — Always wrap JSX with parentheses if it spans multiple lines.
- **Default**: `"prefer"`

## `jsx.quoteStyle`

How to use single or double quotes in JSX attributes.

- **Type**: `"preferDouble" | "preferSingle"`
- **Allowed values**:
  - `"preferDouble"` — Prefers using double quotes except in scenarios where the string contains more double quotes than single quotes.
  - `"preferSingle"` — Prefers using single quotes except in scenarios where the string contains more single quotes than double quotes.
- **Default**: `"preferDouble"`

## `jsxAttributes.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `jsxAttributes.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `jsxElement.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `jsxExpressionContainer.spaceSurroundingExpression`

Whether to add a space surrounding the expression of a JSX container.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `{ myValue }`
  - `false` — Ex. `{myValue}`
- **Default**: `false`

## `jsxOpeningElement.bracketPosition`

If the end angle bracket of a jsx open element or self closing element should be on the same or next line when the attributes span multiple lines.

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the position of the end angle bracket.
  - `"sameLine"` — Forces the end angle bracket to be on the same line.
  - `"nextLine"` — Forces the end angle bracket to be on the next line.
- **Default**: `"nextLine"`

## `jsxSelfClosingElement.bracketPosition`

If the end angle bracket of a jsx open element or self closing element should be on the same or next line when the attributes span multiple lines.

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the position of the end angle bracket.
  - `"sameLine"` — Forces the end angle bracket to be on the same line.
  - `"nextLine"` — Forces the end angle bracket to be on the next line.
- **Default**: `"nextLine"`

## `jsxSelfClosingElement.spaceBeforeSlash`

Whether to add a space before a JSX element's slash when self closing.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `<Test />`
  - `false` — Ex. `<Test/>`
- **Default**: `true`

## `lineWidth`

The width of a line the printer will try to stay under. Note that the printer may exceed this width in certain cases.

- **Type**: `number`
- **Default**: `120`

## `locked`

Whether the configuration is not allowed to be overridden or extended.

- **Type**: `boolean`

## `mappedType.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `memberExpression.linePerExpression`

Whether to force a line per expression when spanning multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Formats with each part on a new line.
  - `false` — Maintains the line breaks as written by the programmer.
- **Default**: `false`

## `memberExpression.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `method.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `method.spaceBeforeParentheses`

Whether to add a space before the parentheses of a method.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myMethod ()`
  - `false` — Ex. `myMethod()`
- **Default**: `false`

## `module.sortExportDeclarations`

The kind of sort ordering to use.

- **Type**: `"maintain" | "caseSensitive" | "caseInsensitive"`
- **Allowed values**:
  - `"maintain"` — Maintains the current ordering.
  - `"caseSensitive"` — Alphabetically and case sensitive.
  - `"caseInsensitive"` — Alphabetically and case insensitive.
- **Default**: `"caseInsensitive"`

## `module.sortImportDeclarations`

The kind of sort ordering to use.

- **Type**: `"maintain" | "caseSensitive" | "caseInsensitive"`
- **Allowed values**:
  - `"maintain"` — Maintains the current ordering.
  - `"caseSensitive"` — Alphabetically and case sensitive.
  - `"caseInsensitive"` — Alphabetically and case insensitive.
- **Default**: `"caseInsensitive"`

## `moduleDeclaration.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `newLineKind`

The kind of newline to use.

- **Type**: `"auto" | "crlf" | "lf" | "system"`
- **Allowed values**:
  - `"auto"` — For each file, uses the last newline kind found in the file.
  - `"crlf"` — Uses carriage return, line feed.
  - `"lf"` — Uses line feed.
  - `"system"` — Uses the system standard (ex. crlf on Windows).
- **Default**: `"lf"`

## `nextControlFlowPosition`

Where to place the next control flow within a control flow statement.

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the next control flow being on the next line or the same line.
  - `"sameLine"` — Forces the next control flow to be on the same line.
  - `"nextLine"` — Forces the next control flow to be on the next line.
- **Default**: `"sameLine"`

## `objectExpression.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `objectExpression.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `objectExpression.spaceSurroundingProperties`

Whether to add a space surrounding the properties of a single line object expression.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `{ key: value }`
  - `false` — Ex. `{key: value}`
- **Default**: `true`

## `objectExpression.trailingCommas`

If trailing commas should be used.

- **Type**: `"never" | "always" | "onlyMultiLine"`
- **Allowed values**:
  - `"never"` — Trailing commas should not be used.
  - `"always"` — Trailing commas should always be used.
  - `"onlyMultiLine"` — Trailing commas should only be used in multi-line scenarios.
- **Default**: `"onlyMultiLine"`

## `objectPattern.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `objectPattern.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `objectPattern.spaceSurroundingProperties`

Whether to add a space surrounding the properties of a single line object pattern.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `{ key: value } = obj`
  - `false` — Ex. `{key: value} = obj`
- **Default**: `true`

## `objectPattern.trailingCommas`

If trailing commas should be used.

- **Type**: `"never" | "always" | "onlyMultiLine"`
- **Allowed values**:
  - `"never"` — Trailing commas should not be used.
  - `"always"` — Trailing commas should always be used.
  - `"onlyMultiLine"` — Trailing commas should only be used in multi-line scenarios.
- **Default**: `"onlyMultiLine"`

## `operatorPosition`

Where to place the operator for expressions that span multiple lines.

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the operator being on the next line or the same line.
  - `"sameLine"` — Forces the operator to be on the same line.
  - `"nextLine"` — Forces the operator to be on the next line.
- **Default**: `"nextLine"`

## `parameters.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `"always" | "onlySingleItem" | "never"`
- **Allowed values**:
  - `"always"` — Always prefers hanging regardless of the number of elements.
  - `"onlySingleItem"` — Only prefers hanging if there is a single item.
  - `"never"` — Never prefers hanging.
- **Default**: `"never"`

## `parameters.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `parameters.spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `parameters.trailingCommas`

If trailing commas should be used.

- **Type**: `"never" | "always" | "onlyMultiLine"`
- **Allowed values**:
  - `"never"` — Trailing commas should not be used.
  - `"always"` — Trailing commas should always be used.
  - `"onlyMultiLine"` — Trailing commas should only be used in multi-line scenarios.
- **Default**: `"onlyMultiLine"`

## `parenExpression.spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `parentheses.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `quoteProps`

Change when properties in objects are quoted.

- **Type**: `"asNeeded" | "consistent" | "preserve"`
- **Allowed values**:
  - `"asNeeded"` — Remove unnecessary quotes around property names.
  - `"consistent"` — Same as 'asNeeded', but if one property requires quotes then quote them all.
  - `"preserve"` — Preserve quotes around property names.
- **Default**: `"preserve"`

## `quoteStyle`

How to use single or double quotes.

- **Type**: `"alwaysDouble" | "alwaysSingle" | "preferDouble" | "preferSingle"`
- **Allowed values**:
  - `"alwaysDouble"` — Always uses double quotes.
  - `"alwaysSingle"` — Always uses single quotes.
  - `"preferDouble"` — Prefers using double quotes except in scenarios where the string contains more double quotes than single quotes.
  - `"preferSingle"` — Prefers using single quotes except in scenarios where the string contains more single quotes than double quotes.
- **Default**: `"alwaysDouble"`

## `semiColons`

How semi-colons should be used.

- **Type**: `"always" | "prefer" | "asi"`
- **Allowed values**:
  - `"always"` — Always uses semi-colons where applicable.
  - `"prefer"` — Prefers semi-colons, but doesn't add one in certain scenarios such as for the last member of a single-line type literal.
  - `"asi"` — Uses automatic semi-colon insertion. Only adds a semi-colon at the start of some expression statements when necessary. Read more: https://standardjs.com/rules.html#semicolons
- **Default**: `"prefer"`

## `sequenceExpression.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `setAccessor.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `setAccessor.spaceBeforeParentheses`

Whether to add a space before the parentheses of a set accessor.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `set myProp (value: string)`
  - `false` — Ex. `set myProp(value: string)`
- **Default**: `false`

## `singleBodyPosition`

Where to place the expression of a statement that could possibly be on one line (ex. `if (true) console.log(5);`).

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the position of the expression.
  - `"sameLine"` — Forces the whole statement to be on one line.
  - `"nextLine"` — Forces the expression to be on the next line.
- **Default**: `"maintain"`

## `spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `spaceSurroundingProperties`

Whether to add a space surrounding the properties of single line object-like nodes.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `{ key: value }`
  - `false` — Ex. `{key: value}`
- **Default**: `true`

## `staticBlock.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `switchCase.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `switchStatement.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `switchStatement.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `switchStatement.spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `taggedTemplate.spaceBeforeLiteral`

Whether to add a space before the literal in a tagged template.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `html `<element />``
  - `false` — Ex. `html`<element />``
- **Default**: `false`

## `trailingCommas`

If trailing commas should be used.

- **Type**: `"never" | "always" | "onlyMultiLine"`
- **Allowed values**:
  - `"never"` — Trailing commas should not be used.
  - `"always"` — Trailing commas should always be used.
  - `"onlyMultiLine"` — Trailing commas should only be used in multi-line scenarios.
- **Default**: `"onlyMultiLine"`

## `tryStatement.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `tryStatement.nextControlFlowPosition`

Where to place the next control flow within a control flow statement.

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the next control flow being on the next line or the same line.
  - `"sameLine"` — Forces the next control flow to be on the same line.
  - `"nextLine"` — Forces the next control flow to be on the next line.
- **Default**: `"sameLine"`

## `tupleType.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `"always" | "onlySingleItem" | "never"`
- **Allowed values**:
  - `"always"` — Always prefers hanging regardless of the number of elements.
  - `"onlySingleItem"` — Only prefers hanging if there is a single item.
  - `"never"` — Never prefers hanging.
- **Default**: `"never"`

## `tupleType.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `tupleType.spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `tupleType.trailingCommas`

If trailing commas should be used.

- **Type**: `"never" | "always" | "onlyMultiLine"`
- **Allowed values**:
  - `"never"` — Trailing commas should not be used.
  - `"always"` — Trailing commas should always be used.
  - `"onlyMultiLine"` — Trailing commas should only be used in multi-line scenarios.
- **Default**: `"onlyMultiLine"`

## `typeAnnotation.spaceBeforeColon`

Whether to add a space before the colon of a type annotation.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `function myFunction() : string`
  - `false` — Ex. `function myFunction(): string`
- **Default**: `false`

## `typeAssertion.spaceBeforeExpression`

Whether to add a space before the expression in a type assertion.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `<string> myValue`
  - `false` — Ex. `<string>myValue`
- **Default**: `true`

## `typeLiteral.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `typeLiteral.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `typeLiteral.separatorKind`

The kind of separator to use in type literals.

- **Type**: `"semiColon" | "comma"`
- **Allowed values**:
  - `"semiColon"` — Use semi-colons.
  - `"comma"` — Use commas.
- **Default**: `"semiColon"`

## `typeLiteral.separatorKind.multiLine`

The kind of separator to use in type literals.

- **Type**: `"semiColon" | "comma"`
- **Allowed values**:
  - `"semiColon"` — Use semi-colons.
  - `"comma"` — Use commas.
- **Default**: `"semiColon"`

## `typeLiteral.separatorKind.singleLine`

The kind of separator to use in type literals.

- **Type**: `"semiColon" | "comma"`
- **Allowed values**:
  - `"semiColon"` — Use semi-colons.
  - `"comma"` — Use commas.
- **Default**: `"semiColon"`

## `typeLiteral.spaceSurroundingProperties`

Whether to add a space surrounding the properties of a single line type literal.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `type Test = { key: string }`
  - `false` — Ex. `type Test = {key: string}`
- **Default**: `true`

## `typeLiteral.trailingCommas`

If trailing commas should be used.

- **Type**: `"never" | "always" | "onlyMultiLine"`
- **Allowed values**:
  - `"never"` — Trailing commas should not be used.
  - `"always"` — Trailing commas should always be used.
  - `"onlyMultiLine"` — Trailing commas should only be used in multi-line scenarios.
- **Default**: `"onlyMultiLine"`

## `typeParameters.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `"always" | "onlySingleItem" | "never"`
- **Allowed values**:
  - `"always"` — Always prefers hanging regardless of the number of elements.
  - `"onlySingleItem"` — Only prefers hanging if there is a single item.
  - `"never"` — Never prefers hanging.
- **Default**: `"never"`

## `typeParameters.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `typeParameters.trailingCommas`

If trailing commas should be used.

- **Type**: `"never" | "always" | "onlyMultiLine"`
- **Allowed values**:
  - `"never"` — Trailing commas should not be used.
  - `"always"` — Trailing commas should always be used.
  - `"onlyMultiLine"` — Trailing commas should only be used in multi-line scenarios.
- **Default**: `"onlyMultiLine"`

## `unionAndIntersectionType.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `unionAndIntersectionType.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `useBraces`

If braces should be used or not.

- **Type**: `"maintain" | "whenNotSingleLine" | "always" | "preferNone"`
- **Allowed values**:
  - `"maintain"` — Uses braces if they're used. Doesn't use braces if they're not used.
  - `"whenNotSingleLine"` — Uses braces when the body is on a different line.
  - `"always"` — Forces the use of braces. Will add them if they aren't used.
  - `"preferNone"` — Forces no braces when the header is one line and body is one line. Otherwise forces braces.
- **Default**: `"whenNotSingleLine"`

## `useTabs`

Whether to use tabs (true) or spaces (false).

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Uses tabs for indentation.
  - `false` — Uses spaces for indentation.
- **Default**: `false`

## `variableStatement.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `variableStatement.preferSingleLine`

If code should revert back from being on multiple lines to being on a single line when able.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `whileStatement.bracePosition`

Where to place the opening brace.

- **Type**: `"maintain" | "sameLine" | "nextLine" | "sameLineUnlessHanging"`
- **Allowed values**:
  - `"maintain"` — Maintains the brace being on the next line or the same line.
  - `"sameLine"` — Forces the brace to be on the same line.
  - `"nextLine"` — Forces the brace to be on the next line.
  - `"sameLineUnlessHanging"` — Forces the brace to be on the next line if the same line is hanging, but otherwise uses the same line.
- **Default**: `"sameLineUnlessHanging"`

## `whileStatement.preferHanging`

Set to prefer hanging indentation when exceeding the line width instead of making code split up on multiple lines.

- **Type**: `true | false`
- **Allowed values**:
  - `true`
  - `false`
- **Default**: `false`

## `whileStatement.singleBodyPosition`

Where to place the expression of a statement that could possibly be on one line (ex. `if (true) console.log(5);`).

- **Type**: `"maintain" | "sameLine" | "nextLine"`
- **Allowed values**:
  - `"maintain"` — Maintains the position of the expression.
  - `"sameLine"` — Forces the whole statement to be on one line.
  - `"nextLine"` — Forces the expression to be on the next line.
- **Default**: `"maintain"`

## `whileStatement.spaceAfterWhileKeyword`

Whether to add a space after the `while` keyword in a while statement.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `while (true)`
  - `false` — Ex. `while(true)`
- **Default**: `true`

## `whileStatement.spaceAround`

Whether to place spaces around enclosed expressions.

- **Type**: `true | false`
- **Allowed values**:
  - `true` — Ex. `myFunction( true )`
  - `false` — Ex. `myFunction(true)`
- **Default**: `false`

## `whileStatement.useBraces`

If braces should be used or not.

- **Type**: `"maintain" | "whenNotSingleLine" | "always" | "preferNone"`
- **Allowed values**:
  - `"maintain"` — Uses braces if they're used. Doesn't use braces if they're not used.
  - `"whenNotSingleLine"` — Uses braces when the body is on a different line.
  - `"always"` — Forces the use of braces. Will add them if they aren't used.
  - `"preferNone"` — Forces no braces when the header is one line and body is one line. Otherwise forces braces.
- **Default**: `"whenNotSingleLine"`

