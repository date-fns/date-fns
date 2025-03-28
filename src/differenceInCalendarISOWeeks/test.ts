import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { differenceInCalendarISOWeeks } from "./index.js";

describe("differenceInCalendarISOWeeks", () => {
  it("returns the number of calendar ISO weeks between the given dates", () => {
    const result = differenceInCalendarISOWeeks(
      new Date(2014, 6 /* Jul */, 8, 18, 0),
      new Date(2014, 5 /* Jun */, 29, 6, 0),
    );
    expect(result).toBe(2);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInCalendarISOWeeks(
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      new Date(2014, 6 /* Jul */, 8, 18, 0),
    );
    expect(result).toBe(-2);
  });

  it("accepts timestamps", () => {
    const result = differenceInCalendarISOWeeks(
      new Date(2014, 6 /* Jul */, 12).getTime(),
      new Date(2014, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(1);
  });

  describe("edge cases", () => {
    it("the difference is less than an ISO week, but the given dates are in different calendar ISO weeks", () => {
      const result = differenceInCalendarISOWeeks(
        new Date(2014, 6 /* Jul */, 7),
        new Date(2014, 6 /* Jul */, 6),
      );
      expect(result).toBe(1);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInCalendarISOWeeks(
        new Date(2014, 6 /* Jul */, 6),
        new Date(2014, 6 /* Jul */, 7),
      );
      expect(result).toBe(-1);
    });

    it("the days of weeks of the given dates are the same", () => {
      const result = differenceInCalendarISOWeeks(
        new Date(2014, 6 /* Jul */, 9),
        new Date(2014, 6 /* Jul */, 2),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInCalendarISOWeeks(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInCalendarISOWeeks(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });

    it("properly works with negative numbers", () => {
      const a = new Date(2014, 6 /* Jul */, 9);
      const b = new Date(2014, 6 /* Jul */, 19);
      expect(differenceInCalendarISOWeeks(b, a)).toBe(1);
      expect(differenceInCalendarISOWeeks(a, b)).toBe(-1);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInCalendarISOWeeks(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInCalendarISOWeeks(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInCalendarISOWeeks(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInCalendarISOWeeks(arg1, arg2);
    }
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2024, 8, 2, "Asia/Singapore");
    const dateRight = new TZDate(2024, 5, 3, "America/New_York");
    expect(differenceInCalendarISOWeeks(dateLeft, dateRight)).toBe(13);
    expect(differenceInCalendarISOWeeks(dateRight, dateLeft)).toBe(-12);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        differenceInCalendarISOWeeks(
          "2024-08-19T03:00:00Z",
          "2024-08-01T00:00:00Z",
          { in: tz("America/New_York") },
        ),
      ).toBe(2);
      expect(
        differenceInCalendarISOWeeks(
          "2024-08-19T04:00:00Z",
          "2024-08-01T00:00:00Z",
          { in: tz("America/New_York") },
        ),
      ).toBe(3);
    });

    it("context doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        differenceInCalendarISOWeeks(arg1, arg2, { in: options?.in });
      }
    });
  });
});
