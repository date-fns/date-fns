import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { eachWeekOfInterval } from "./index.js";

describe("eachWeekOfInterval", () => {
  it("returns an array with starts of weeks from the week of the start date to the week of the end date", () => {
    const result = eachWeekOfInterval({
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 10 /* Nov */, 23),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 5),
      new Date(2014, 9 /* Oct */, 12),
      new Date(2014, 9 /* Oct */, 19),
      new Date(2014, 9 /* Oct */, 26),
      new Date(2014, 10 /* Nov */, 2),
      new Date(2014, 10 /* Nov */, 9),
      new Date(2014, 10 /* Nov */, 16),
      new Date(2014, 10 /* Nov */, 23),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachWeekOfInterval({
      start: new Date(2014, 9 /* Oct */, 6).getTime(),
      end: new Date(2014, 10 /* Nov */, 23).getTime(),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 5),
      new Date(2014, 9 /* Oct */, 12),
      new Date(2014, 9 /* Oct */, 19),
      new Date(2014, 9 /* Oct */, 26),
      new Date(2014, 10 /* Nov */, 2),
      new Date(2014, 10 /* Nov */, 9),
      new Date(2014, 10 /* Nov */, 16),
      new Date(2014, 10 /* Nov */, 23),
    ]);
  });

  it("handles the dates that are not starts/ends of days and weeks", () => {
    const result = eachWeekOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 6, 35),
      end: new Date(2014, 10 /* Nov */, 25, 22, 16),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 5),
      new Date(2014, 9 /* Oct */, 12),
      new Date(2014, 9 /* Oct */, 19),
      new Date(2014, 9 /* Oct */, 26),
      new Date(2014, 10 /* Nov */, 2),
      new Date(2014, 10 /* Nov */, 9),
      new Date(2014, 10 /* Nov */, 16),
      new Date(2014, 10 /* Nov */, 23),
    ]);
  });

  it("considers the weekStartsOn option", () => {
    const result = eachWeekOfInterval(
      {
        start: new Date(2014, 9 /* Oct */, 6, 6, 35),
        end: new Date(2014, 10 /* Nov */, 25, 22, 15),
      },
      { weekStartsOn: 2 },
    );
    expect(result).toEqual([
      new Date(2014, 8 /* Sep */, 30),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 14),
      new Date(2014, 9 /* Oct */, 21),
      new Date(2014, 9 /* Oct */, 28),
      new Date(2014, 10 /* Nov */, 4),
      new Date(2014, 10 /* Nov */, 11),
      new Date(2014, 10 /* Nov */, 18),
      new Date(2014, 10 /* Nov */, 25),
    ]);
  });

  it("returns one week if the both arguments are on the same week", () => {
    const result = eachWeekOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 8, 15),
    });
    expect(result).toEqual([new Date(2014, 9 /* Oct */, 5)]);
  });

  it("returns one day if the both arguments are the same", () => {
    const result = eachWeekOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 14),
    });
    expect(result).toEqual([new Date(2014, 9 /* Oct */, 5)]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachWeekOfInterval({
      start: new Date(2014, 10 /* Nov */, 23),
      end: new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([
      new Date(2014, 10 /* Nov */, 23),
      new Date(2014, 10 /* Nov */, 16),
      new Date(2014, 10 /* Nov */, 9),
      new Date(2014, 10 /* Nov */, 2),
      new Date(2014, 9 /* Oct */, 26),
      new Date(2014, 9 /* Oct */, 19),
      new Date(2014, 9 /* Oct */, 12),
      new Date(2014, 9 /* Oct */, 5),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachWeekOfInterval({
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachWeekOfInterval({
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachWeekOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("resolves the date type by default", () => {
    const interval = {
      start: +new Date("2024-01-01T00:00:00Z"),
      end: +new Date("2024-12-31T23:59:59Z"),
    };
    const result = eachWeekOfInterval(interval);
    expect(result[0]).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date[], typeof result>>(true);
  });

  it("resolves the start date object type", () => {
    const interval = {
      start: new TZDate(2024, 4, 28, 0, "Asia/Singapore"),
      end: new UTCDate(2024, 4, 28, 0, 0),
    };
    const result = eachWeekOfInterval(interval);
    expect(result[0]).toBeInstanceOf(TZDate);
    assertType<assertType.Equal<TZDate[], typeof result>>(true);
  });

  it("resolves the end date object type if the start isn't object", () => {
    const result = eachWeekOfInterval({
      start: Date.now(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate[], typeof result>>(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2023, 11, 19, 23, "Asia/Singapore");
    const dateRight = new TZDate(2023, 11, 31, 12, "America/New_York");
    expect(
      eachWeekOfInterval({ start: dateLeft, end: dateRight }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      "2023-12-17T00:00:00.000+08:00",
      "2023-12-24T00:00:00.000+08:00",
      "2023-12-31T00:00:00.000+08:00",
    ]);
    expect(
      eachWeekOfInterval({ start: dateRight, end: dateLeft }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      "2023-12-31T00:00:00.000-05:00",
      "2023-12-24T00:00:00.000-05:00",
      "2023-12-17T00:00:00.000-05:00",
    ]);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      eachWeekOfInterval({ start, end });
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const interval = {
        start: "2024-04-10T07:00:00Z",
        end: "2024-04-30T07:00:00Z",
      };
      expect(
        eachWeekOfInterval(interval, { in: tz("America/Los_Angeles") }).map(
          (date) => date.toISOString(),
        ),
      ).toEqual([
        "2024-04-07T00:00:00.000-07:00",
        "2024-04-14T00:00:00.000-07:00",
        "2024-04-21T00:00:00.000-07:00",
        "2024-04-28T00:00:00.000-07:00",
      ]);
      expect(
        eachWeekOfInterval(interval, { in: tz("Asia/Singapore") }).map((date) =>
          date.toISOString(),
        ),
      ).toEqual([
        "2024-04-07T00:00:00.000+08:00",
        "2024-04-14T00:00:00.000+08:00",
        "2024-04-21T00:00:00.000+08:00",
        "2024-04-28T00:00:00.000+08:00",
      ]);
    });

    it("resolves the context date type", () => {
      const interval = {
        start: new Date("2014-10-06T00:00:00Z"),
        end: new Date("2014-11-23T00:00:00Z"),
      };
      const result = eachWeekOfInterval(interval, {
        in: tz("Asia/Tokyo"),
      });
      expect(result[0]).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate[], typeof result>>(true);
    });
  });

  describe("options.step", () => {
    const interval = {
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 10 /* Nov */, 23),
    };

    it("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
      const result = eachWeekOfInterval(interval, { step: 3 });
      expect(result).toEqual([
        new Date(2014, 9 /* Oct */, 5),
        new Date(2014, 9 /* Oct */, 26),
        new Date(2014, 10 /* Nov */, 16),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachWeekOfInterval(interval, { step: -3 });
      expect(result).toEqual([
        new Date(2014, 10 /* Nov */, 16),
        new Date(2014, 9 /* Oct */, 26),
        new Date(2014, 9 /* Oct */, 5),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachWeekOfInterval(
        { start: interval.end, end: interval.start },
        { step: -3 },
      );
      expect(result).toEqual([
        new Date(2014, 9 /* Oct */, 5),
        new Date(2014, 9 /* Oct */, 26),
        new Date(2014, 10 /* Nov */, 16),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachWeekOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachWeekOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });
});
