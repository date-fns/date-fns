import { describe, expect, it } from "vitest";
import { getMonth } from "./index.js";

describe("getMonth", () => {
  it("returns the month of the given date", () => {
    const result = getMonth(new Date(2012, 1 /* Feb */, 29));
    expect(result).toBe(1);
  });

  it("accepts a timestamp", () => {
    const result = getMonth(new Date(2014, 3 /* Apr */, 2).getTime());
    expect(result).toBe(3);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
