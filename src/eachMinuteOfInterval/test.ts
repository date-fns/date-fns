import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { eachMinuteOfInterval } from "./index.js";

describe("eachMinuteOfInterval", () => {
  it("should return an array of Date objects containing a Date for each minute between the interval", () => {
    const result = eachMinuteOfInterval({
      start: new Date(2020, 10, 14, 13, 0),
      end: new Date(2020, 10, 14, 13, 5),
    });

    expect(result).toEqual([
      new Date(2020, 10, 14, 13, 0),
      new Date(2020, 10, 14, 13, 1),
      new Date(2020, 10, 14, 13, 2),
      new Date(2020, 10, 14, 13, 3),
      new Date(2020, 10, 14, 13, 4),
      new Date(2020, 10, 14, 13, 5),
    ]);
  });

  it("should handle all the minutes that are not in the beginning", () => {
    const result = eachMinuteOfInterval({
      start: new Date(2020, 10, 14, 13, 0, 33),
      end: new Date(2020, 10, 14, 13, 2),
    });

    expect(result[0]).toEqual(new Date(2020, 10, 14, 13));
    expect(result[2]).toEqual(new Date(2020, 10, 14, 13, 2));
  });

  it("should accept timestamps", () => {
    const start = new Date(2020, 10, 14, 13, 0).getTime();
    const end = new Date(2020, 10, 14, 13, 2).getTime();

    const result = eachMinuteOfInterval({
      start,
      end,
    });

    expect(result).toEqual([
      new Date(2020, 10, 14, 13, 0),
      new Date(2020, 10, 14, 13, 1),
      new Date(2020, 10, 14, 13, 2),
    ]);
  });

  it("treats intervals shorter than a minute as valid", () => {
    const block = eachMinuteOfInterval.bind(null, {
      start: new Date(2014, 10, 14, 10, 1, 0),
      end: new Date(2014, 10, 14, 10, 1, 1),
    });
    expect(block).not.toThrow();
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachMinuteOfInterval({
      start: new Date(2020, 10, 14, 13, 5),
      end: new Date(2020, 10, 14, 13, 0),
    });

    expect(result).toEqual([
      new Date(2020, 10, 14, 13, 5),
      new Date(2020, 10, 14, 13, 4),
      new Date(2020, 10, 14, 13, 3),
      new Date(2020, 10, 14, 13, 2),
      new Date(2020, 10, 14, 13, 1),
      new Date(2020, 10, 14, 13, 0),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachMinuteOfInterval({
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachMinuteOfInterval({
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachMinuteOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  describe("options.step", () => {
    const interval = {
      start: new Date(2020, 9, 14, 13, 1),
      end: new Date(2020, 9, 14, 13, 7),
    };

    it("returns an array with starts of hours from the hour of the start date to the hour of the end date with the given step", () => {
      const result = eachMinuteOfInterval(interval, { step: 3 });
      expect(result).toEqual([
        new Date(2020, 9, 14, 13, 1),
        new Date(2020, 9, 14, 13, 4),
        new Date(2020, 9, 14, 13, 7),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachMinuteOfInterval(
        {
          start: new Date(2020, 10, 14, 13, 0),
          end: new Date(2020, 10, 14, 13, 5),
        },
        { step: -1 },
      );

      expect(result).toEqual([
        new Date(2020, 10, 14, 13, 5),
        new Date(2020, 10, 14, 13, 4),
        new Date(2020, 10, 14, 13, 3),
        new Date(2020, 10, 14, 13, 2),
        new Date(2020, 10, 14, 13, 1),
        new Date(2020, 10, 14, 13, 0),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachMinuteOfInterval(
        {
          start: new Date(2020, 10, 14, 13, 5),
          end: new Date(2020, 10, 14, 13, 0),
        },
        { step: -1 },
      );

      expect(result).toEqual([
        new Date(2020, 10, 14, 13, 0),
        new Date(2020, 10, 14, 13, 1),
        new Date(2020, 10, 14, 13, 2),
        new Date(2020, 10, 14, 13, 3),
        new Date(2020, 10, 14, 13, 4),
        new Date(2020, 10, 14, 13, 5),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachMinuteOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachMinuteOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });

  it("resolves the date type by default", () => {
    const interval = {
      start: Date.now(),
      end: Date.now(),
    };
    const result = eachMinuteOfInterval(interval);
    expect(result[0]).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date[], typeof result>>(true);
  });

  it("resolves the start date object type", () => {
    const interval = {
      start: new TZDate("2024-09-01T00:00:00Z"),
      end: new UTCDate("2024-09-01T00:05:00Z"),
    };
    const result = eachMinuteOfInterval(interval);
    expect(result[0]).toBeInstanceOf(TZDate);
    assertType<assertType.Equal<TZDate[], typeof result>>(true);
  });

  it("resolves the end date object type if the start isn't object", () => {
    const interval = {
      start: Date.now(),
      end: new UTCDate("2024-09-01T00:00:00Z"),
    };
    const result = eachMinuteOfInterval(interval);
    expect(result[0]).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate[], typeof result>>(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2024, 8, 9, 6, 40, "America/New_York");
    const dateRight = new TZDate(2024, 8, 9, 16, 15, "Asia/Kolkata");
    expect(
      eachMinuteOfInterval({ start: dateLeft, end: dateRight }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      "2024-09-09T06:40:00.000-04:00",
      "2024-09-09T06:41:00.000-04:00",
      "2024-09-09T06:42:00.000-04:00",
      "2024-09-09T06:43:00.000-04:00",
      "2024-09-09T06:44:00.000-04:00",
      "2024-09-09T06:45:00.000-04:00",
    ]);
    expect(
      eachMinuteOfInterval({ start: dateRight, end: dateLeft }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      "2024-09-09T16:15:00.000+05:30",
      "2024-09-09T16:14:00.000+05:30",
      "2024-09-09T16:13:00.000+05:30",
      "2024-09-09T16:12:00.000+05:30",
      "2024-09-09T16:11:00.000+05:30",
      "2024-09-09T16:10:00.000+05:30",
    ]);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      eachMinuteOfInterval({ start, end });
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const interval = {
        start: "2024-04-10T07:00:00Z",
        end: "2024-04-10T07:03:00Z",
      };
      expect(
        eachMinuteOfInterval(interval, { in: tz("America/Los_Angeles") }).map(
          (date) => date.toISOString(),
        ),
      ).toEqual([
        "2024-04-10T00:00:00.000-07:00",
        "2024-04-10T00:01:00.000-07:00",
        "2024-04-10T00:02:00.000-07:00",
        "2024-04-10T00:03:00.000-07:00",
      ]);
      expect(
        eachMinuteOfInterval(interval, { in: tz("Asia/Singapore") }).map(
          (date) => date.toISOString(),
        ),
      ).toEqual([
        "2024-04-10T15:00:00.000+08:00",
        "2024-04-10T15:01:00.000+08:00",
        "2024-04-10T15:02:00.000+08:00",
        "2024-04-10T15:03:00.000+08:00",
      ]);
    });

    it("resolves the context date type", () => {
      const interval = {
        start: new Date("2014-09-01T13:00:00Z"),
        end: new Date("2014-09-01T13:02:00Z"),
      };
      const result = eachMinuteOfInterval(interval, {
        in: tz("Asia/Tokyo"),
      });
      expect(result[0]).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate[], typeof result>>(true);
    });
  });
});
