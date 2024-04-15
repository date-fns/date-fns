import { describe, expect, it } from "vitest";
import { setYear } from "./index.js";

describe("setYear", () => {
  it("sets the year", () => {
    const result = setYear(new Date(2014, 8 /* Sep */, 1), 2013);
    expect(result).toEqual(new Date(2013, 8 /* Sep */, 1));
  });

  it("accepts a timestamp", () => {
    const result = setYear(new Date(2014, 8 /* Sep */, 1).getTime(), 2016);
    expect(result).toEqual(new Date(2016, 8 /* Sep */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    setYear(date, 2011);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setYear(new Date(NaN), 2013);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setYear(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
