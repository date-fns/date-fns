import { describe, expect, it } from "vitest";
import {
  roundToNearestMinutes,
  type RoundToNearestMinutesOptions,
} from "./index.js";

describe("roundToNearestMinutes", () => {
  it("rounds given date to the nearest minute by default", () => {
    // low
    expect(roundToNearestMinutes(makeDate(15, 10))).toEqual(makeDate(15));

    // mid-point
    expect(roundToNearestMinutes(makeDate(15, 30))).toEqual(makeDate(16));

    // high
    expect(roundToNearestMinutes(makeDate(15, 59))).toEqual(makeDate(16));
  });

  it("rounds to the closest x minutes if nearestTo is provided", () => {
    const options: RoundToNearestMinutesOptions = { nearestTo: 4 };

    // low
    expect(roundToNearestMinutes(makeDate(9, 59), options)).toEqual(makeDate(8));

    // mid-point
    expect(roundToNearestMinutes(makeDate(10), options)).toEqual(makeDate(12));

    // high
    expect(roundToNearestMinutes(makeDate(10, 30), options)).toEqual(makeDate(12));
  });

  describe("roundingMethod", () => {
    it("trunc, nearestTo === 1 (default)", () => {
      const options: RoundToNearestMinutesOptions = { roundingMethod: "trunc" };

      // low
      expect(roundToNearestMinutes(makeDate(15, 10), options)).toEqual(makeDate(15));

      // mid-point
      expect(roundToNearestMinutes(makeDate(15, 30), options)).toEqual(makeDate(15));

      // high
      expect(roundToNearestMinutes(makeDate(15, 59), options)).toEqual(makeDate(15));
    });

    it("trunc, nearestTo === 4", () => {
      const options: RoundToNearestMinutesOptions = {
        roundingMethod: "trunc",
        nearestTo: 4,
      };

      // low
      expect(roundToNearestMinutes(makeDate(9, 59), options)).toEqual(makeDate(8));

      // mid-point
      expect(roundToNearestMinutes(makeDate(10), options)).toEqual(makeDate(8));

      // high
      expect(roundToNearestMinutes(makeDate(10, 30), options)).toEqual(makeDate(8));
    });

    it("floor, nearestTo === 1 (default)", () => {
      const options: RoundToNearestMinutesOptions = { roundingMethod: "floor" };

      // low
      expect(roundToNearestMinutes(makeDate(15, 10), options)).toEqual(makeDate(15));

      // mid-point
      expect(roundToNearestMinutes(makeDate(15, 30), options)).toEqual(makeDate(15));

      // high
      expect(roundToNearestMinutes(makeDate(15, 59), options)).toEqual(makeDate(15));
    });

    it("floor, nearestTo === 4", () => {
      const options: RoundToNearestMinutesOptions = {
        roundingMethod: "floor",
        nearestTo: 4,
      };

      // low
      expect(roundToNearestMinutes(makeDate(9, 59), options)).toEqual(makeDate(8));

      // mid-point
      expect(roundToNearestMinutes(makeDate(10), options)).toEqual(makeDate(8));

      // high
      expect(roundToNearestMinutes(makeDate(10, 30), options)).toEqual(makeDate(8));
    });

    it("ceil, nearestTo === 1 (default)", () => {
      const options: RoundToNearestMinutesOptions = { roundingMethod: "ceil" };

      // low
      expect(roundToNearestMinutes(makeDate(15, 10), options)).toEqual(makeDate(16));

      // mid-point
      expect(roundToNearestMinutes(makeDate(15, 30), options)).toEqual(makeDate(16));

      // high
      expect(roundToNearestMinutes(makeDate(15, 59), options)).toEqual(makeDate(16));
    });

    it("ceil, nearestTo === 4", () => {
      const options: RoundToNearestMinutesOptions = {
        roundingMethod: "ceil",
        nearestTo: 4,
      };

      // low
      expect(roundToNearestMinutes(makeDate(9, 59), options)).toEqual(makeDate(12));

      // mid-point
      expect(roundToNearestMinutes(makeDate(10), options)).toEqual(makeDate(12));

      // high
      expect(roundToNearestMinutes(makeDate(10, 30), options)).toEqual(makeDate(12));
    });

    it("round, nearestTo === 1 (default)", () => {
      const options: RoundToNearestMinutesOptions = { roundingMethod: "round" };

      // low
      expect(roundToNearestMinutes(makeDate(15, 10), options)).toEqual(makeDate(15));

      // mid-point
      expect(roundToNearestMinutes(makeDate(15, 30), options)).toEqual(makeDate(16));

      // high
      expect(roundToNearestMinutes(makeDate(15, 59), options)).toEqual(makeDate(16));
    });

    it("round, nearestTo === 4", () => {
      const options: RoundToNearestMinutesOptions = {
        roundingMethod: "round",
        nearestTo: 4,
      };

      // low
      expect(roundToNearestMinutes(makeDate(9, 59), options)).toEqual(makeDate(8));

      // mid-point
      expect(roundToNearestMinutes(makeDate(10), options)).toEqual(makeDate(12));

      // high
      expect(roundToNearestMinutes(makeDate(10, 30), options)).toEqual(makeDate(12));
    });
  });

  describe("edge cases", () => {
    it("rounds up to the next day", () => {
      expect(roundToNearestMinutes(new Date(2014, 6, 10, 23, 59, 59))).toEqual(new Date(2014, 6, 11));
    });

    it("ceils correctly with 0 seconds and 1 millisecond", () => {
      expect(roundToNearestMinutes(makeDate(15, 0, 0), { roundingMethod: "ceil" })).toEqual(makeDate(15));

      expect(roundToNearestMinutes(makeDate(15, 0, 1), { roundingMethod: "ceil" })).toEqual(makeDate(16));
    });
  });

  describe("examples", () => {
    it("example 1", () => {
      const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34));
      expect(result).toEqual(new Date(2014, 6, 10, 12, 13));
    });

    it("example 2", () => {
      const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), {
        nearestTo: 15,
      });
      expect(result).toEqual(new Date(2014, 6, 10, 12, 15));
    });

    it("example 3", () => {
      const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), {
        roundingMethod: "floor",
      });
      expect(result).toEqual(new Date(2014, 6, 10, 12, 12));
    });

    it("example 4", () => {
      const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), {
        roundingMethod: "ceil",
        nearestTo: 30,
      });
      expect(result).toEqual(new Date(2014, 6, 10, 12, 30));
    });
  });

  it("accepts a timestamp", () => {
    const result = roundToNearestMinutes(makeDate(13, 16).getTime());
    expect(result).toEqual(makeDate(13));
  });

  it("does not mutate the original date", () => {
    const date = makeDate(10, 10);
    roundToNearestMinutes(date);
    expect(date).toEqual(makeDate(10, 10));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = roundToNearestMinutes(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
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
