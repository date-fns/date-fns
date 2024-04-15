import { describe, expect, it } from "vitest";
import { addISOWeekYears } from "./index.js";

describe("addISOWeekYears", () => {
  it("adds the given number of ISO week-numbering years", () => {
    const result = addISOWeekYears(new Date(2010, 6 /* Jul */, 2), 5);
    expect(result).toEqual(new Date(2015, 5 /* Jun */, 26));
  });

  it("accepts a timestamp", () => {
    const result = addISOWeekYears(
      new Date(2014, 8 /* Sep */, 1).getTime(),
      12,
    );
    expect(result).toEqual(new Date(2026, 7 /* Aug */, 31));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    addISOWeekYears(date, 12);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(10, 6 /* Jul */, 2);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(15, 5 /* Jun */, 26);
    expectedResult.setHours(0, 0, 0, 0);
    const result = addISOWeekYears(initialDate, 5);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addISOWeekYears(new Date(NaN), 5);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addISOWeekYears(new Date(2010, 6 /* Jul */, 2), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
