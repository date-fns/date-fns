import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { getDstTransitions } from "../../test/dst/tzOffsetTransitions.js";
import { assertType } from "../_lib/test/index.js";
import { addMonths } from "./index.js";

describe("addMonths", () => {
  it("adds the given number of months", () => {
    const result = addMonths(new Date(2014, 8 /* Sep */, 1), 5);
    expect(result).toEqual(new Date(2015, 1 /* Feb */, 1));
  });

  it("accepts a timestamp", () => {
    const result = addMonths(new Date(2014, 8 /* Sep */, 1).getTime(), 12);
    expect(result).toEqual(new Date(2015, 8 /* Sep */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    addMonths(date, 12);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("works well if the desired month has fewer days and the provided date is in the last day of a month", () => {
    const date = new Date(2014, 11 /* Dec */, 31);
    const result = addMonths(date, 2);
    expect(result).toEqual(new Date(2015, 1 /* Feb */, 28));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(0, 0 /* Jan */, 31);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = addMonths(initialDate, 1);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addMonths(new Date(NaN), 5);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addMonths(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  const dstTransitions = getDstTransitions(2017);
  const dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip;
  const tzName =
    Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
  const HOUR = 1000 * 60 * 60;
  const override = (
    base: Date,
    year = base.getFullYear(),
    month = base.getMonth(),
    day = base.getDate(),
    hour = base.getHours(),
    minute = base.getMinutes(),
  ) => new Date(year, month, day, hour, minute);

  dstOnly(
    `works at DST-start boundary in local timezone: ${tzName || "(unknown)"}`,
    () => {
      const date = dstTransitions.start;
      const result = addMonths(date!, 2);
      expect(result).toEqual(
        override(date!, date!.getFullYear(), date!.getMonth() + 2),
      );
    },
  );

  dstOnly(
    `works at DST-start - 30 mins in local timezone: ${tzName || "(unknown)"}`,
    () => {
      const date = new Date(dstTransitions.start!.getTime() - 0.5 * HOUR);
      const result = addMonths(date, 2);
      const expected = override(date, date.getFullYear(), date.getMonth() + 2);
      expect(result).toEqual(expected);
    },
  );

  dstOnly(
    `works at DST-start - 60 mins in local timezone: ${tzName || "(unknown)"}`,
    () => {
      const date = new Date(dstTransitions.start!.getTime() - 1 * HOUR);
      const result = addMonths(date, 2);
      const expected = override(date, date.getFullYear(), date.getMonth() + 2);
      expect(result).toEqual(expected);
    },
  );

  dstOnly(
    `works at DST-end boundary in local timezone: ${tzName || "(unknown)"}`,
    () => {
      const date = dstTransitions.end;
      const result = addMonths(date!, 2);
      expect(result).toEqual(
        override(
          date!,
          date!.getFullYear() + (date!.getMonth() >= 10 ? 1 : 0),
          (date!.getMonth() + 2) % 12, // protect against wrap for Nov.
        ),
      );
    },
  );

  dstOnly(
    `works at DST-end - 30 mins in local timezone: ${tzName || "(unknown)"}`,
    () => {
      const date = new Date(dstTransitions.end!.getTime() - 0.5 * HOUR);
      const result = addMonths(date, 2);
      expect(result).toEqual(
        override(
          date,
          date.getFullYear() + (date.getMonth() >= 10 ? 1 : 0),
          (date.getMonth() + 2) % 12, // protect against wrap for Nov.
        ),
      );
    },
  );

  dstOnly(
    `works at DST-end - 60 mins in local timezone: ${tzName || "(unknown)"}`,
    () => {
      const date = new Date(dstTransitions.end!.getTime() - 1 * HOUR);
      const result = addMonths(date, 2);
      expect(result).toEqual(
        override(
          date,
          date.getFullYear() + (date.getMonth() >= 10 ? 1 : 0),
          (date.getMonth() + 2) % 12, // protect against wrap for Nov.
        ),
      );
    },
  );

  dstOnly(
    `doesn't mutate if zero increment is used: ${tzName || "(unknown)"}`,
    () => {
      const date = new Date(dstTransitions.end!);
      const result = addMonths(date, 0);
      expect(result).toEqual(date);
    },
  );

  it("resolves the date type by default", () => {
    const result = addMonths(Date.now(), 5);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = addMonths(new UTCDate(), 5);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = addMonths(date, 1, {
        in: tz("Asia/Tokyo"),
      });
      // Here we add 1 month to 1 Sep 2014 00:00 UTC (which is 1 Sep 2014 09:00 in Tokyo)
      // and we expect to get 1 Oct 2014 00:00 UTC (which is 1 Oct 2014 09:00 in Tokyo)
      expect(+result).toEqual(+new Date("2014-10-01T00:00:00Z"));
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = addMonths(date, 1, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
