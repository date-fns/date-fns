/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { startOfWeekYear } from "./index.js";

describe("startOfWeekYear", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of a week year", () => {
    const result = startOfWeekYear(new Date(2005, 6 /* Jul */, 2));
    assert.deepStrictEqual(
      result,
      new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0),
    );
  });

  it("accepts a timestamp", () => {
    const result = startOfWeekYear(
      new Date(2005, 0 /* Jan */, 1, 6, 0).getTime(),
    );
    assert.deepStrictEqual(
      result,
      new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0),
    );
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    startOfWeekYear(date);
    assert.deepStrictEqual(date, new Date(2014, 6 /* Jul */, 2));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(9, 0 /* Jan */, 1);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(8, 11 /* Dec */, 28);
    expectedResult.setHours(0, 0, 0, 0);
    const result = startOfWeekYear(initialDate);
    assert.deepStrictEqual(result, expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfWeekYear(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
    const date = new Date(2005, 6 /* Jul */, 2);
    const result = startOfWeekYear(date, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    });
    assert.deepStrictEqual(result, new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0));
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = new Date(2005, 6 /* Jul */, 2);
    const result = startOfWeekYear(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    });
    assert.deepStrictEqual(result, new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0));
  });
});
