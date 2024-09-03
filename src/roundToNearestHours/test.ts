import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import {
  roundToNearestHours,
  type RoundToNearestHoursOptions,
} from "./index.js";

describe("roundToNearestHours", () => {
  it("rounds given date to the nearest hour by default", () => {
    // low
    expect(roundToNearestHours(makeDate(15, 10))).toEqual(makeDate(15));

    // mid-point
    expect(roundToNearestHours(makeDate(15, 30))).toEqual(makeDate(16));

    // high
    expect(roundToNearestHours(makeDate(15, 59))).toEqual(makeDate(16));
  });

  it("rounds to the closest x hours if nearestTo is provided", () => {
    const options: RoundToNearestHoursOptions = { nearestTo: 3 };

    // low
    expect(roundToNearestHours(makeDate(9, 1), options)).toEqual(makeDate(9));

    // mid-point
    expect(roundToNearestHours(makeDate(10, 30), options)).toEqual(
      makeDate(12),
    );

    // high
    expect(roundToNearestHours(makeDate(11, 59), options)).toEqual(
      makeDate(12),
    );
  });

  describe("roundingMethod", () => {
    it("trunc, nearestTo === 1 (default)", () => {
      const options: RoundToNearestHoursOptions = { roundingMethod: "trunc" };

      // low
      expect(roundToNearestHours(makeDate(15, 10), options)).toEqual(
        makeDate(15),
      );

      // mid-point
      expect(roundToNearestHours(makeDate(15, 30), options)).toEqual(
        makeDate(15),
      );

      // high
      expect(roundToNearestHours(makeDate(15, 59), options)).toEqual(
        makeDate(15),
      );
    });

    it("trunc, nearestTo === 3", () => {
      const options: RoundToNearestHoursOptions = {
        roundingMethod: "trunc",
        nearestTo: 3,
      };

      // low
      expect(roundToNearestHours(makeDate(9), options)).toEqual(makeDate(9));

      // mid-point
      expect(roundToNearestHours(makeDate(10, 30), options)).toEqual(
        makeDate(9),
      );

      // high
      expect(roundToNearestHours(makeDate(11, 59), options)).toEqual(
        makeDate(9),
      );
    });

    it("floor, nearestTo === 1 (default)", () => {
      const options: RoundToNearestHoursOptions = { roundingMethod: "floor" };

      // low
      expect(roundToNearestHours(makeDate(15), options)).toEqual(makeDate(15));

      // mid-point
      expect(roundToNearestHours(makeDate(15, 30), options)).toEqual(
        makeDate(15),
      );

      // high
      expect(roundToNearestHours(makeDate(15, 59), options)).toEqual(
        makeDate(15),
      );
    });

    it("floor, nearestTo === 3", () => {
      const options: RoundToNearestHoursOptions = {
        roundingMethod: "floor",
        nearestTo: 3,
      };

      // low
      expect(roundToNearestHours(makeDate(15), options)).toEqual(makeDate(15));

      // mid-point
      expect(roundToNearestHours(makeDate(16, 30), options)).toEqual(
        makeDate(15),
      );

      // high
      expect(roundToNearestHours(makeDate(17, 59), options)).toEqual(
        makeDate(15),
      );
    });

    it("ceil, nearestTo === 1 (default)", () => {
      const options: RoundToNearestHoursOptions = { roundingMethod: "ceil" };

      // low
      expect(roundToNearestHours(makeDate(15, 1), options)).toEqual(
        makeDate(16),
      );

      // mid-point
      expect(roundToNearestHours(makeDate(15, 30), options)).toEqual(
        makeDate(16),
      );

      // high
      expect(roundToNearestHours(makeDate(15, 59), options)).toEqual(
        makeDate(16),
      );
    });

    it("ceil, nearestTo === 3", () => {
      const options: RoundToNearestHoursOptions = {
        roundingMethod: "ceil",
        nearestTo: 3,
      };

      // low
      expect(roundToNearestHours(makeDate(15, 1), options)).toEqual(
        makeDate(18),
      );

      // mid-point
      expect(roundToNearestHours(makeDate(16, 30), options)).toEqual(
        makeDate(18),
      );

      // high
      expect(roundToNearestHours(makeDate(17, 59), options)).toEqual(
        makeDate(18),
      );
    });

    it("round, nearestTo === 1 (default)", () => {
      const options: RoundToNearestHoursOptions = { roundingMethod: "round" };

      // low
      expect(roundToNearestHours(makeDate(15), options)).toEqual(makeDate(15));

      // mid-point
      expect(roundToNearestHours(makeDate(15, 30), options)).toEqual(
        makeDate(16),
      );

      // high
      expect(roundToNearestHours(makeDate(15, 59), options)).toEqual(
        makeDate(16),
      );
    });

    it("round, nearestTo === 3", () => {
      const options: RoundToNearestHoursOptions = {
        roundingMethod: "round",
        nearestTo: 3,
      };

      // low
      expect(roundToNearestHours(makeDate(15), options)).toEqual(makeDate(15));

      // mid-point
      expect(roundToNearestHours(makeDate(16, 30), options)).toEqual(
        makeDate(18),
      );

      // high
      expect(roundToNearestHours(makeDate(17, 59), options)).toEqual(
        makeDate(18),
      );
    });
  });

  describe("edge cases", () => {
    it("rounds up to the next day", () => {
      expect(
        roundToNearestHours(new Date(2014, 6, 10, 23, 59, 59, 999)),
      ).toEqual(new Date(2014, 6, 11));
    });

    it("ceils correctly with 0 seconds and 1 millisecond", () => {
      // "ceil" does not round up when exactly o'clock
      expect(
        roundToNearestHours(makeDate(15, 0, 0, 0), { roundingMethod: "ceil" }),
      ).toEqual(makeDate(15));

      expect(
        roundToNearestHours(makeDate(15, 0, 0, 1), { roundingMethod: "ceil" }),
      ).toEqual(makeDate(16));
    });
  });

  describe("examples", () => {
    it("example 1", () => {
      const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56));
      expect(result).toEqual(new Date(2014, 6, 10, 13));
    });

    it("example 2", () => {
      const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), {
        nearestTo: 6,
      });
      expect(result).toEqual(new Date(2014, 6, 10, 12));
    });

    it("example 3", () => {
      const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), {
        nearestTo: 8,
      });
      expect(result).toEqual(new Date(2014, 6, 10, 16));
    });

    it("example 4", () => {
      const result = roundToNearestHours(new Date(2014, 6, 10, 1, 23, 45), {
        roundingMethod: "ceil",
      });
      expect(result).toEqual(new Date(2014, 6, 10, 2));
    });

    it("example 5", () => {
      const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), {
        roundingMethod: "floor",
        nearestTo: 8,
      });
      expect(result).toEqual(new Date(2014, 6, 10, 8));
    });
  });

  it("resolves the date type by default", () => {
    const result = roundToNearestHours(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = roundToNearestHours(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        roundToNearestHours("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T15:00:00.000+08:00");
      expect(
        roundToNearestHours("2024-04-10T07:00:00Z", {
          in: tz("Asia/Kolkata"),
        }).toISOString(),
      ).toBe("2024-04-10T13:00:00.000+05:30");
    });

    it("resolves the context date type", () => {
      const result = roundToNearestHours("2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
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
