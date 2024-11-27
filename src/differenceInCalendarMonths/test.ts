import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions } from "../types.js";
import { differenceInCalendarMonths } from "./index.js";

describe("differenceInCalendarMonths", () => {
  it("returns the number of calendar months between the given dates", () => {
    const result = differenceInCalendarMonths(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(12);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInCalendarMonths(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0),
    );
    expect(result).toBe(-12);
  });

  it("accepts timestamps", () => {
    const result = differenceInCalendarMonths(
      new Date(2014, 7 /* Aug */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(49);
  });

  describe("edge cases", () => {
    it("returns 1 when dates are in different months but less than a month apart", () => {
      const result = differenceInCalendarMonths(
        new Date(2014, 8 /* Sep */, 1),
        new Date(2014, 7 /* Aug */, 31),
      );
      expect(result).toBe(1);
    });

    it("returns -1 for swapped dates with a month difference", () => {
      const result = differenceInCalendarMonths(
        new Date(2014, 7 /* Aug */, 31),
        new Date(2014, 8 /* Sep */, 1),
      );
      expect(result).toBe(-1);
    });

    it("handles same day of month correctly", () => {
      const result = differenceInCalendarMonths(
        new Date(2014, 8 /* Sep */, 6),
        new Date(2014, 7 /* Aug */, 6),
      );
      expect(result).toBe(1);
    });

    it("returns 0 when given the same dates", () => {
      const result = differenceInCalendarMonths(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 for the same dates", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInCalendarMonths(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInCalendarMonths(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInCalendarMonths(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if both dates are `Invalid Date`", () => {
    const result = differenceInCalendarMonths(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2025, 0, 1, "Asia/Singapore");
    const dateRight = new TZDate(2024, 0, 1, "America/New_York");
    expect(differenceInCalendarMonths(dateLeft, dateRight)).toBe(12);
    expect(differenceInCalendarMonths(dateRight, dateLeft)).toBe(-11);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInCalendarMonths(arg1, arg2);
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        differenceInCalendarMonths(
          "2025-08-31T00:00:00Z",
          "2025-08-01T03:00:00Z",
          { in: tz("America/New_York") },
        ),
      ).toBe(1);
      expect(
        differenceInCalendarMonths(
          "2025-08-31T00:00:00Z",
          "2025-08-01T04:00:00Z",
          { in: tz("America/New_York") },
        ),
      ).toBe(0);
    });

    it("context doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateType | number | string,
        arg2: DateType | number | string,
        options?: ContextOptions<ResultDate>,
      ) {
        differenceInCalendarMonths(arg1, arg2, { in: options?.in });
      }
    });
  });
});
