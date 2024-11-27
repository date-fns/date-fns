import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { differenceInCalendarYears } from "./index.js";

describe("differenceInCalendarYears", () => {
  it("returns the number of calendar years between the given dates", () => {
    const result = differenceInCalendarYears(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(1);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInCalendarYears(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0),
    );
    expect(result).toBe(-1);
  });

  it("accepts timestamps", () => {
    const result = differenceInCalendarYears(
      new Date(2014, 6 /* Jul */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(4);
  });

  describe("edge cases", () => {
    it("the difference is less than a year, but the given dates are in different calendar years", () => {
      const result = differenceInCalendarYears(
        new Date(2015, 0 /* Jan */, 1),
        new Date(2014, 11 /* Dec */, 31),
      );
      expect(result).toBe(1);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInCalendarYears(
        new Date(2014, 11 /* Dec */, 31),
        new Date(2015, 0 /* Jan */, 1),
      );
      expect(result).toBe(-1);
    });

    it("the days and months of the given dates are the same", () => {
      const result = differenceInCalendarYears(
        new Date(2014, 8 /* Sep */, 5),
        new Date(2012, 8 /* Sep */, 5),
      );
      expect(result).toBe(2);
    });

    it("the given dates are the same", () => {
      const result = differenceInCalendarYears(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInCalendarYears(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInCalendarYears(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInCalendarYears(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInCalendarYears(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2025, 0, 1, "Asia/Singapore");
    const dateRight = new TZDate(2024, 0, 1, "America/New_York");
    expect(differenceInCalendarYears(dateLeft, dateRight)).toBe(1);
    expect(differenceInCalendarYears(dateRight, dateLeft)).toBe(0);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInCalendarYears(arg1, arg2);
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        differenceInCalendarYears(
          "2026-01-01T04:00:00Z",
          "2024-01-01T00:00:00Z",
          { in: tz("America/New_York") },
        ),
      ).toBe(2);
      expect(
        differenceInCalendarYears(
          "2026-01-01T05:00:00Z",
          "2024-01-01T00:00:00Z",
          { in: tz("America/New_York") },
        ),
      ).toBe(3);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        differenceInCalendarYears(arg1, arg2, { in: options?.in });
      }
    });
  });
});
