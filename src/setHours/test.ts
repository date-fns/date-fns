/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { setHours } from "./index.js";

describe("setHours", () => {
  it("sets the amount of hours", () => {
    const result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), 4);
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 4, 30));
  });

  it("accepts a timestamp", () => {
    const result = setHours(new Date(2014, 8 /* Sep */, 1, 11).getTime(), 5);
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 5));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1, 11);
    setHours(date, 12);
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 1, 11));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setHours(new Date(NaN), 4);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
