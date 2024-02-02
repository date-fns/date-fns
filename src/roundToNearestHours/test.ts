/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import {
  roundToNearestHours,
  type RoundToNearestHoursOptions,
} from "./index.js";

describe("roundToNearestHours", () => {
  it("rounds given date to the nearest hour by default", () => {
    // low
    assert.deepStrictEqual(roundToNearestHours(makeDate(15, 10)), makeDate(15));

    // mid-point
    assert.deepStrictEqual(roundToNearestHours(makeDate(15, 30)), makeDate(16));

    // high
    assert.deepStrictEqual(roundToNearestHours(makeDate(15, 59)), makeDate(16));
  });

  it("rounds to the closest x hours if nearestTo is provided", () => {
    const options: RoundToNearestHoursOptions = { nearestTo: 3 };

    // low
    assert.deepStrictEqual(
      roundToNearestHours(makeDate(9, 1), options),
      makeDate(9),
    );

    // mid-point
    assert.deepStrictEqual(
      roundToNearestHours(makeDate(10, 30), options),
      makeDate(12),
    );

    // high
    assert.deepStrictEqual(
      roundToNearestHours(makeDate(11, 59), options),
      makeDate(12),
    );
  });

  describe("roundingMethod", () => {
    it("trunc, nearestTo === 1 (default)", () => {
      const options: RoundToNearestHoursOptions = { roundingMethod: "trunc" };

      // low
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15, 10), options),
        makeDate(15),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15, 30), options),
        makeDate(15),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15, 59), options),
        makeDate(15),
      );
    });

    it("trunc, nearestTo === 3", () => {
      const options: RoundToNearestHoursOptions = {
        roundingMethod: "trunc",
        nearestTo: 3,
      };

      // low
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(9), options),
        makeDate(9),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(10, 30), options),
        makeDate(9),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(11, 59), options),
        makeDate(9),
      );
    });

    it("floor, nearestTo === 1 (default)", () => {
      const options: RoundToNearestHoursOptions = { roundingMethod: "floor" };

      // low
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15), options),
        makeDate(15),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15, 30), options),
        makeDate(15),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15, 59), options),
        makeDate(15),
      );
    });

    it("floor, nearestTo === 3", () => {
      const options: RoundToNearestHoursOptions = {
        roundingMethod: "floor",
        nearestTo: 3,
      };

      // low
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15), options),
        makeDate(15),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(16, 30), options),
        makeDate(15),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(17, 59), options),
        makeDate(15),
      );
    });

    it("ceil, nearestTo === 1 (default)", () => {
      const options: RoundToNearestHoursOptions = { roundingMethod: "ceil" };

      // low
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15, 1), options),
        makeDate(16),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15, 30), options),
        makeDate(16),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15, 59), options),
        makeDate(16),
      );
    });

    it("ceil, nearestTo === 3", () => {
      const options: RoundToNearestHoursOptions = {
        roundingMethod: "ceil",
        nearestTo: 3,
      };

      // low
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15, 1), options),
        makeDate(18),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(16, 30), options),
        makeDate(18),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(17, 59), options),
        makeDate(18),
      );
    });

    it("round, nearestTo === 1 (default)", () => {
      const options: RoundToNearestHoursOptions = { roundingMethod: "round" };

      // low
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15), options),
        makeDate(15),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15, 30), options),
        makeDate(16),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15, 59), options),
        makeDate(16),
      );
    });

    it("round, nearestTo === 3", () => {
      const options: RoundToNearestHoursOptions = {
        roundingMethod: "round",
        nearestTo: 3,
      };

      // low
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15), options),
        makeDate(15),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(16, 30), options),
        makeDate(18),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(17, 59), options),
        makeDate(18),
      );
    });
  });

  describe("edge cases", () => {
    it("rounds up to the next day", () => {
      assert.deepStrictEqual(
        roundToNearestHours(new Date(2014, 6, 10, 23, 59, 59, 999)),
        new Date(2014, 6, 11),
      );
    });

    it("ceils correctly with 0 seconds and 1 millisecond", () => {
      // "ceil" does not round up when exactly oclock
      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15, 0, 0, 0), { roundingMethod: "ceil" }),
        makeDate(15),
      );

      assert.deepStrictEqual(
        roundToNearestHours(makeDate(15, 0, 0, 1), { roundingMethod: "ceil" }),
        makeDate(16),
      );
    });
  });

  describe("examples", () => {
    it("example 1", () => {
      const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56));
      assert.deepStrictEqual(result, new Date(2014, 6, 10, 13));
    });

    it("example 2", () => {
      const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), {
        nearestTo: 6,
      });
      assert.deepStrictEqual(result, new Date(2014, 6, 10, 12));
    });

    it("example 3", () => {
      const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), {
        nearestTo: 8,
      });
      assert.deepStrictEqual(result, new Date(2014, 6, 10, 16));
    });

    it("example 4", () => {
      const result = roundToNearestHours(new Date(2014, 6, 10, 1, 23, 45), {
        roundingMethod: "ceil",
      });
      assert.deepStrictEqual(result, new Date(2014, 6, 10, 2));
    });

    it("example 5", () => {
      const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), {
        roundingMethod: "floor",
        nearestTo: 8,
      });
      assert.deepStrictEqual(result, new Date(2014, 6, 10, 8));
    });
  });
});

function makeDate(
  hours: number,
  minutes: number = 0,
  seconds: number = 0,
  milliseconds: number = 0,
) {
  // helper to make tests more readable since we mostly care about hours and minutes
  return new Date(2014, 6 /* Jul */, 10, hours, minutes, seconds, milliseconds);
}
