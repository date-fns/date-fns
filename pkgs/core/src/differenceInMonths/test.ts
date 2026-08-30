import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { getDstTransitions } from "../_lib/test/tzOffsetTransitions.ts";
import type { ContextOptions, DateArg } from "../types.ts";
import { differenceInMonths } from "./index.ts";

describe("differenceInMonths", () => {
  it("returns the number of full months between the given dates", () => {
    const result = differenceInMonths(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(12);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInMonths(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0),
    );
    expect(result).toBe(-12);
  });

  it("accepts timestamps", () => {
    const result = differenceInMonths(
      new Date(2014, 7 /* Aug */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(49);
  });

  describe("edge cases", () => {
    it("it returns diff of 1 month between Feb 28 2021 and Jan 30 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 1 /* Feb */, 28),
        new Date(2021, 0 /* Jan */, 30),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 1 month between Feb 28 2021 and Jan 31 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 1 /* Feb */, 28),
        new Date(2021, 0 /* Jan */, 31),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 1 month between Nov, 30 2021 and Oct, 31 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 10 /* Nov */, 30),
        new Date(2021, 9 /* Oct */, 31),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 1 month between Oct, 31 2021 and Sep, 30 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 9 /* Oct */, 31),
        new Date(2021, 8 /* Sep */, 30),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 6 month between Oct, 31 2021 and Apr, 30 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 9 /* Oct */, 31),
        new Date(2021, 3 /* Apr */, 30),
      );
      expect(result).toBe(6);
    });

    it("it returns diff of -1 month between Sep, 30 2021 and Oct, 31 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 8 /* Sep */, 30),
        new Date(2021, 9 /* Oct */, 31),
      );
      expect(result).toBe(-1);
    });

    it("the difference is less than a month, but the given dates are in different calendar months", () => {
      const result = differenceInMonths(
        new Date(2014, 7 /* Aug */, 1),
        new Date(2014, 6 /* Jul */, 31),
      );
      expect(result).toBe(0);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInMonths(
        new Date(2014, 6 /* Jul */, 31),
        new Date(2014, 7 /* Aug */, 1),
      );
      expect(result).toBe(0);
    });

    it("the days of months of the given dates are the same", () => {
      const result = differenceInMonths(
        new Date(2014, 8 /* Sep */, 6),
        new Date(2014, 7 /* Aug */, 6),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInMonths(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInMonths(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  describe("DST", () => {
    // https://github.com/date-fns/date-fns/issues/1758
    // Regression test: a period that is one DST-gap-sized interval short of a
    // full month must not be miscounted as a full month just because the
    // internal month-shifting arithmetic happens to land on a local time
    // that doesn't exist (a spring-forward gap, e.g. 2:00-2:59 AM on the day
    // clocks jump to 3:00 AM).
    for (const year of [2020, 2021, 2022, 2023, 2024]) {
      const dstTransitions = getDstTransitions(year);
      const { start } = dstTransitions;
      const dstOnly = start ? it : it.skip;
      const tz =
        Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.TZ;

      dstOnly(
        `does not count a month across a DST spring-forward gap (${year}): ${tz || "(unknown)"}`,
        () => {
          if (!start) return;

          const gapMinutes =
            new Date(start.getTime() - 1).getTimezoneOffset() -
            start.getTimezoneOffset();
          const gapMinutesTotal =
            start.getHours() * 60 + start.getMinutes() - gapMinutes;
          const gapHour = ((Math.floor(gapMinutesTotal / 60) % 24) + 24) % 24;
          const gapMinute = ((gapMinutesTotal % 60) + 60) % 60;

          // A perfectly ordinary time one month after the transition, at
          // the wall-clock reading that falls inside the gap back in the
          // transition month.
          const laterDate = new Date(
            start.getFullYear(),
            start.getMonth() + 1,
            start.getDate(),
            gapHour,
            gapMinute,
          );
          // Skip years/zones where the transition day doesn't exist in the
          // following month (e.g. day 31 in a 30-day month) - not what this
          // test is checking.
          if (laterDate.getMonth() !== (start.getMonth() + 1) % 12) return;

          const earlierDate = new Date(
            start.getFullYear(),
            start.getMonth(),
            start.getDate(),
            start.getHours(),
            start.getMinutes(),
          );

          expect(differenceInMonths(laterDate, earlierDate)).toBe(0);
        },
      );
    }
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInMonths(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInMonths(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if both dates are `Invalid Date`", () => {
    const result = differenceInMonths(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2025, 0, 1, "Asia/Singapore");
    const dateRight = new TZDate(2024, 0, 1, "America/New_York");
    expect(differenceInMonths(dateLeft, dateRight)).toBe(11);
    expect(differenceInMonths(dateRight, dateLeft)).toBe(-11);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInMonths(arg1, arg2);
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        differenceInMonths("2024-03-01T00:00:00Z", "2024-01-01T05:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(1);
      expect(
        differenceInMonths("2024-03-01T00:00:00Z", "2024-01-01T00:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(2);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ContextDate extends Date>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ContextDate>,
      ) {
        differenceInMonths(arg1, arg2, { in: options?.in });
      }
    });
  });
});
