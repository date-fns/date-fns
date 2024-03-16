import { describe, expect, it } from "vitest";
import { setQuarter } from "./index.js";

describe("setQuarter", () => {
  it("sets the quarter of the year", () => {
    const result = setQuarter(new Date(2014, 6 /* Jul */, 2), 1);
    expect(result).toEqual(new Date(2014, 0 /* Jan */, 2));
  });

  it("sets the last day of the month if the original date was the last day of a longer month", () => {
    const result = setQuarter(new Date(2014, 10 /* Nov */, 30), 1);
    expect(result).toEqual(new Date(2014, 1 /* Feb */, 28));
  });

  it("accepts a timestamp", () => {
    const result = setQuarter(new Date(2014, 6 /* Jul */, 1).getTime(), 4);
    expect(result).toEqual(new Date(2014, 9 /* Oct */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 1);
    setQuarter(date, 2);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 1));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(0, 10 /* Nov */, 30);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setQuarter(initialDate, 1);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setQuarter(new Date(NaN), 1);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setQuarter(new Date(2014, 6 /* Jul */, 2), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
