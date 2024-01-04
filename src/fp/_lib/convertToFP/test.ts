/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { convertToFP, convertToFP2, convertToFPDual } from "./index.js";

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
      assert(fpFn(3)(2)(1) === "1 2 3");
    });

    it("allows to group arguments", () => {
      const fpFn = convertToFP(fn, 3);
      assert(fpFn(3, 2)(1) === "1 2 3");
      assert(fpFn(3)(2, 1) === "1 2 3");
    });

    it("allows the function to be called with all arguments in the reversed order", () => {
      const fpFn = convertToFP(fn, 3);
      assert(fpFn(3, 2, 1) === "1 2 3");
    });

    it("ignores calls without curried arguments", () => {
      const fpFn = convertToFP(fn, 3);
      assert(fpFn()()(3, 2)()()(1) === "1 2 3");
    });

    it("ignores extra curried arguments in the last group", () => {
      const fpFn = convertToFP(fn, 3);
      // @ts-expect-error - It's ok, we're testing the function
      assert(fpFn(3, 2, 1, 0, -1, -2) === "1 2 3");
      // @ts-expect-error - It's ok, we're testing the function
      assert(fpFn(3)(2)(1, 0, -1, -2) === "1 2 3");
    });
  });

  describe("arity of converted function < arity of initial function", () => {
    it("calls the initial function with a short list of arguments", () => {
      const fpFn = convertToFP(fn, 2);
      assert(fpFn(2)(1) === "1 2 undefined");
      assert(fpFn(2, 1) === "1 2 undefined");
    });

    it("ignores extra curried arguments in the last group", () => {
      const fpFn = convertToFP(fn, 2);
      // @ts-expect-error - It's ok, we're testing the function
      assert(fpFn(3)(2, 1) === "2 3 undefined");
      // @ts-expect-error - It's ok, we're testing the function
      assert(fpFn(3, 2, 1) === "2 3 undefined");
    });
  });

  describe("arity of converted function > arity of initial function", () => {
    it("works, but ignores the extra arguments", () => {
      const fpFn = convertToFP(fn, 4);
      // @ts-expect-error - It's ok, we're testing the function
      assert(fpFn(4)(3)(2)(1) === "1 2 3");
      // @ts-expect-error - It's ok, we're testing the function
      assert(fpFn(4, 3, 2, 1) === "1 2 3");
    });
  });

  describe("arity of converted function === 0", () => {
    it("returns the constant instead of function", () => {
      // @ts-expect-error - It's ok, we're testing the function
      const result = convertToFP(fn, 0);
      // @ts-expect-error - It's ok, we're testing the function
      assert(result === "undefined undefined undefined");
    });
  });
});

describe("convertToFP2", () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function assertType<T extends never>() {}

  type IsEqual<A, B> = Exclude<A, B> | Exclude<B, A>;

  /**
   * Pipeline function modeled after fp-ts
   * @see https://github.com/gcanti/fp-ts/blob/2.16.0/src/function.ts#L416
   */
  function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C {
    return bc(ab(a));
  }

  function fn(a: unknown, b: unknown): string {
    return "a b".replace("a", String(a)).replace("b", String(b));
  }

  describe("arity of converted function === arity of initial function", () => {
    it("allows arguments to be curried (and reverses their order)", () => {
      const fpFn = convertToFP2(fn);
      assert(fpFn(2)(1) === "1 2");
    });
  });

  describe("original convertToFP is not pipeable", () => {
    it("does not type-check when mapping", () => {
      const fpFn = convertToFP(fn, 2);
      const result = [1].map(fpFn(2)).map(fpFn(3))[0];
      // @ts-expect-error Type of result is "FPFn1<string, unknown>" instead of "string"
      assertType<IsEqual<typeof result, string>>();
      assert.strictEqual(result, "1 2 3");
    });

    it("does not type-check with fp-ts style pipe function", () => {
      const fpFn = convertToFP(fn, 2);
      const result = pipe(1, fpFn(2), fpFn(3));
      // @ts-expect-error Type of result is "FPFn1<string, unknown>" instead of "string"
      assertType<IsEqual<typeof result, string>>();
      assert.strictEqual(result, "1 2 3");
    });
  });

  describe("convertToFP2 is pipeable", () => {
    it("type-checks with the alternative convertToFP2 implementation", () => {
      const fpFn = convertToFP2(fn);
      const result = [1].map(fpFn(2)).map(fpFn(3))[0];
      assertType<IsEqual<typeof result, string>>();
      assert.strictEqual(result, "1 2 3");
    });

    it("type-checks with fp-ts style pipe function", () => {
      const fpFn = convertToFP2(fn);
      const result = pipe(1, fpFn(2), fpFn(3));
      assertType<IsEqual<typeof result, string>>();
      assert.strictEqual(result, "1 2 3");
    });
  });

  describe("alternative implementation using effect-ts dual", () => {
    it("type-checks with dual conversion", () => {
      const fpFn: {
        (that: unknown): (self: unknown) => string;
        (self: unknown, that: unknown): string;
      } = convertToFPDual(2, fn);
      const result = [1].map(fpFn(2)).map(fpFn(3))[0];
      assertType<IsEqual<typeof result, string>>();
      assert.strictEqual(result, "1 2 3");
    });
  });
});
