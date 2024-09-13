/* eslint-disable */

// Run:
// npx jscodeshift --parser=ts -t codemods/expectify.js src/**/test.ts

module.exports = function transformer(file, api) {
  const j = api.jscodggeshift;

  const source = j(file.source);

  // Remove import assert from "node:assert" and "assert";
  source
    .find(j.ImportDeclaration, {
      source: (value) =>
        value.value === "node:assert" || value.value === "assert",
    })
    .remove();

  // Add expect to imports
  source
    .find(j.ImportDeclaration, {
      source: { value: "vitest" },
    })
    .forEach((path) => {
      let alreadyHasExpect = path.node.specifiers.some(
        (specifier) =>
          specifier.imported && specifier.imported.name === "expect",
      );
      if (!alreadyHasExpect) {
        path.node.specifiers.push(j.importSpecifier(j.identifier("expect")));
        alreadyHasExpect = true;
      }

      const defaultSpecifier = path.node.specifiers.filter(
        (specifier) => specifier.type === "ImportDefaultSpecifier",
      );
      const namedSpecifiers = path.node.specifiers
        .filter((specifier) => specifier.type === "ImportSpecifier")
        .sort((a, b) => {
          return a.imported.name.localeCompare(b.imported.name);
        });

      path.node.specifiers = [...defaultSpecifier, ...namedSpecifiers];
    });

  // Replace assert.deepStrictEqual
  source
    .find(j.CallExpression, {
      callee: {
        object: { name: "assert" },
        property: { name: "deepStrictEqual" },
      },
    })
    .forEach((path) => {
      const newExpression = j.callExpression(
        j.memberExpression(
          j.callExpression(j.identifier("expect"), [path.node.arguments[0]]),
          j.identifier("toEqual"),
        ),
        [path.node.arguments[1]],
      );

      j(path).replaceWith(newExpression);
    });

  // Replace assert.strictEqual
  source
    .find(j.CallExpression, {
      callee: {
        object: { name: "assert" },
        property: { name: "strictEqual" },
      },
    })
    .forEach((path) => {
      const newExpression = j.callExpression(
        j.memberExpression(
          j.callExpression(j.identifier("expect"), [path.node.arguments[0]]),
          j.identifier("toBe"),
        ),
        [path.node.arguments[1]],
      );

      j(path).replaceWith(newExpression);
    });

  // Replace assert.ok expressions
  source
    .find(j.CallExpression, {
      callee: {
        object: { name: "assert" },
        property: { name: "ok" },
      },
    })
    .forEach((path) => {
      const argument = path.node.arguments[0];
      const newExpression = j.callExpression(
        j.memberExpression(
          j.callExpression(j.identifier("expect"), [argument]),
          j.identifier("toBe"),
        ),
        [j.booleanLiteral(true)],
      );

      j(path).replaceWith(newExpression);
    });

  // Replace assert.throws expressions
  source
    .find(j.CallExpression, {
      callee: {
        object: { name: "assert" },
        property: { name: "throws" },
      },
    })
    .forEach((path) => {
      const args = path.node.arguments;
      const throwFunc = args[0];
      const errorConstraint = args[1];

      // Construct the basic expect().toThrow structure
      const newExpect = j.callExpression(j.identifier("expect"), [throwFunc]);
      const toThrowCall = j.memberExpression(
        newExpect,
        j.identifier("toThrow"),
      );

      let newExpression;
      if (errorConstraint) {
        // If there's a specific error or pattern being asserted
        newExpression = j.callExpression(toThrowCall, [errorConstraint]);
      } else {
        // If it's just checking that something throws
        newExpression = j.callExpression(toThrowCall, []);
      }

      j(path).replaceWith(newExpression);
    });

  // Replace assert.doesNotThrow expressions
  source
    .find(j.CallExpression, {
      callee: {
        object: { name: "assert" },
        property: { name: "doesNotThrow" },
      },
    })
    .forEach((path) => {
      const args = path.node.arguments;
      const blockFunc = args[0];

      const newExpect = j.callExpression(j.identifier("expect"), [blockFunc]);
      const notMember = j.memberExpression(newExpect, j.identifier("not"));
      const toThrowCall = j.memberExpression(
        notMember,
        j.identifier("toThrow"),
      );

      const newExpression = j.callExpression(toThrowCall, []);

      j(path).replaceWith(newExpression);
    });

  // Replace general assert expression
  source
    .find(j.CallExpression, {
      callee: { name: "assert" },
    })
    .replaceWith((path) => {
      const args = path.value.arguments;

      // Check if it's a binary expression like 'result === 3'
      if (args.length === 1 && j.BinaryExpression.check(args[0])) {
        const argument = args[0];
        const left = argument.left;
        const right = argument.right;
        const operator = argument.operator;
        const newExpect = j.callExpression(j.identifier("expect"), [left]);
        let newMatcher;

        // Determine the correct matcher based on the operator
        switch (operator) {
          case "===":
          case "==":
            newMatcher = "toBe";
            break;
          case "!==":
          case "!=":
            newMatcher = "not.toBe";
            break;
          case "<":
            newMatcher = "toBeLessThan";
            break;
          case "<=":
            newMatcher = "toBeLessThanOrEqual";
            break;
          case ">":
            newMatcher = "toBeGreaterThan";
            break;
          case ">=":
            newMatcher = "toBeGreaterThanOrEqual";
            break;
          default:
            // Return original if there's an operator we're not handling
            return path.value;
        }

        return j.callExpression(
          j.memberExpression(newExpect, j.identifier(newMatcher)),
          [right],
        );
      } else if (args.length === 1) {
        // Handle general assert expressions and assert.ok
        const argument = args[0];
        const isSimpleExpression =
          j.MemberExpression.check(argument) ||
          j.CallExpression.check(argument);
        const newExpect = j.callExpression(j.identifier("expect"), [argument]);

        if (isSimpleExpression) {
          // For expressions like 'nextSunday(new Date(NaN)) instanceof Date'
          return j.callExpression(
            j.memberExpression(newExpect, j.identifier("toBe")),
            [j.booleanLiteral(true)],
          );
        } else {
          // For other single argument assert scenarios, maintain the original transformation
          return j.callExpression(
            j.memberExpression(newExpect, j.identifier("toBe")),
            [j.booleanLiteral(true)],
          );
        }
      }
      // Return original if no conditions met
      return path.value;
    });

  // Catch all the rest general asserts (instanceof is giving me hard time)
  source
    .find(j.CallExpression, {
      callee: { name: "assert" },
    })
    .replaceWith((path) => {
      const args = path.value.arguments;

      if (args.length === 1) {
        const argument = args[0];
        const newExpect = j.callExpression(j.identifier("expect"), [argument]);
        return j.callExpression(
          j.memberExpression(newExpect, j.identifier("toBe")),
          [j.booleanLiteral(true)],
        );
      }
      return path.value;
    });

  return source.toSource();
};
