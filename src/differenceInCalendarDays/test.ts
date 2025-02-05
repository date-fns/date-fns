import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { getDstTransitions } from "../../test/dst/tzOffsetTransitions.js";
import { differenceInCalendarDays } from "./index.js";

describe("differenceInCalendarDays", () => {
  it("returns the number of calendar days between the given dates", () => {
    const result = differenceInCalendarDays(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(366);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInCalendarDays(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0),
    );
    expect(result).toBe(-366);
  });

  it("accepts timestamps", () => {
    const result = differenceInCalendarDays(
      new Date(2014, 8 /* Sep */, 5, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime(),
    );
    expect(result).toBe(1);
  });

  describe("edge cases", () => {
    it("the difference is less than a day, but the given dates are in different calendar days", () => {
      const result = differenceInCalendarDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 4, 23, 59),
      );
      expect(result).toBe(1);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInCalendarDays(
        new Date(2014, 8 /* Sep */, 4, 23, 59),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(-1);
    });

    it("the time values of the given the given dates are the same", () => {
      const result = differenceInCalendarDays(
        new Date(2014, 8 /* Sep */, 6, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(1);
    });

    it("the given the given dates are the same", () => {
      const result = differenceInCalendarDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInCalendarDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });

    it("properly works with negative numbers", () => {
      const a = new Date(2014, 6 /* Jul */, 1);
      const b = new Date(2014, 6 /* Jul */, 2, 1);

      expect(differenceInCalendarDays(b, a)).toBe(1);
      expect(differenceInCalendarDays(a, b)).toBe(-1);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInCalendarDays(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInCalendarDays(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInCalendarDays(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  // These tests were copy-pasted almost unchanged from DST tests for
  // `differenceInDays`
  const dstTransitions = getDstTransitions(2017);
  const dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip;
  const tzName =
    Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
  dstOnly(
    `works across DST start & end in local timezone: ${tzName || "(unknown)"}`,
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
        expect(differenceInCalendarDays(c, b)).toBe(1); // normal 24-hour day
        expect(differenceInCalendarDays(b, a)).toBe(1); // 23 hours -> 1 day
        expect(differenceInCalendarDays(c, a)).toBe(2); // 47 hours -> 2 days
      }
      // anchor exactly at the boundary
      {
        const a = start; // exactly when DST starts
        const b = new Date(a.getTime() + 24 * HOUR); // 1 day later, same local time
        const c = new Date(a.getTime() + 48 * HOUR); // 2 days later, same local time

        expect(sameTime(a, b)).toBe(true);
        expect(sameTime(a, c)).toBe(true);
        expect(sameTime(b, c)).toBe(true);
        expect(differenceInCalendarDays(c, b)).toBe(1); // normal 24-hour day
        expect(differenceInCalendarDays(b, a)).toBe(1); // normal 24-hour day
        expect(differenceInCalendarDays(c, a)).toBe(2); // 2 normal 24-hour days
      }

      // TEST DST END (FALL)

      // make sure that diffs across a "fall back" DST boundary won't report a full day
      // until 25 hours have elapsed.
      {
        const a = new Date(end.getTime() - HOUR / 2); // 1 hour before Standard Time starts
        const b = new Date(a.getTime() + 24 * HOUR + dstOffset - 15 * MINUTE); // 1 day later, 15 mins earlier local time
        const c = new Date(a.getTime() + 48 * HOUR + dstOffset - 15 * MINUTE); // 2 days later, 15 mins earlier local time

        expect(differenceInCalendarDays(c, b)).toBe(1); // normal 24-hour day
        expect(differenceInCalendarDays(b, a)).toBe(1); // 24.75 hours but 1 calendar days
        expect(differenceInCalendarDays(c, a)).toBe(2); // 49.75 hours but 2 calendar days
      }
      // anchor to one hour before the boundary
      {
        const a = new Date(end.getTime() - HOUR); // 1 hour before Standard Time starts
        const b = new Date(a.getTime() + 24 * HOUR + dstOffset); // 1 day later, same local time
        const c = new Date(a.getTime() + 48 * HOUR + dstOffset); // 2 days later, same local time

        expect(sameTime(a, b)).toBe(true);
        expect(sameTime(a, c)).toBe(true);
        expect(sameTime(b, c)).toBe(true);
        expect(differenceInCalendarDays(c, b)).toBe(1); // normal 24-hour day
        expect(differenceInCalendarDays(b, a)).toBe(1); // 25 hours -> 1 day
        expect(differenceInCalendarDays(c, a)).toBe(2); // 49 hours -> 2 days
      }
      // anchor to one hour after the boundary
      {
        const a = new Date(end.getTime() + HOUR); // 1 hour after Standard Time starts
        const b = new Date(a.getTime() + 24 * HOUR); // 1 day later, same local time
        const c = new Date(a.getTime() + 48 * HOUR); // 2 days later, same local time

        expect(sameTime(a, b)).toBe(true);
        expect(sameTime(a, c)).toBe(true);
        expect(sameTime(b, c)).toBe(true);
        expect(differenceInCalendarDays(c, b)).toBe(1); // normal 24-hour day
        expect(differenceInCalendarDays(b, a)).toBe(1); // normal 24-hour day
        expect(differenceInCalendarDays(c, a)).toBe(2); // 2 normal 24-hour days
      }
      // anchor exactly at the boundary
      {
        const a = end; // exactly when Standard Time starts
        const b = new Date(a.getTime() + 24 * HOUR); // 1 day later, same local time
        const c = new Date(a.getTime() + 48 * HOUR); // 2 days later, same local time
        expect(differenceInCalendarDays(b, a)).toBe(1); // normal 24-hour day
        expect(differenceInCalendarDays(c, a)).toBe(2); // 2 normal 24-hour days
      }
    },
  );

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2025, 0, 1, "Asia/Singapore");
    const dateRight = new TZDate(2024, 0, 1, "America/New_York");
    expect(differenceInCalendarDays(dateLeft, dateRight)).toBe(366);
    expect(differenceInCalendarDays(dateRight, dateLeft)).toBe(-365);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInCalendarDays(arg1, arg2);
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        differenceInCalendarDays(
          new Date("2014-12-12T00:00:00Z"),
          new Date("2014-12-02T04:00:00Z"),
          { in: tz("Asia/Singapore") },
        ),
      ).toBe(10);
      expect(
        differenceInCalendarDays(
          new Date("2014-12-12T00:00:00Z"),
          new Date("2014-12-02T05:00:00Z"),
          { in: tz("Asia/Singapore") },
        ),
      ).toBe(10);
      expect(
        differenceInCalendarDays(
          new Date("2014-12-12T00:00:00Z"),
          new Date("2014-12-02T04:00:00Z"),
          { in: tz("America/New_York") },
        ),
      ).toBe(10);
      expect(
        differenceInCalendarDays(
          new Date("2014-12-12T00:00:00Z"),
          new Date("2014-12-02T05:00:00Z"),
          { in: tz("America/New_York") },
        ),
      ).toBe(9);
    });
  });

  describe("edge cases", () => {
    it("works consistently with invalid arguments", () => {
      expect(differenceInCalendarDays(NaN, Date.now())).toBe(NaN);
      expect(
        differenceInCalendarDays(NaN, Date.now(), {
          in: tz("America/New_York"),
        }),
      ).toBe(NaN);
    });
  });
});
