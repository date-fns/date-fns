import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { eachDayOfInterval } from "./index.js";

describe("eachDayOfInterval", () => {
  it("returns an array with starts of days from the day of the start date to the day of the end date", () => {
    const result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 9 /* Oct */, 12),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6).getTime(),
      end: new Date(2014, 9 /* Oct */, 12).getTime(),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12),
    ]);
  });

  it("handles the dates that are not starts of days", () => {
    const result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 6, 35),
      end: new Date(2014, 9 /* Oct */, 12, 22, 15),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12),
    ]);
  });

  it("returns one day if the both arguments are on the same day", () => {
    const result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 15),
    });
    expect(result).toEqual([new Date(2014, 9 /* Oct */, 6)]);
  });

  it("returns one day if the both arguments are the same", () => {
    const result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 14),
    });
    expect(result).toEqual([new Date(2014, 9 /* Oct */, 6)]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 12),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 6),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachDayOfInterval({
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachDayOfInterval({
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachDayOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  describe("options.step", () => {
    const interval = {
      start: new Date(2014, 9 /* Oct */, 6),
      end: new Date(2014, 9 /* Oct */, 13),
    };

    it("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
      const result = eachDayOfInterval(interval, { step: 3 });
      expect(result).toEqual([
        new Date(2014, 9 /* Oct */, 6),
        new Date(2014, 9 /* Oct */, 9),
        new Date(2014, 9 /* Oct */, 12),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachDayOfInterval(
        {
          start: new Date(2014, 9 /* Oct */, 10),
          end: new Date(2014, 9 /* Oct */, 12),
        },
        { step: -1 },
      );
      expect(result).toEqual([
        new Date(2014, 9 /* Oct */, 12),
        new Date(2014, 9 /* Oct */, 11),
        new Date(2014, 9 /* Oct */, 10),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachDayOfInterval(
        {
          start: new Date(2014, 9 /* Oct */, 12),
          end: new Date(2014, 9 /* Oct */, 10),
        },
        { step: -1 },
      );
      expect(result).toEqual([
        new Date(2014, 9 /* Oct */, 10),
        new Date(2014, 9 /* Oct */, 11),
        new Date(2014, 9 /* Oct */, 12),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachDayOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachDayOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });

  it("resolves the date type by default", () => {
    const result = eachDayOfInterval({
      start: Date.now(),
      end: Date.now(),
    });
    expect(result[0]).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date[], typeof result>>(true);
  });

  it("resolves the start date object type", () => {
    const result = eachDayOfInterval({
      start: new TZDate(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(TZDate);
    assertType<assertType.Equal<TZDate[], typeof result>>(true);
  });

  it("resolves the end date object type if the start isn't object", () => {
    const result = eachDayOfInterval({
      start: Date.now(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate[], typeof result>>(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2023, 11, 31, 23, "Asia/Singapore");
    const dateRight = new TZDate(2023, 11, 31, 12, "America/New_York");
    expect(
      eachDayOfInterval({ start: dateLeft, end: dateRight }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      "2023-12-31T00:00:00.000+08:00",
      "2024-01-01T00:00:00.000+08:00",
    ]);
    expect(
      eachDayOfInterval({ start: dateRight, end: dateLeft }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual(["2023-12-31T00:00:00.000-05:00"]);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      eachDayOfInterval({ start, end });
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const interval = {
        start: "2024-04-10T07:00:00Z",
        end: "2024-04-12T07:00:00Z",
      };
      expect(
        eachDayOfInterval(interval, { in: tz("America/Los_Angeles") }).map(
          (date) => date.toISOString(),
        ),
      ).toEqual([
        "2024-04-10T00:00:00.000-07:00",
        "2024-04-11T00:00:00.000-07:00",
        "2024-04-12T00:00:00.000-07:00",
      ]);
      expect(
        eachDayOfInterval(interval, { in: tz("Asia/Singapore") }).map((date) =>
          date.toISOString(),
        ),
      ).toEqual([
        "2024-04-10T00:00:00.000+08:00",
        "2024-04-11T00:00:00.000+08:00",
        "2024-04-12T00:00:00.000+08:00",
      ]);
    });

    it("resolves the context date type", () => {
      const interval = {
        start: new Date("2014-09-01T00:00:00Z"),
        end: new Date("2014-09-05T00:00:00Z"),
      };
      const result = eachDayOfInterval(interval, {
        in: tz("Asia/Tokyo"),
      });
      expect(result[0]).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate[], typeof result>>(true);
    });
  });
});
