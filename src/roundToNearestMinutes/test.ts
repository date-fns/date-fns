/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import {
  roundToNearestMinutes,
  type RoundToNearestMinutesOptions,
} from "./index.js";

describe("roundToNearestMinutes", () => {
  it("rounds given date to the nearest minute by default", () => {
    // low
    assert.deepStrictEqual(
      roundToNearestMinutes(makeDate(15, 10)),
      makeDate(15),
    );

    // mid-point
    assert.deepStrictEqual(
      roundToNearestMinutes(makeDate(15, 30)),
      makeDate(16),
    );

    // high
    assert.deepStrictEqual(
      roundToNearestMinutes(makeDate(15, 59)),
      makeDate(16),
    );
  });

  it("rounds to the closest x minutes if nearestTo is provided", () => {
    const options: RoundToNearestMinutesOptions = { nearestTo: 4 };

    // low
    assert.deepStrictEqual(
      roundToNearestMinutes(makeDate(9, 59), options),
      makeDate(8),
    );

    // mid-point
    assert.deepStrictEqual(
      roundToNearestMinutes(makeDate(10), options),
      makeDate(12),
    );

    // high
    assert.deepStrictEqual(
      roundToNearestMinutes(makeDate(10, 30), options),
      makeDate(12),
    );
  });

  describe("roundingMethod", () => {
    it("trunc, nearestTo === 1 (default)", () => {
      const options: RoundToNearestMinutesOptions = { roundingMethod: "trunc" };

      // low
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(15, 10), options),
        makeDate(15),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(15, 30), options),
        makeDate(15),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(15, 59), options),
        makeDate(15),
      );
    });

    it("trunc, nearestTo === 4", () => {
      const options: RoundToNearestMinutesOptions = {
        roundingMethod: "trunc",
        nearestTo: 4,
      };

      // low
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(9, 59), options),
        makeDate(8),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(10), options),
        makeDate(8),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(10, 30), options),
        makeDate(8),
      );
    });

    it("floor, nearestTo === 1 (default)", () => {
      const options: RoundToNearestMinutesOptions = { roundingMethod: "floor" };

      // low
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(15, 10), options),
        makeDate(15),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(15, 30), options),
        makeDate(15),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(15, 59), options),
        makeDate(15),
      );
    });

    it("floor, nearestTo === 4", () => {
      const options: RoundToNearestMinutesOptions = {
        roundingMethod: "floor",
        nearestTo: 4,
      };

      // low
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(9, 59), options),
        makeDate(8),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(10), options),
        makeDate(8),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(10, 30), options),
        makeDate(8),
      );
    });

    it("ceil, nearestTo === 1 (default)", () => {
      const options: RoundToNearestMinutesOptions = { roundingMethod: "ceil" };

      // low
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(15, 10), options),
        makeDate(16),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(15, 30), options),
        makeDate(16),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(15, 59), options),
        makeDate(16),
      );
    });

    it("ceil, nearestTo === 4", () => {
      const options: RoundToNearestMinutesOptions = {
        roundingMethod: "ceil",
        nearestTo: 4,
      };

      // low
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(9, 59), options),
        makeDate(12),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(10), options),
        makeDate(12),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(10, 30), options),
        makeDate(12),
      );
    });

    it("round, nearestTo === 1 (default)", () => {
      const options: RoundToNearestMinutesOptions = { roundingMethod: "round" };

      // low
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(15, 10), options),
        makeDate(15),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(15, 30), options),
        makeDate(16),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(15, 59), options),
        makeDate(16),
      );
    });

    it("round, nearestTo === 4", () => {
      const options: RoundToNearestMinutesOptions = {
        roundingMethod: "round",
        nearestTo: 4,
      };

      // low
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(9, 59), options),
        makeDate(8),
      );

      // mid-point
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(10), options),
        makeDate(12),
      );

      // high
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(10, 30), options),
        makeDate(12),
      );
    });
  });

  describe("edge cases", () => {
    it("rounds up to the next day", () => {
      assert.deepStrictEqual(
        roundToNearestMinutes(new Date(2014, 6, 10, 23, 59, 59)),
        new Date(2014, 6, 11),
      );
    });

    it("ceils correctly with 0 seconds and 1 millisecond", () => {
      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(15, 0, 0), { roundingMethod: "ceil" }),
        makeDate(15),
      );

      assert.deepStrictEqual(
        roundToNearestMinutes(makeDate(15, 0, 1), { roundingMethod: "ceil" }),
        makeDate(16),
      );
    });
  });

  describe("examples", () => {
    it("example 1", () => {
      const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34));
      assert.deepStrictEqual(result, new Date(2014, 6, 10, 12, 13));
    });

    it("example 2", () => {
      const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), {
        nearestTo: 15,
      });
      assert.deepStrictEqual(result, new Date(2014, 6, 10, 12, 15));
    });

    it("example 3", () => {
      const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), {
        roundingMethod: "floor",
      });
      assert.deepStrictEqual(result, new Date(2014, 6, 10, 12, 12));
    });

    it("example 4", () => {
      const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), {
        roundingMethod: "ceil",
        nearestTo: 30,
      });
      assert.deepStrictEqual(result, new Date(2014, 6, 10, 12, 30));
    });
  });

  it("accepts a timestamp", () => {
    const result = roundToNearestMinutes(makeDate(13, 16).getTime());
    assert.deepStrictEqual(result, makeDate(13));
  });

  it("does not mutate the original date", () => {
    const date = makeDate(10, 10);
    roundToNearestMinutes(date);
    assert.deepStrictEqual(date, makeDate(10, 10));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = roundToNearestMinutes(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});

function makeDate(
  minutes: number,
  seconds: number = 0,
  milliseconds: number = 0,
) {
  // helper to make tests more readable since we mostly care about minutes and seconds
  return new Date(2014, 6 /* Jul */, 10, 12, minutes, seconds, milliseconds);
}
