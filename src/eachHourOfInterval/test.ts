import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { eachHourOfInterval } from "./index.js";

describe("eachHourOfInterval", () => {
  it("returns an array with starts of hours from the hour of the start date to the hour of the end date", () => {
    const result = eachHourOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 12),
      end: new Date(2014, 9 /* Oct */, 6, 15),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 6, 12),
      new Date(2014, 9 /* Oct */, 6, 13),
      new Date(2014, 9 /* Oct */, 6, 14),
      new Date(2014, 9 /* Oct */, 6, 15),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachHourOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 12).getTime(),
      end: new Date(2014, 9 /* Oct */, 6, 15).getTime(),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 6, 12),
      new Date(2014, 9 /* Oct */, 6, 13),
      new Date(2014, 9 /* Oct */, 6, 14),
      new Date(2014, 9 /* Oct */, 6, 15),
    ]);
  });

  it("handles the hours that are not starts of hours", () => {
    const result = eachHourOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 12, 59, 59, 999),
      end: new Date(2014, 9 /* Oct */, 6, 15, 59, 59, 999),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 6, 12),
      new Date(2014, 9 /* Oct */, 6, 13),
      new Date(2014, 9 /* Oct */, 6, 14),
      new Date(2014, 9 /* Oct */, 6, 15),
    ]);
  });

  it("returns one hour if the both arguments are on the same hour", () => {
    const result = eachHourOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 12, 35),
      end: new Date(2014, 9 /* Oct */, 6, 12, 47),
    });
    expect(result).toEqual([new Date(2014, 9 /* Oct */, 6, 12)]);
  });

  it("returns one hour if the both arguments are the same", () => {
    const result = eachHourOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 12, 35),
      end: new Date(2014, 9 /* Oct */, 6, 12, 35),
    });
    expect(result).toEqual([new Date(2014, 9 /* Oct */, 6, 12)]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachHourOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 15),
      end: new Date(2014, 9 /* Oct */, 6, 12),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 6, 15),
      new Date(2014, 9 /* Oct */, 6, 14),
      new Date(2014, 9 /* Oct */, 6, 13),
      new Date(2014, 9 /* Oct */, 6, 12),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachHourOfInterval({
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6, 12),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachHourOfInterval({
      start: new Date(2014, 9 /* Oct */, 12, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachHourOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  describe("options.step", () => {
    const interval = {
      start: new Date(2014, 9 /* Oct */, 6, 12),
      end: new Date(2014, 9 /* Oct */, 6, 18),
    };

    it("returns an array with starts of hours from the hour of the start date to the hour of the end date with the given step", () => {
      const result = eachHourOfInterval(interval, { step: 3 });
      expect(result).toEqual([
        new Date(2014, 9 /* Oct */, 6, 12),
        new Date(2014, 9 /* Oct */, 6, 15),
        new Date(2014, 9 /* Oct */, 6, 18),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachHourOfInterval(
        {
          start: new Date(2014, 9 /* Oct */, 6, 12),
          end: new Date(2014, 9 /* Oct */, 6, 15),
        },
        { step: -1 },
      );
      expect(result).toEqual([
        new Date(2014, 9 /* Oct */, 6, 15),
        new Date(2014, 9 /* Oct */, 6, 14),
        new Date(2014, 9 /* Oct */, 6, 13),
        new Date(2014, 9 /* Oct */, 6, 12),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachHourOfInterval(
        {
          start: new Date(2014, 9 /* Oct */, 6, 15),
          end: new Date(2014, 9 /* Oct */, 6, 12),
        },
        { step: -1 },
      );
      expect(result).toEqual([
        new Date(2014, 9 /* Oct */, 6, 12),
        new Date(2014, 9 /* Oct */, 6, 13),
        new Date(2014, 9 /* Oct */, 6, 14),
        new Date(2014, 9 /* Oct */, 6, 15),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachHourOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachHourOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });

  it("resolves the date type by default", () => {
    const result = eachHourOfInterval({
      start: Date.now(),
      end: Date.now(),
    });
    expect(result[0]).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date[], typeof result>>(true);
  });

  it("resolves the start date object type", () => {
    const result = eachHourOfInterval({
      start: new TZDate(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(TZDate);
    assertType<assertType.Equal<TZDate[], typeof result>>(true);
  });

  it("resolves the end date object type if the start isn't an object", () => {
    const result = eachHourOfInterval({
      start: Date.now(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate[], typeof result>>(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2024, 8, 9, 7, "America/New_York");
    const dateRight = new TZDate(2024, 8, 9, 16, 15, "Asia/Kolkata");
    expect(
      eachHourOfInterval({ start: dateLeft, end: dateRight }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      "2024-09-09T07:00:00.000-04:00",
      "2024-09-09T06:00:00.000-04:00",
    ]);
    expect(
      eachHourOfInterval({ start: dateRight, end: dateLeft }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual(["2024-09-09T16:00:00.000+05:30"]);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      eachHourOfInterval({ start, end });
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const interval = {
        start: "2024-04-10T07:00:00Z",
        end: "2024-04-10T15:00:00Z",
      };
      expect(
        eachHourOfInterval(interval, {
          in: tz("America/Los_Angeles"),
        }).map((date) => date.toISOString()),
      ).toEqual([
        "2024-04-10T00:00:00.000-07:00",
        "2024-04-10T01:00:00.000-07:00",
        "2024-04-10T02:00:00.000-07:00",
        "2024-04-10T03:00:00.000-07:00",
        "2024-04-10T04:00:00.000-07:00",
        "2024-04-10T05:00:00.000-07:00",
        "2024-04-10T06:00:00.000-07:00",
        "2024-04-10T07:00:00.000-07:00",
        "2024-04-10T08:00:00.000-07:00",
      ]);
      expect(
        eachHourOfInterval(interval, {
          in: tz("Asia/Singapore"),
        }).map((date) => date.toISOString()),
      ).toEqual([
        "2024-04-10T15:00:00.000+08:00",
        "2024-04-10T16:00:00.000+08:00",
        "2024-04-10T17:00:00.000+08:00",
        "2024-04-10T18:00:00.000+08:00",
        "2024-04-10T19:00:00.000+08:00",
        "2024-04-10T20:00:00.000+08:00",
        "2024-04-10T21:00:00.000+08:00",
        "2024-04-10T22:00:00.000+08:00",
        "2024-04-10T23:00:00.000+08:00",
      ]);
    });

    it("resolves the context date type", () => {
      const interval = {
        start: new Date("2014-09-01T00:00:00Z"),
        end: new Date("2014-09-01T03:00:00Z"),
      };
      const result = eachHourOfInterval(interval, {
        in: tz("Asia/Tokyo"),
      });
      expect(result[0]).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, (typeof result)[0]>>(true);
    });
  });
});
