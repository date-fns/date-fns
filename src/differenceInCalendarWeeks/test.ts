import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions } from "../types.js";
import { differenceInCalendarWeeks } from "./index.js";

describe("differenceInCalendarWeeks", () => {
  it("returns the number of calendar weeks between the given dates", () => {
    const result = differenceInCalendarWeeks(
      new Date(2014, 6 /* Jul */, 8, 18, 0),
      new Date(2014, 5 /* Jun */, 29, 6, 0),
    );
    expect(result).toBe(1);
  });

  it("allows to specify which day is the first day of the week", () => {
    const result = differenceInCalendarWeeks(
      new Date(2014, 6 /* Jul */, 8, 18, 0),
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      { weekStartsOn: 1 },
    );
    expect(result).toBe(2);
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const result = differenceInCalendarWeeks(
      new Date(2014, 6 /* Jul */, 8, 18, 0),
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      {
        locale: {
          options: { weekStartsOn: 1 },
        },
      },
    );
    expect(result).toBe(2);
  });

  it("options.weekStartsOn overwrites the first day of the week specified in locale", () => {
    const result = differenceInCalendarWeeks(
      new Date(2014, 6 /* Jul */, 8, 18, 0),
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      {
        weekStartsOn: 1,
        locale: {
          options: { weekStartsOn: 0 },
        },
      },
    );
    expect(result).toBe(2);
  });

  it("returns a positive number if the time value of the second date is smaller", () => {
    const result = differenceInCalendarWeeks(
      new Date(2014, 6 /* Jul */, 8, 18, 0),
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      {
        weekStartsOn: 1,
      },
    );
    expect(result).toBe(2);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInCalendarWeeks(
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      new Date(2014, 6 /* Jul */, 8, 18, 0),
    );
    expect(result).toBe(-1);
  });

  it("accepts timestamps", () => {
    const result = differenceInCalendarWeeks(
      new Date(2014, 6 /* Jul */, 12).getTime(),
      new Date(2014, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(1);
  });

  describe("edge cases", () => {
    it("the difference is less than a week, but the given dates are in different calendar weeks", () => {
      const result = differenceInCalendarWeeks(
        new Date(2014, 6 /* Jul */, 6),
        new Date(2014, 6 /* Jul */, 5),
      );
      expect(result).toBe(1);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInCalendarWeeks(
        new Date(2014, 6 /* Jul */, 5),
        new Date(2014, 6 /* Jul */, 6),
      );
      expect(result).toBe(-1);
    });

    it("the days of weeks of the given dates are the same", () => {
      const result = differenceInCalendarWeeks(
        new Date(2014, 6 /* Jul */, 9),
        new Date(2014, 6 /* Jul */, 2),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInCalendarWeeks(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInCalendarWeeks(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });

    it("properly works with negative numbers", () => {
      const a = new Date(2014, 6 /* Jul */, 9);
      const b = new Date(2014, 6 /* Jul */, 19);
      expect(differenceInCalendarWeeks(b, a)).toBe(1);
      expect(differenceInCalendarWeeks(a, b)).toBe(-1);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInCalendarWeeks(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInCalendarWeeks(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInCalendarWeeks(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInCalendarWeeks(arg1, arg2);
    }
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2024, 6, 7, "Asia/Singapore");
    const dateRight = new TZDate(2024, 5, 30, "America/New_York");
    expect(differenceInCalendarWeeks(dateLeft, dateRight)).toBe(1);
    expect(differenceInCalendarWeeks(dateRight, dateLeft)).toBe(0);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        differenceInCalendarWeeks(
          "2024-08-18T03:00:00Z",
          "2024-08-01T00:00:00Z",
          { in: tz("America/New_York") },
        ),
      ).toBe(2);
      expect(
        differenceInCalendarWeeks(
          "2024-08-18T04:00:00Z",
          "2024-08-01T00:00:00Z",
          { in: tz("America/New_York") },
        ),
      ).toBe(3);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateType | number | string,
        arg2: DateType | number | string,
        options?: ContextOptions<ResultDate>,
      ) {
        differenceInCalendarWeeks(arg1, arg2, { in: options?.in });
      }
    });
  });
});
