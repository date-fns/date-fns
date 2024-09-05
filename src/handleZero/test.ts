import { describe, expect, it } from "vitest";
import { handleZero } from ".";

describe("handleZero", () => {
  it("returns the input when not zero", () => {
    expect(handleZero(1)).toBe(1);
    expect(handleZero(-1)).toBe(-1);
    expect(handleZero(2.5)).toBe(2.5);
    expect(handleZero(-2.5)).toBe(-2.5);
  });

  it("returns positive zero when input is zero", () => {
    expect(handleZero(0)).toBe(0);
    expect(handleZero(-0)).toBe(0);
  });

  it("handles edge cases", () => {
    expect(handleZero(NaN)).toBeNaN();  // Handle NaN as it is
    expect(handleZero(Infinity)).toBe(Infinity);  // Handle Infinity as it is
    expect(handleZero(-Infinity)).toBe(-Infinity);  // Handle -Infinity as it is
  });
});
