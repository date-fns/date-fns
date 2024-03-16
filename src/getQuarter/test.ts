import { describe, expect, it } from "vitest";
import { getQuarter } from "./index.js";

describe("getQuarter", () => {
  it("returns the quarter of the given date", () => {
    const result = getQuarter(new Date(2014, 6 /* Jul */, 2));
    expect(result).toBe(3);
  });

  it("accepts a timestamp", () => {
    const result = getQuarter(new Date(2014, 3 /* Apr */, 2).getTime());
    expect(result).toBe(2);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getQuarter(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
