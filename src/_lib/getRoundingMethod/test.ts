import { describe, expect, it } from "vitest";
import { getRoundingMethod } from "./index.js";

describe("getRoundingMethod", () => {
  it("rounds with truncate by default", () => {
    expect(getRoundingMethod(undefined)(2.9)).toBe(2);
    expect(getRoundingMethod(undefined)(1.5)).toBe(1);
    expect(getRoundingMethod(undefined)(-3.9)).toBe(-3);
    expect(getRoundingMethod(undefined)(-14.1)).toBe(-14);
  });

  it('allows to specify "trunc" rounding method', () => {
    expect(getRoundingMethod("trunc")(2.9)).toBe(2);
    expect(getRoundingMethod("trunc")(1.5)).toBe(1);
    expect(getRoundingMethod("trunc")(-3.9)).toBe(-3);
    expect(getRoundingMethod("trunc")(-14.1)).toBe(-14);
  });

  it('allows to specify "ceil" rounding method', () => {
    expect(getRoundingMethod("ceil")(2.9)).toBe(3);
    expect(getRoundingMethod("ceil")(1.5)).toBe(2);
    expect(getRoundingMethod("ceil")(-3.9)).toBe(-3);
    expect(getRoundingMethod("ceil")(-14.1)).toBe(-14);
  });

  it('allows to specify "floor" rounding method', () => {
    expect(getRoundingMethod("floor")(2.9)).toBe(2);
    expect(getRoundingMethod("floor")(1.5)).toBe(1);
    expect(getRoundingMethod("floor")(-3.9)).toBe(-4);
    expect(getRoundingMethod("floor")(-14.1)).toBe(-15);
  });

  it('allows to specify "round" rounding method', () => {
    expect(getRoundingMethod("round")(2.9)).toBe(3);
    expect(getRoundingMethod("round")(1.5)).toBe(2);
    expect(getRoundingMethod("round")(-3.9)).toBe(-4);
    expect(getRoundingMethod("round")(-14.1)).toBe(-14);
  });

  it("prevents negative zero", () => {
    expect(!isNegativeZero(getRoundingMethod("trunc")(-0.01))).toBe(true);
    expect(!isNegativeZero(getRoundingMethod("floor")(-0.0))).toBe(true);
    expect(!isNegativeZero(getRoundingMethod("ceil")(-0.9))).toBe(true);
    expect(!isNegativeZero(getRoundingMethod("round")(-0.1))).toBe(true);
  });
});

function isNegativeZero(x: number): boolean {
  return x === 0 && 1 / x < 0;
}
