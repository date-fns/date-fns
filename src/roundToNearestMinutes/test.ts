/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { roundToNearestMinutes } from "./index.js";

describe("roundToNearestMinutes", () => {
  it("rounds given date to the nearest minute by default", () => {
    const result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 16, 16),
    );
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 16, 0));
  });

  it("accepts a timestamp", () => {
    const result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 13, 16).getTime(),
    );
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 13, 0));
  });

  it("rounds to the closest x minutes if nearestTo is provided", () => {
    const result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 10, 30),
      { nearestTo: 4 },
    );
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 12, 0));
  });

  it("rounds up >=30 seconds for nearestTo=1", () => {
    const result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 13, 30),
    );
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 14, 0));
  });

  it("rounds down <30 seconds for nearestTo=1", () => {
    const result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 13, 29, 999),
    );
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 13, 0));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 10, 10, 99);
    roundToNearestMinutes(date);
    assert.deepStrictEqual(
      date,
      new Date(2014, 6 /* Jul */, 10, 12, 10, 10, 99),
    );
  });

  it("rounds according to the passed mode - floor", () => {
    const result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 10, 30, 5),
      { roundingMethod: "floor" },
    );
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 11, 0));
  });

  it("rounds according to the passed mode - floor - when nearestTo is provided", () => {
    const result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 10, 30, 5),
      { nearestTo: 10, roundingMethod: "floor" },
    );
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 10, 0));
  });

  it("rounds according to the passed mode - ceil", () => {
    const result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 10, 30, 5),
      { roundingMethod: "ceil" },
    );
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 12, 0));
  });

  it("rounds according to the passed mode - ceil - when nearestTo is provided", () => {
    const result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 10, 30, 5),
      { nearestTo: 10, roundingMethod: "ceil" },
    );
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 20, 0));
  });

  it("rounds according to the passed mode - round - when nearestTo is provided", () => {
    const result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 10, 30, 5),
      { nearestTo: 10, roundingMethod: "round" },
    );
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 10, 0));
  });

  it("rounds according to the passed mode - trunc - when nearestTo is provided", () => {
    const result = roundToNearestMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 10, 30, 5),
      { nearestTo: 10, roundingMethod: "trunc" },
    );
    assert.deepStrictEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 10, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = roundToNearestMinutes(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if nearestTo is not between 1 and 30", () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 10, 30);
    // @ts-expect-error: it's just a test, bro
    assert(isNaN(+roundToNearestMinutes(date, { nearestTo: 31 })));
    // @ts-expect-error: it's just a test, bro
    assert(isNaN(+roundToNearestMinutes(date, { nearestTo: 0 })));
  });
});
