import { describe, expect, it } from "vitest";
import { startOfMinute } from "./index.js";

describe("startOfMinute", () => {
  it("returns the date with the time set to the first millisecond of a minute", () => {
    const date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400);
    const result = startOfMinute(date);
    expect(result).toEqual(new Date(2014, 11 /* Dec */, 1, 22, 15));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 11 /* Dec */, 1, 22, 15).getTime();
    const result = startOfMinute(date);
    expect(result).toEqual(new Date(2014, 11 /* Dec */, 1, 22, 15));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400);
    startOfMinute(date);
    expect(date).toEqual(new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfMinute(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
