import { describe, expect, it } from "vitest";
import { setMonth } from "./index.js";

describe("setMonth", () => {
  it("sets the month", () => {
    const result = setMonth(new Date(2014, 8 /* Sep */, 1), 1);
    expect(result).toEqual(new Date(2014, 1 /* Feb */, 1));
  });

  it("sets the last day of the month if the original date was the last day of a longer month", () => {
    const result = setMonth(new Date(2014, 11 /* Dec */, 31), 1);
    expect(result).toEqual(new Date(2014, 1 /* Feb */, 28));
  });

  it("accepts a timestamp", () => {
    const result = setMonth(new Date(2014, 8 /* Sep */, 1).getTime(), 11);
    expect(result).toEqual(new Date(2014, 11 /* Dec */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    setMonth(date, 5);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(0, 11 /* Dec */, 31);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setMonth(initialDate, 1);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setMonth(new Date(NaN), 1);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setMonth(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
