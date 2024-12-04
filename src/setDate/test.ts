import { describe, expect, it } from "vitest";
import { setDate } from "./index.js";

describe("setDate", () => {
  it("sets the day of the month", () => {
    const result = setDate(new Date(2014, 8 /* Sep */, 1), 30);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 30));
  });

  it("accepts a timestamp", () => {
    const result = setDate(new Date(2014, 8 /* Sep */, 1).getTime(), 25);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 25));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    setDate(date, 20);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setDate(new Date(NaN), 30);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setDate(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
