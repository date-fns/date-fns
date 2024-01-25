/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { setYear } from "./index.js";

describe("setYear", () => {
  it("sets the year", () => {
    const result = setYear(new Date(2014, 8 /* Sep */, 1), 2013);
    assert.deepStrictEqual(result, new Date(2013, 8 /* Sep */, 1));
  });

  it("accepts a timestamp", () => {
    const result = setYear(new Date(2014, 8 /* Sep */, 1).getTime(), 2016);
    assert.deepStrictEqual(result, new Date(2016, 8 /* Sep */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    setYear(date, 2011);
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setYear(new Date(NaN), 2013);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setYear(new Date(2014, 8 /* Sep */, 1), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
