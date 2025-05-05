import * as parser from "@babel/parser";
import traverseModule from "@babel/traverse";
import * as t from "@babel/types";

// HACK: There are some incompatibilities between how typescript is handling
// this import and how vitest handles it...
const traverse = traverseModule.default ?? traverseModule;

/**
 * Extracts named exports from a JavaScript/TypeScript file. This is used to
 * generate named re-exports in index.js, rather than wildcard re-exports.
 *
 * Named re-exports can allow JS bundlers to skip reading unused files entirely
 * (using `sideEffects: false`).
 *
 * Wildcard re-exports would require the bundler to read all files to discover
 * which ones contain the desired functions. This doesn't change production
 * bundle sizes (tree shaking still removes unused functions), but it can impact
 * the build speed of projects depending on `date-fns`.
 *
 * This implementation is a little incomplete and doesn't work for 100% of code,
 * but should be more than good enough for the code in date-fns.
 */
export default function findExports(code: string): string[] {
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["typescript"],
  });

  const namedExports: string[] = [];

  traverse(ast, {
    ExportNamedDeclaration(path) {
      // Handle direct named exports: export { foo, bar }
      if (path.node.specifiers && path.node.specifiers.length > 0) {
        path.node.specifiers.forEach((specifier) => {
          if (t.isIdentifier(specifier.exported)) {
            namedExports.push(specifier.exported.name);
          }
        });
      }

      // Handle variable declarations: export const foo = 1, bar = 2
      if (t.isVariableDeclaration(path.node.declaration)) {
        path.node.declaration.declarations.forEach((declaration) => {
          if (t.isIdentifier(declaration.id)) {
            namedExports.push(declaration.id.name);
          }
        });
      }

      // Handle function declarations: export function foo() {}
      if (
        t.isFunctionDeclaration(path.node.declaration) &&
        t.isIdentifier(path.node.declaration.id)
      ) {
        namedExports.push(path.node.declaration.id.name);
      }

      // Handle class declarations: export class Foo {}
      if (
        t.isClassDeclaration(path.node.declaration) &&
        t.isIdentifier(path.node.declaration.id)
      ) {
        namedExports.push(path.node.declaration.id.name);
      }
    },
  });

  return namedExports;
}
