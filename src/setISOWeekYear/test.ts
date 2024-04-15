import { describe, expect, it } from "vitest";
import { setISOWeekYear } from "./index.js";

describe("setISOWeekYear", () => {
  it("sets the ISO week-numbering year, saving the ISO week and the day of the week", () => {
    const result = setISOWeekYear(new Date(2008, 11 /* Dec */, 29), 2007);
    expect(result).toEqual(new Date(2007, 0 /* Jan */, 1));
  });

  it("accepts a timestamp", () => {
    const result = setISOWeekYear(
      new Date(2010, 0 /* Jan */, 2).getTime(),
      2004,
    );
    expect(result).toEqual(new Date(2005, 0 /* Jan */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2008, 11 /* Dec */, 29);
    setISOWeekYear(date, 2000);
    expect(date).toEqual(new Date(2008, 11 /* Dec */, 29));
  });

  it("sets ISO week-numbering years less than 100", () => {
    const initialDate = new Date(2008, 11 /* Dec */, 29);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(7, 0 /* Jan */, 1);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setISOWeekYear(initialDate, 7);
    expect(result).toEqual(expectedResult);
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(8, 11 /* Dec */, 29);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(7, 0 /* Jan */, 1);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setISOWeekYear(initialDate, 7);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setISOWeekYear(new Date(NaN), 2007);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setISOWeekYear(new Date(2008, 11 /* Dec */, 29), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
