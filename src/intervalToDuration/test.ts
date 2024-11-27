import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { addMonths } from "../addMonths/index.js";
import type { ContextOptions, Interval } from "../types.js";
import { intervalToDuration } from "./index.js";

describe("intervalToDuration", () => {
  it("returns correct duration for arbitrary dates", () => {
    const start = new Date(1929, 0, 15, 12, 0, 0);
    const end = new Date(1968, 3, 4, 19, 5, 0);
    const result = intervalToDuration({ start, end });

    expect(result).toEqual({
      years: 39,
      months: 2,
      days: 20,
      hours: 7,
      minutes: 5,
    });
  });

  it("returns correct duration (1 of everything)", () => {
    const start = new Date(2020, 2, 1, 12, 0, 0);
    const end = new Date(2021, 3, 2, 13, 1, 1);
    const result = intervalToDuration({ start, end });

    expect(result).toEqual({
      years: 1,
      months: 1,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
    });
  });

  it("returns duration of 0 when the dates are the same", () => {
    const start = new Date(2020, 2, 1, 12, 0, 0);
    const end = new Date(2020, 2, 1, 12, 0, 0);
    const result = intervalToDuration({ start, end });

    expect(result).toEqual({});
  });

  it("returns a negative duration if interval's start date is greater than its end date", () => {
    const interval = {
      start: new Date(2020, 3, 1),
      end: new Date(2020, 2, 1),
    };
    const result = intervalToDuration(interval);

    expect(result).toEqual({ months: -1 });
  });

  it("returns an empty object if interval's start date invalid", () => {
    const interval = {
      start: new Date(NaN),
      end: new Date(2020, 0, 1),
    };
    const result = intervalToDuration(interval);

    expect(result).toEqual({});
  });

  it("returns an empty object  if interval's end date invalid", () => {
    const interval = {
      start: new Date(2020, 0, 1),
      end: new Date(NaN),
    };
    const result = intervalToDuration(interval);

    expect(result).toEqual({});
  });

  describe("edge cases", () => {
    it("returns correct duration for dates in the end of Feb - issue 2255", () => {
      expect(
        intervalToDuration({
          start: new Date(2012, 1 /* Feb */, 28, 9, 0, 0),
          end: new Date(2012, 1 /* Feb */, 29, 10, 0, 0),
        }),
      ).toEqual({
        days: 1,
        hours: 1,
      });

      expect(
        intervalToDuration({
          start: new Date(2012, 1 /* Feb */, 29, 9, 0, 0),
          end: new Date(2012, 1 /* Feb */, 29, 10, 0, 0),
        }),
      ).toEqual({
        hours: 1,
      });

      expect(
        intervalToDuration({
          start: new Date(2012, 1 /* Feb */, 28, 9, 0, 0),
          end: new Date(2012, 1 /* Feb */, 28, 10, 0, 0),
        }),
      ).toEqual({
        hours: 1,
      });

      // Issue 2261
      expect(
        intervalToDuration({
          start: new Date(2021, 1 /* Feb */, 28, 7, 23, 7),
          end: new Date(2021, 1 /* Feb */, 28, 7, 38, 18),
        }),
      ).toEqual({
        minutes: 15,
        seconds: 11,
      });
    });

    it("returns correct duration for end of month start dates - issue 2611", () => {
      const start = new Date(2021, 7, 31);
      const end = addMonths(start, 1);

      expect(end).toEqual(new Date(2021, 8, 30));

      const duration = intervalToDuration({ start, end });
      const expectedDuration = {
        months: 1,
      };

      expect(duration).toEqual(expectedDuration);
    });

    it("returns correct duration for Feb 29 on leap year + 1 month - issue 1778", () => {
      const duration = intervalToDuration({
        start: new Date(2020, 1, 29),
        end: new Date(2020, 2, 29),
      });
      const expectedDuration = {
        months: 1,
      };

      expect(duration).toEqual(expectedDuration);
    });

    it("returns correct duration for Feb 28 to Apr 30 interval - issue 2910", () => {
      const duration = intervalToDuration({
        start: new Date(2022, 1, 28),
        end: new Date(2022, 3, 30),
      });
      const expectedDuration = {
        months: 2,
        days: 2,
      };

      expect(duration).toEqual(expectedDuration);
    });

    describe("issue 2470", () => {
      it("returns correct duration for Feb 28 to Aug 31 interval", () => {
        const duration = intervalToDuration({
          start: new Date(2021, 1, 28),
          end: new Date(2021, 7, 31),
        });
        const expectedDuration = {
          months: 6,
          days: 3,
        };

        expect(duration).toEqual(expectedDuration);
      });

      it("returns correct duration for Feb 28 to Aug 30 interval", () => {
        const duration = intervalToDuration({
          start: new Date(2021, 1, 28),
          end: new Date(2021, 7, 30),
        });
        const expectedDuration = {
          months: 6,
          days: 2,
        };

        expect(duration).toEqual(expectedDuration);
      });

      it("returns correct duration for Feb 28 to Aug 29 interval", () => {
        const duration = intervalToDuration({
          start: new Date(2021, 1, 28),
          end: new Date(2021, 7, 29),
        });
        const expectedDuration = {
          months: 6,
          days: 1,
        };

        expect(duration).toEqual(expectedDuration);
      });

      it("returns correct duration for Feb 28 to Aug 28 interval", () => {
        const duration = intervalToDuration({
          start: new Date(2021, 1, 28),
          end: new Date(2021, 7, 28),
        });
        const expectedDuration = {
          months: 6,
        };

        expect(duration).toEqual(expectedDuration);
      });

      it("returns correct duration for Feb 28 to Aug 27 interval", () => {
        // Feb 28 to July 28 is 5 months, July 28 to Aug 27 is 30 days

        const duration = intervalToDuration({
          start: new Date(2021, 1, 28),
          end: new Date(2021, 7, 27),
        });
        const expectedDuration = {
          months: 5,
          days: 30,
        };

        expect(duration).toEqual(expectedDuration);
      });

      it("returns correct duration for Apr 30 to May 31 interval", () => {
        const duration = intervalToDuration({
          start: new Date(2021, 3, 30),
          end: new Date(2021, 4, 31),
        });
        const expectedDuration = {
          months: 1,
          days: 1,
        };

        expect(duration).toEqual(expectedDuration);
      });
    });
  });

  it("normalizes the dates", () => {
    const laterDate = new TZDate(2027, 0, 1, "Asia/Singapore");
    const earlierDate = new TZDate(2024, 0, 1, "America/New_York");
    expect(intervalToDuration({ start: laterDate, end: earlierDate })).toEqual({
      days: -30,
      hours: -11,
      months: -11,
      years: -2,
    });
    expect(intervalToDuration({ start: earlierDate, end: laterDate })).toEqual({
      days: 30,
      hours: 11,
      months: 11,
      years: 2,
    });
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      intervalToDuration({ start, end });
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        intervalToDuration(
          {
            start: new Date("2023-09-03T00:00:00Z"),
            end: new Date("2024-09-03T15:00:00Z"),
          },
          { in: tz("Asia/Singapore") },
        ),
      ).toEqual({
        years: 1,
        hours: 15,
      });
      expect(
        intervalToDuration(
          {
            start: new Date("2023-09-03T00:00:00Z"),
            end: new Date("2024-09-03T15:00:00Z"),
          },
          { in: tz("America/New_York") },
        ),
      ).toEqual({
        years: 1,
        hours: 15,
      });
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: Interval<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        intervalToDuration(arg, { in: options?.in });
      }
    });
  });
});
