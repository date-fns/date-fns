import { describe, expect, it } from "vitest";
import { lastDayOfISOWeek } from "./index.js";

describe("lastDayOfISOWeek", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the last day of an ISO week", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfISOWeek(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 7));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0).getTime();
    const result = lastDayOfISOWeek(date);
    expect(result).toEqual(new Date(2014, 1 /* Feb */, 16));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    lastDayOfISOWeek(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = lastDayOfISOWeek(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
