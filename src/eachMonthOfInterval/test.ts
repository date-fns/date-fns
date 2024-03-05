/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { eachMonthOfInterval } from "./index.js";

describe("eachMonthOfInterval", () => {
  it("returns an array with starts of months from the month of the start date to the month of the end date", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */, 6),
      end: new Date(2014, 7 /* Aug */, 12),
    });
    assert.deepStrictEqual(result, [
      new Date(2014, 2 /* Mar */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 4 /* May */, 1),
      new Date(2014, 5 /* Jun */, 1),
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 7 /* Aug */, 1),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */, 6).getTime(),
      end: new Date(2014, 7 /* Aug */, 12).getTime(),
    });
    assert.deepStrictEqual(result, [
      new Date(2014, 2 /* Mar */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 4 /* May */, 1),
      new Date(2014, 5 /* Jun */, 1),
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 7 /* Aug */, 1),
    ]);
  });

  it("handles the dates that are not starts of days", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */, 6, 6, 35),
      end: new Date(2014, 7 /* Aug */, 12, 22, 15),
    });
    assert.deepStrictEqual(result, [
      new Date(2014, 2 /* Mar */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 4 /* May */, 1),
      new Date(2014, 5 /* Jun */, 1),
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 7 /* Aug */, 1),
    ]);
  });

  it("handles the dates that are not containing days", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */),
      end: new Date(2014, 7 /* Aug */),
    });
    assert.deepStrictEqual(result, [
      new Date(2014, 2 /* Mar */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 4 /* May */, 1),
      new Date(2014, 5 /* Jun */, 1),
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 7 /* Aug */, 1),
    ]);
  });

  it("returns one month if the both arguments are on the same month", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 9, 15),
    });
    assert.deepStrictEqual(result, [new Date(2014, 9 /* Oct */, 1)]);
  });

  it("returns one month if the both arguments are the same", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 14),
    });
    assert.deepStrictEqual(result, [new Date(2014, 9 /* Oct */, 1)]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 7 /* Aug */, 12),
      end: new Date(2014, 2 /* Mar */, 6),
    });
    assert.deepStrictEqual(result, [
      new Date(2014, 7 /* Aug */, 1),
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 5 /* Jun */, 1),
      new Date(2014, 4 /* May */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 2 /* Mar */, 1),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachMonthOfInterval({
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6),
    });
    assert.deepStrictEqual(result, []);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    assert.deepStrictEqual(result, []);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachMonthOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    assert.deepStrictEqual(result, []);
  });

  describe("options.step", () => {
    const interval = {
      start: new Date(2014, 2 /* Mar */, 6),
      end: new Date(2014, 7 /* Aug */, 12),
    };

    it("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
      const result = eachMonthOfInterval(interval, { step: 3 });
      assert.deepStrictEqual(result, [
        new Date(2014, 2 /* Mar */, 1),
        new Date(2014, 5 /* Jun */, 1),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachMonthOfInterval(interval, { step: -3 });
      assert.deepStrictEqual(result, [
        new Date(2014, 5 /* Jun */, 1),
        new Date(2014, 2 /* Mar */, 1),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachMonthOfInterval(
        { start: interval.end, end: interval.start },
        { step: -3 },
      );
      assert.deepStrictEqual(result, [
        new Date(2014, 2 /* Mar */, 1),
        new Date(2014, 5 /* Jun */, 1),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachMonthOfInterval(interval, { step: 0 });
      assert.deepStrictEqual(result, []);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachMonthOfInterval(interval, { step: NaN });
      assert.deepStrictEqual(result, []);
    });
  });
});
