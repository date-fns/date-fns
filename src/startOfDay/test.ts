import { describe, expect, it } from "vitest";
import { startOfDay } from "./index.js";

describe("startOfDay", () => {
  it("returns the date with the time set to 00:00:00", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfDay(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = startOfDay(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfDay(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfDay(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
