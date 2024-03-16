import { describe, expect, it } from "vitest";
import { startOfMonth } from "./index.js";

describe("startOfMonth", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of a month", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfMonth(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = startOfMonth(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfMonth(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfMonth(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
