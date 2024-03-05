/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { startOfISOWeek } from "./index.js";

describe("startOfISOWeek", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of an ISO week", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfISOWeek(date);
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0).getTime();
    const result = startOfISOWeek(date);
    assert.deepStrictEqual(result, new Date(2014, 1 /* Feb */, 10));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfISOWeek(date);
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfISOWeek(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
