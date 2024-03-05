/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { startOfQuarter } from "./index.js";

describe("startOfQuarter", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of a quarter", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfQuarter(date);
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 1));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = startOfQuarter(date);
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfQuarter(date);
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfQuarter(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
