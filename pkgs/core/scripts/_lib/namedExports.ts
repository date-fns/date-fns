import assert from "node:assert";
import { parse } from "oxc-parser";

export interface NamedExport {
  name: string;
  isType: boolean;
}

/**
 * Extract public names, including aliases and type-only exports, for a barrel.
 */
export async function namedExports(
  filename: string,
  source: string,
): Promise<NamedExport[]> {
  const parsed = await parse(filename, source);
  if (parsed.errors.length)
    throw new Error(
      `Unable to parse ${filename}: ${JSON.stringify(parsed.errors)}`,
    );

  const names = new Map<string, boolean>();
  for (const export_ of parsed.module.staticExports) {
    for (const entry of export_.entries) {
      const { name, kind } = entry.exportName;

      // Ignore default exports
      if (kind === "Default") continue;

      // Throw on wildcard exports
      if (kind === "None")
        throw new Error(
          `Resolve wildcard exports in ${filename} before generating its barrel`,
        );

      assert(name);

      // Overloads can repeat a name. A value export also exports its type.
      names.set(name, (names.get(name) ?? true) && entry.isType);
    }
  }

  return Array.from(names, ([name, isType]) => ({ name, isType }));
}

/**
 * Extract and format named exports for a barrel.
 */
export async function namedExportsStr(
  filename: string,
  source: string,
): Promise<string> {
  return namedExportsToStr(await namedExports(filename, source));
}

/**
 * Format a single named export.
 */
export function namedExportToStr({ name, isType }: NamedExport): string {
  return `${isType ? "type " : ""}${name}`;
}

/**
 * Format named exports for a barrel, grouping type-only exports when possible.
 */
export function namedExportsToStr(exports: NamedExport[]): string {
  const allTypes = exports.length > 0 && exports.every(({ isType }) => isType);
  const names = exports.map(
    ({ name, isType }) => `${!allTypes && isType ? "type " : ""}${name}`,
  );
  return `${allTypes ? "type " : ""}{ ${names.join(", ")} }`;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("namedExports", () => {
    it("extracts named exports", async () => {
      const result = await namedExports(
        "basic.ts",
        `
        export const foo = 1;
        export function bar() {}
        `,
      );
      expect(result).toEqual([
        { name: "foo", isType: false },
        { name: "bar", isType: false },
      ]);
    });

    it("ignores default exports", async () => {
      const result = await namedExports(
        "default.ts",
        `
        export default 1;
        export const foo = 1;
        `,
      );
      expect(result).toEqual([{ name: "foo", isType: false }]);
    });

    it("extracts type-only exports", async () => {
      const result = await namedExports(
        "types.ts",
        `
        export type Foo = string;
        export interface Bar {}
        export const bar = 1;
        `,
      );
      expect(result).toEqual([
        { name: "Foo", isType: true },
        { name: "Bar", isType: true },
        { name: "bar", isType: false },
      ]);
    });

    it("extracts dual kind exports", async () => {
      const result = await namedExports(
        "dual.ts",
        `
        export interface Foo {}
        export const bar = 1;
        export class Foo {}
        export class Bar {}
        export interface Bar {}
        `,
      );
      expect(result).toEqual([
        { name: "Foo", isType: false },
        { name: "bar", isType: false },
        { name: "Bar", isType: false },
      ]);
    });

    it("throws on wildcard exports", async () => {
      await expect(() =>
        namedExports(
          "wildcard.ts",
          `
          export const foo = 1;
          export * from "./other";
          `,
        ),
      ).rejects.toThrow(/Resolve wildcard exports/);
    });
  });

  describe("namedExportToStr", () => {
    it("formats a type export with a type prefix", () => {
      expect(namedExportToStr({ name: "Hello", isType: true })).toBe(
        "type Hello",
      );
    });

    it("formats a value export without a type prefix", () => {
      expect(namedExportToStr({ name: "hello", isType: false })).toBe("hello");
    });
  });

  describe("namedExportsToStr", () => {
    it("formats type-only exports with a shared type prefix", () => {
      const result = namedExportsToStr([
        { name: "Hello", isType: true },
        { name: "World", isType: true },
      ]);
      expect(result).toBe("type { Hello, World }");
    });

    it("formats mixed exports with individual type prefixes", () => {
      const result = namedExportsToStr([
        { name: "Hello", isType: true },
        { name: "world", isType: false },
      ]);
      expect(result).toBe("{ type Hello, world }");
    });

    it("formats value exports without type prefixes", () => {
      const result = namedExportsToStr([
        { name: "hello", isType: false },
        { name: "world", isType: false },
      ]);
      expect(result).toBe("{ hello, world }");
    });

    it("formats empty exports without a type prefix", () => {
      expect(namedExportsToStr([])).toBe("{  }");
    });
  });
}
