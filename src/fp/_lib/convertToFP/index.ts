import type { FPArity, FPFn, FPFnInput } from "../../types";

/**
 * Converts a function to a curried function that accepts arguments in reverse
 * order.
 *
 * @param fn - The function to convert to FP
 * @param arity - The arity of the function
 * @param curriedArgs - The curried arguments
 *
 * @returns FP version of the function
 *
 * @private
 */
export function convertToFP<Fn extends FPFnInput, Arity extends FPArity>(
  fn: Fn,
  arity: Arity,
  curriedArgs: unknown[] = [],
): FPFn<Fn, Arity> {
  return (
    curriedArgs.length >= arity
      ? fn(...curriedArgs.slice(0, arity).reverse())
      : (...args: unknown[]) => convertToFP(fn, arity, curriedArgs.concat(args))
  ) as FPFn<Fn, Arity>;
}

/**
 * An experimental alternative implementation of {@link convertToFP} with
 * more type-safety.
 */
export function convertToFP2<A1, B>(fn: (a1: A1) => B): (a1: A1) => B;
export function convertToFP2<A1, A2, B>(
  fn: (a1: A1, a2: A2) => B,
): (a2: A2) => (a1: A1) => B;
export function convertToFP2<A1, A2, A3, B>(
  fn: (a1: A1, a2: A2, a3: A3) => B,
): (a3: A3) => (a2: A2) => (a1: A1) => B;
export function convertToFP2<A1, A2, A3, A4, B>(
  fn: (a1: A1, a2: A2, a3: A3, a4: A4) => B,
): (a4: A4) => (a3: A3) => (a2: A2) => (a1: A1) => B;
export function convertToFP2<A1, A2, A3, A4, B>(
  fn: (a1: A1, a2?: A2, a3?: A3, a4?: A4) => B,
): unknown {
  switch (fn.length) {
    case 1:
      return fn;
    case 2:
      return (a2: A2) => (a1: A1) => fn(a1, a2);
    case 3:
      return (a3: A3) => (a2: A2) => (a1: A1) => fn(a1, a2, a3);
    case 4:
      return (a4: A4) => (a3: A3) => (a2: A2) => (a1: A1) => fn(a1, a2, a3, a4);
    default:
      throw new RangeError(`Invalid arity ${fn.length}`);
  }
}

/**
 * An experimental alternative implementation of {@link convertToFP} using
 * code from effect-ts.
 * @see https://github.com/Effect-TS/effect/blob/effect%402.0.0/packages/effect/src/Function.ts#L71
 */
/* eslint-disable */
export const convertToFPDual: {
  <
    DataLast extends (...args: Array<any>) => any,
    DataFirst extends (...args: Array<any>) => any,
  >(
    arity: Parameters<DataFirst>["length"],
    body: DataFirst,
  ): DataLast & DataFirst;
  <
    DataLast extends (...args: Array<any>) => any,
    DataFirst extends (...args: Array<any>) => any,
  >(
    isDataFirst: (args: IArguments) => boolean,
    body: DataFirst,
  ): DataLast & DataFirst;
} = function (arity, body) {
  if (typeof arity === "function") {
    return function () {
      if (arity(arguments)) {
        // @ts-expect-error
        return body.apply(this, arguments);
      }
      return ((self: any) => body(self, ...arguments)) as any;
    };
  }

  switch (arity) {
    case 0:
    case 1:
      throw new RangeError(`Invalid arity ${arity}`);

    case 2:
      return function (a, b) {
        if (arguments.length >= 2) {
          return body(a, b);
        }
        return function (self: any) {
          return body(self, a);
        };
      };

    case 3:
      return function (a, b, c) {
        if (arguments.length >= 3) {
          return body(a, b, c);
        }
        return function (self: any) {
          return body(self, a, b);
        };
      };

    case 4:
      return function (a, b, c, d) {
        if (arguments.length >= 4) {
          return body(a, b, c, d);
        }
        return function (self: any) {
          return body(self, a, b, c);
        };
      };

    case 5:
      return function (a, b, c, d, e) {
        if (arguments.length >= 5) {
          return body(a, b, c, d, e);
        }
        return function (self: any) {
          return body(self, a, b, c, d);
        };
      };

    default:
      return function () {
        if (arguments.length >= arity) {
          // @ts-expect-error
          return body.apply(this, arguments);
        }
        const args = arguments;
        return function (self: any) {
          return body(self, ...args);
        };
      };
  }
};
/* eslint-enable */
