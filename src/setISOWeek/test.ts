import { describe, expect, it } from "vitest";
import { setISOWeek } from "./index.js";

describe("setISOWeek", () => {
  it("sets the ISO week", () => {
    const result = setISOWeek(new Date(2004, 7 /* Aug */, 7), 53);
    expect(result).toEqual(new Date(2005, 0 /* Jan */, 1));
  });

  it("accepts a timestamp", () => {
    const result = setISOWeek(new Date(2009, 11 /* Dec */, 2).getTime(), 1);
    expect(result).toEqual(new Date(2008, 11 /* Dec */, 31));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    setISOWeek(date, 52);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 2));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(4, 0 /* Jan */, 4);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(4, 11 /* Dec */, 26);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setISOWeek(initialDate, 52);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setISOWeek(new Date(NaN), 53);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setISOWeek(new Date(2004, 7 /* Aug */, 7), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
