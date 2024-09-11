import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { getDstTransitions } from "../../test/dst/tzOffsetTransitions.js";
import type { ContextOptions } from "../types.js";
import { differenceInDays } from "./index.js";

describe("differenceInDays", () => {
  it("returns the number of full days between the given dates", () => {
    const result = differenceInDays(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(366);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInDays(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0),
    );
    expect(result).toBe(-366);
  });

  it("accepts timestamps", () => {
    const result = differenceInDays(
      new Date(2014, 8 /* Sep */, 5, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime(),
    );
    expect(result).toBe(1);
  });

  describe("edge cases", () => {
    it("the difference is less than a day, but the given dates are in different calendar days", () => {
      const result = differenceInDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 4, 23, 59),
      );
      expect(result).toBe(0);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInDays(
        new Date(2014, 8 /* Sep */, 4, 23, 59),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("the time values of the given dates are the same", () => {
      const result = differenceInDays(
        new Date(2014, 8 /* Sep */, 6, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    const dstTransitions = getDstTransitions(2017);
    const dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip;
    const tz =
      Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
    dstOnly(
      `works across DST start & end in local timezone: ${tz || "(unknown)"}`,
      () => {
        const { start, end } = dstTransitions;
        const HOUR = 1000 * 60 * 60;
        const MINUTE = 1000 * 60;
        function sameTime(t1: Date, t2: Date): boolean {
          return (
            t1.getHours() === t2.getHours() &&
            t1.getMinutes() === t2.getMinutes() &&
            t1.getSeconds() === t2.getSeconds() &&
            t1.getMilliseconds() === t2.getMilliseconds()
          );
        }

        expect(start).not.toBe(undefined);
        expect(end).not.toBe(undefined);

        if (start === undefined || end === undefined) {
          return;
        }

        // It's usually 1 hour, but for some timezones, e.g. Australia/Lord_Howe, it is 30 minutes
        const dstOffset =
          (end.getTimezoneOffset() - start.getTimezoneOffset()) * MINUTE;

        // TEST DST START (SPRING)

        // anchor to one hour before the boundary
        {
          const a = new Date(start.getTime() - HOUR); // 1 hour before DST
          const b = new Date(a.getTime() + 24 * HOUR - dstOffset); // 1 day later, same local time
          const c = new Date(a.getTime() + 48 * HOUR - dstOffset); // 2 days later, same local time

          expect(sameTime(a, b)).toBe(true);
          expect(sameTime(a, c)).toBe(true);
          expect(sameTime(b, c)).toBe(true);
          expect(differenceInDays(c, b)).toBe(1); // normal 24-hour day
          expect(differenceInDays(b, a)).toBe(1); // 23 hours -> 1 day
          expect(differenceInDays(c, a)).toBe(2); // 47 hours -> 2 days
        }
        // anchor exactly, the boundary
        {
          const a = start; // exactly when DST starts
          const b = new Date(a.getTime() + 24 * HOUR); // 1 day later, same local time
          const c = new Date(a.getTime() + 48 * HOUR); // 2 days later, same local time

          expect(sameTime(a, b)).toBe(true);
          expect(sameTime(a, c)).toBe(true);
          expect(sameTime(b, c)).toBe(true);
          expect(differenceInDays(c, b)).toBe(1); // normal 24-hour day
          expect(differenceInDays(b, a)).toBe(1); // normal 24-hour day
          expect(differenceInDays(c, a)).toBe(2); // 2 normal 24-hour days
        }

        // TEST DST END (FALL)

        // make sure that diffs across a "fall back" DST boundary won't report a full day
        // until 25 hours have elapsed.
        {
          const a = new Date(end.getTime() - HOUR / 2); // 1 hour before Standard Time starts
          const b = new Date(a.getTime() + 24 * HOUR + dstOffset - 15 * MINUTE); // 1 day later, 15 mins earlier local time
          const c = new Date(a.getTime() + 48 * HOUR + dstOffset - 15 * MINUTE); // 2 days later, 15 mins earlier local time

          expect(differenceInDays(c, b)).toBe(1); // normal 24-hour day
          expect(differenceInDays(b, a)).toBe(0); // 24.75 hours -> 0 full days (because hour lost to DST)
          expect(differenceInDays(c, a)).toBe(1); // 48.75 hours -> 1 full day (because hour lost to DST)
        }
        // anchor to one hour before the boundary
        {
          const a = new Date(end.getTime() - HOUR); // 1 hour before Standard Time start
          const b = new Date(a.getTime() + 24 * HOUR + dstOffset); // 1 day later, same local time
          const c = new Date(a.getTime() + 48 * HOUR + dstOffset); // 2 days later, same local time

          expect(sameTime(a, b)).toBe(true);
          expect(sameTime(a, c)).toBe(true);
          expect(sameTime(b, c)).toBe(true);
          expect(differenceInDays(c, b)).toBe(1); // normal 24-hour day
          expect(differenceInDays(b, a)).toBe(1); // 25 hours -> 1 day
          expect(differenceInDays(c, a)).toBe(2); // 49 hours -> 2 days
        }
        // anchor to one hour after the boundary
        {
          const a = new Date(end.getTime() + HOUR); // 1 hour after Standard Time start
          const b = new Date(a.getTime() + 24 * HOUR); // 1 day later, same local time
          const c = new Date(a.getTime() + 48 * HOUR); // 2 days later, same local time

          expect(sameTime(a, b)).toBe(true);
          expect(sameTime(a, c)).toBe(true);
          expect(sameTime(b, c)).toBe(true);
          expect(differenceInDays(c, b)).toBe(1); // normal 24-hour day
          expect(differenceInDays(b, a)).toBe(1); // normal 24-hour day
          expect(differenceInDays(c, a)).toBe(2); // 2 normal 24-hour days
        }
        // anchor exactly at the boundary
        {
          const a = end; // exactly when Standard Time starts
          const b = new Date(a.getTime() + 24 * HOUR); // 1 day later, same local time
          const c = new Date(a.getTime() + 48 * HOUR); // 2 days later, same local time
          expect(differenceInDays(b, a)).toBe(1); // normal 24-hour day
          expect(differenceInDays(c, a)).toBe(2); // 2 normal 24-hour days
        }
      },
    );

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInDays(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInDays(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInDays(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2025, 0, 1, "Asia/Singapore");
    const dateRight = new TZDate(2024, 0, 1, "America/New_York");
    expect(differenceInDays(dateLeft, dateRight)).toBe(365);
    expect(differenceInDays(dateRight, dateLeft)).toBe(-365);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInDays(arg1, arg2);
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        differenceInDays("2024-01-08T00:00:00Z", "2024-01-01T00:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(7);
      expect(
        differenceInDays("2024-01-08T00:00:00Z", "2024-01-01T00:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(7);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateType | number | string,
        arg2: DateType | number | string,
        options?: ContextOptions<ResultDate>,
      ) {
        differenceInDays(arg1, arg2, { in: options?.in });
      }
    });
  });
});
