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
      throw new TypeError("Unexpected arity");
  }
}
