import { describe, expect, it } from "vitest";
import { endOfYear } from "./index.js";

describe("endOfYear", () => {
  it("returns the date with the time set to 23:59:59.999 and the date set to the last day of a year", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfYear(date);
    expect(result).toEqual(new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = endOfYear(date);
    expect(result).toEqual(new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfYear(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfYear(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
