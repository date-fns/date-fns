import { describe, expect, it } from "vitest";
import { endOfDay } from "./index.js";

describe("endOfDay", () => {
  it("returns the date with the time set to 23:59:59.999", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfDay(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = endOfDay(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfDay(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfDay(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
