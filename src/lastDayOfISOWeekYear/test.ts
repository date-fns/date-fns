import { describe, expect, it } from "vitest";
import { lastDayOfISOWeekYear } from "./index.js";

describe("lastDayOfISOWeekYear", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the last day of an ISO year", () => {
    const result = lastDayOfISOWeekYear(new Date(2009, 0 /* Jan */, 1, 16, 0));
    expect(result).toEqual(new Date(2010, 0 /* Jan */, 3));
  });

  it("accepts a timestamp", () => {
    const result = lastDayOfISOWeekYear(
      new Date(2005, 0 /* Jan */, 1, 6, 0).getTime(),
    );
    expect(result).toEqual(new Date(2005, 0 /* Jan */, 2));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    lastDayOfISOWeekYear(date);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 2));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(5, 0 /* Jan */, 4);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(6, 0 /* Jan */, 1);
    expectedResult.setHours(0, 0, 0, 0);
    const result = lastDayOfISOWeekYear(initialDate);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = lastDayOfISOWeekYear(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
