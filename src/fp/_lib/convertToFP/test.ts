import { pipe } from "fp-ts/function";
// @ts-expect-error - js-fns types are tripping with the current TS settings
import { flow as jsFnsFlow } from "js-fns";
// @ts-ignore - Lodash types are tripping ("Module '"lodash"' has no exported member 'flow'.ts(2305)")
import { flow as lodashFlow } from "lodash";
import { describe, expect, it } from "vitest";
import { addDays, addHours, isEqual } from "../../index.js";
import { convertToFP } from "./index.js";

describe("convertToFP", () => {
  function fn(a: unknown, b: unknown, c: unknown) {
    return "a b c"
      .replace("a", String(a))
      .replace("b", String(b))
      .replace("c", String(c));
  }

  describe("arity of converted function === arity of initial function", () => {
    it("allows arguments to be curried (and reverses their order)", () => {
      const fpFn = convertToFP(fn, 3);
      expect(fpFn(3)(2)(1)).toBe("1 2 3");
    });

    it("allows to group arguments", () => {
      const fpFn = convertToFP(fn, 3);
      expect(fpFn(3, 2)(1)).toBe("1 2 3");
      expect(fpFn(3)(2, 1)).toBe("1 2 3");
    });

    it("allows the function to be called with all arguments in the reversed order", () => {
      const fpFn = convertToFP(fn, 3);
      expect(fpFn(3, 2, 1)).toBe("1 2 3");
    });

    it("ignores calls without curried arguments", () => {
      const fpFn = convertToFP(fn, 3);
      expect(fpFn()()(3, 2)()()(1)).toBe("1 2 3");
    });

    it("ignores extra curried arguments in the last group", () => {
      const fpFn = convertToFP(fn, 3);
      // @ts-expect-error - It's ok, we're testing the function
      expect(fpFn(3, 2, 1, 0, -1, -2)).toBe("1 2 3");
      // @ts-expect-error - It's ok, we're testing the function
      expect(fpFn(3)(2)(1, 0, -1, -2)).toBe("1 2 3");
    });
  });

  describe("arity of converted function < arity of initial function", () => {
    it("calls the initial function with a short list of arguments", () => {
      const fpFn = convertToFP(fn, 2);
      expect(fpFn(2)(1)).toBe("1 2 undefined");
      expect(fpFn(2, 1)).toBe("1 2 undefined");
    });

    it("ignores extra curried arguments in the last group", () => {
      const fpFn = convertToFP(fn, 2);
      // @ts-expect-error - It's ok, we're testing the function
      expect(fpFn(3)(2, 1)).toBe("2 3 undefined");
      // @ts-expect-error - It's ok, we're testing the function
      expect(fpFn(3, 2, 1)).toBe("2 3 undefined");
    });
  });

  describe("arity of converted function > arity of initial function", () => {
    it("works, but ignores the extra arguments", () => {
      const fpFn = convertToFP(fn, 4);
      // @ts-expect-error - It's ok, we're testing the function
      expect(fpFn(4)(3)(2)(1)).toBe("1 2 3");
      // @ts-expect-error - It's ok, we're testing the function
      expect(fpFn(4, 3, 2, 1)).toBe("1 2 3");
    });
  });

  describe("arity of converted function === 0", () => {
    it("returns the constant instead of function", () => {
      // @ts-expect-error - It's ok, we're testing the function
      const result = convertToFP(fn, 0);
      expect(result).toBe("undefined undefined undefined");
    });
  });

  describe("types", () => {
    it("resolves proper types", () => {
      const fn1 = addDays();
      const fn2 = fn1(1);
      const result = fn2(new Date(1987, 1));
      expect(result.getFullYear()).toBe(1987);
    });
  });

  describe("Lodash", () => {
    it("works with flow", () => {
      const fn = lodashFlow(addDays(1), addHours(1));
      const result = fn(new Date(1987, 1, 11));
      expect(result.getFullYear()).toBe(1987);
      expect(result).toEqual(new Date(1987, 1, 12, 1));
    });
  });

  describe("fp-ts", () => {
    it("works with pipe", () => {
      const result = pipe(
        new Date(1987, 1, 11),
        isEqual(new Date(1987, 1, 11)),
      );
      const _assign: boolean = result;
      expect(result).toBe(true);
    });
  });

  describe("js-fns", () => {
    it("works with flow", () => {
      const fn = jsFnsFlow(addDays(1), addHours(1));
      const result = fn(new Date(1987, 1, 11));
      expect(result.getFullYear()).toBe(1987);
      expect(result).toEqual(new Date(1987, 1, 12, 1));
    });
  });
});
