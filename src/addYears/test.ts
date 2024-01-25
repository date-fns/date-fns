/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { addYears } from "./index.js";

describe("addYears", () => {
  it("adds the given number of years", () => {
    const result = addYears(new Date(2014, 8 /* Sep */, 1), 5);
    assert.deepStrictEqual(result, new Date(2019, 8 /* Sep */, 1));
  });

  it("accepts a timestamp", () => {
    const result = addYears(new Date(2014, 8 /* Sep */, 1).getTime(), 12);
    assert.deepStrictEqual(result, new Date(2026, 8 /* Sep */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    addYears(date, 12);
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1));
  });

  it("handles the leap years properly", () => {
    const result = addYears(new Date(2016, 1 /* Feb */, 29), 1);
    assert.deepStrictEqual(result, new Date(2017, 1 /* Feb */, 28));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(0, 1 /* Feb */, 29);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(1, 1 /* Feb */, 28);
    expectedResult.setHours(0, 0, 0, 0);
    const result = addYears(initialDate, 1);
    assert.deepStrictEqual(result, expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addYears(new Date(NaN), 5);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addYears(new Date(2014, 8 /* Sep */, 1), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
