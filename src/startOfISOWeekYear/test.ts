/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { startOfISOWeekYear } from "./index.js";

describe("startOfISOWeekYear", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of an ISO year", () => {
    const result = startOfISOWeekYear(new Date(2009, 0 /* Jan */, 1, 16, 0));
    assert.deepStrictEqual(
      result,
      new Date(2008, 11 /* Dec */, 29, 0, 0, 0, 0),
    );
  });

  it("accepts a timestamp", () => {
    const result = startOfISOWeekYear(
      new Date(2005, 0 /* Jan */, 1, 6, 0).getTime(),
    );
    assert.deepStrictEqual(
      result,
      new Date(2003, 11 /* Dec */, 29, 0, 0, 0, 0),
    );
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    startOfISOWeekYear(date);
    assert.deepStrictEqual(date, new Date(2014, 6 /* Jul */, 2));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(9, 0 /* Jan */, 1);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(8, 11 /* Dec */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = startOfISOWeekYear(initialDate);
    assert.deepStrictEqual(result, expectedResult);
  });

  it("correctly handles years in which 4 January is Sunday", () => {
    const result = startOfISOWeekYear(new Date(2009, 6 /* Jul */, 2));
    assert.deepStrictEqual(result, new Date(2008, 11 /* Dec */, 29));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfISOWeekYear(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
