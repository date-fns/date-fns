import { describe, expect, it } from "vitest";
import findExports from "./index.js";

describe("findExports", () => {
  it("finds variable declarations", () => {
    const code = `
      export const foo = 'foo';
      export let bar = () => 'bar';
      export var baz = undefined;
    `;
    expect(findExports(code)).toEqual(["foo", "bar", "baz"]);
  });

  it("finds direct named exports", () => {
    const code = `
      const one = 1, two = 2;
      export { one, two };
    `;
    expect(findExports(code)).toEqual(["one", "two"]);
  });

  it("finds renamed exports", () => {
    const code = `
      const original = 'original';
      export { original as renamed };
    `;
    expect(findExports(code)).toEqual(["renamed"]);
  });

  it("finds function exports", () => {
    const code = `
      export function baz() { return 'baz'; }
    `;
    expect(findExports(code)).toEqual(["baz"]);
  });

  it("finds class exports", () => {
    const code = `
      export class MyClass { constructor() {} }
    `;
    expect(findExports(code)).toEqual(["MyClass"]);
  });

  it("finds re-exports", () => {
    const code = `
      export { something } from './another-module';
    `;
    expect(findExports(code)).toEqual(["something"]);
  });
});
