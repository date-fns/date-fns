import { describe, it } from "vitest";
import assert from "node:assert";
import { getRoundingMethod } from ".";

describe("getRoundingMethod", () => {
  it("rounds with truncate by default", () => {
    assert(getRoundingMethod(undefined)(2.9) === 2);
    assert(getRoundingMethod(undefined)(1.5) === 1);
    assert(getRoundingMethod(undefined)(-3.9) === -3);
    assert(getRoundingMethod(undefined)(-14.1) === -14);
  });

  it('allows to specify "trunc" rounding method', () => {
    assert(getRoundingMethod("trunc")(2.9) === 2);
    assert(getRoundingMethod("trunc")(1.5) === 1);
    assert(getRoundingMethod("trunc")(-3.9) === -3);
    assert(getRoundingMethod("trunc")(-14.1) === -14);
  });

  it('allows to specify "ceil" rounding method', () => {
    assert(getRoundingMethod("ceil")(2.9) === 3);
    assert(getRoundingMethod("ceil")(1.5) === 2);
    assert(getRoundingMethod("ceil")(-3.9) === -3);
    assert(getRoundingMethod("ceil")(-14.1) === -14);
  });

  it('allows to specify "floor" rounding method', () => {
    assert(getRoundingMethod("floor")(2.9) === 2);
    assert(getRoundingMethod("floor")(1.5) === 1);
    assert(getRoundingMethod("floor")(-3.9) === -4);
    assert(getRoundingMethod("floor")(-14.1) === -15);
  });

  it('allows to specify "round" rounding method', () => {
    assert(getRoundingMethod("round")(2.9) === 3);
    assert(getRoundingMethod("round")(1.5) === 2);
    assert(getRoundingMethod("round")(-3.9) === -4);
    assert(getRoundingMethod("round")(-14.1) === -14);
  });

  it("prevents negative zero", () => {
    assert(!isNegativeZero(getRoundingMethod("trunc")(-0.01)));
    assert(!isNegativeZero(getRoundingMethod("floor")(-0.0)));
    assert(!isNegativeZero(getRoundingMethod("ceil")(-0.9)));
    assert(!isNegativeZero(getRoundingMethod("round")(-0.1)));
  });
});

function isNegativeZero(x: number): boolean {
  return x === 0 && 1 / x < 0;
}
