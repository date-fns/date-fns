import { describe, expect, it } from "vitest";
import { setDayOfYear } from "./index.js";

describe("setDayOfYear", () => {
  it("sets the day of the year", () => {
    const result = setDayOfYear(new Date(2014, 6 /* Jul */, 2), 2);
    expect(result).toEqual(new Date(2014, 0 /* Jan */, 2));
  });

  it("accepts a timestamp", () => {
    const result = setDayOfYear(new Date(2014, 6 /* Jul */, 2).getTime(), 60);
    expect(result).toEqual(new Date(2014, 2 /* Mar */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    setDayOfYear(date, 365);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 2));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setDayOfYear(new Date(NaN), 2);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setDayOfYear(new Date(2014, 6 /* Jul */, 2), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
