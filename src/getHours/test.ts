import { describe, expect, it } from "vitest";
import { getHours } from "./index.js";

describe("getHours", () => {
  it("returns the hours of the given date", () => {
    const result = getHours(new Date(2012, 1 /* Feb */, 29, 11, 45));
    expect(result).toBe(11);
  });

  it("accepts a timestamp", () => {
    const result = getHours(new Date(2014, 3 /* Apr */, 2, 23, 30).getTime());
    expect(result).toBe(23);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getHours(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
