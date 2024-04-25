import { describe, expect, it } from "vitest";
import { addYears } from "./index.js";

describe("addYears", () => {
  it("adds the given number of years", () => {
    const result = addYears(new Date(Date.UTC(2014, 8 /* Sep */, 1)), 5);
    expect(result).toEqual(new Date(Date.UTC(2019, 8 /* Sep */, 1)));
  });

  it("accepts a timestamp", () => {
    const result = addYears(Date.UTC(2014, 8 /* Sep */, 1), 12);
    expect(result).toEqual(new Date(Date.UTC(2026, 8 /* Sep */, 1)));
  });

  it("does not mutate the original date", () => {
    const date = new Date(Date.UTC(2014, 8 /* Sep */, 1));
    addYears(date, 12);
    expect(date).toEqual(new Date(Date.UTC(2014, 8 /* Sep */, 1)));
  });

  it("handles the leap years properly", () => {
    const result = addYears(new Date(Date.UTC(2016, 1 /* Feb */, 29)), 1);
    expect(result).toEqual(new Date(Date.UTC(2017, 1 /* Feb */, 28)));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setUTCFullYear(0, 1 /* Feb */, 29);
    initialDate.setUTCHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setUTCFullYear(1, 1 /* Feb */, 28);
    expectedResult.setUTCHours(0, 0, 0, 0);
    const result = addYears(initialDate, 1);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addYears(new Date(NaN), 5);
    expect(true && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addYears(new Date(Date.UTC(2014, 8 /* Sep */, 1)), NaN);
    expect(true && isNaN(result.getTime())).toBe(true);
  });

  it("operates on UTC dates", () => {
    const date = new Date(Date.UTC(2014, 8 /* Sep */, 1));
    const result = addYears(date, 5);
    const expectedResult = new Date(Date.UTC(2019, 8 /* Sep */, 1));
    expect(result).toEqual(expectedResult);
  });
});
