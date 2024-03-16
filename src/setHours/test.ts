import { describe, expect, it } from "vitest";
import { setHours } from "./index.js";

describe("setHours", () => {
  it("sets the amount of hours", () => {
    const result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), 4);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 4, 30));
  });

  it("accepts a timestamp", () => {
    const result = setHours(new Date(2014, 8 /* Sep */, 1, 11).getTime(), 5);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 5));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1, 11);
    setHours(date, 12);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1, 11));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setHours(new Date(NaN), 4);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
