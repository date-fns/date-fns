import { describe, expect, it } from "vitest";
import { getDecade } from "./index.js";

describe("getDecade", () => {
  it("returns the decade for a the given date", () => {
    const result = getDecade(new Date(1971, 10 /* Nov */, 8));
    expect(result).toBe(1970);
  });

  it("accepts a timestamp", () => {
    const result = getDecade(new Date(1969, 6 /* Jul */, 20).getTime());
    expect(result).toBe(1960);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDecade(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("properly works with negative numbers", () => {
    expect(getDecade(new Date(2009, 0, 1))).toBe(2000);
    expect(getDecade(new Date(-2001, 0, 1))).toBe(-2010);
  });
});
