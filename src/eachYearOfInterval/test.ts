import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { eachYearOfInterval } from "./index.js";

describe("eachYearOfInterval", () => {
  it("returns an array with starts of days from the day of the start date to the day of the end date", () => {
    const result = eachYearOfInterval({
      start: new Date(2012, 9 /* Oct */, 6),
      end: new Date(2017, 9 /* Oct */, 12),
    });
    expect(result).toEqual([
      new Date(2012, 0 /* Jan */, 1),
      new Date(2013, 0 /* Jan */, 1),
      new Date(2014, 0 /* Jan */, 1),
      new Date(2015, 0 /* Jan */, 1),
      new Date(2016, 0 /* Jan */, 1),
      new Date(2017, 0 /* Jan */, 1),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachYearOfInterval({
      start: new Date(2012, 9 /* Oct */, 6).getTime(),
      end: new Date(2017, 9 /* Oct */, 12).getTime(),
    });
    expect(result).toEqual([
      new Date(2012, 0 /* Jan */, 1),
      new Date(2013, 0 /* Jan */, 1),
      new Date(2014, 0 /* Jan */, 1),
      new Date(2015, 0 /* Jan */, 1),
      new Date(2016, 0 /* Jan */, 1),
      new Date(2017, 0 /* Jan */, 1),
    ]);
  });

  it("handles the dates that are not starts of days", () => {
    const result = eachYearOfInterval({
      start: new Date(2012, 9 /* Oct */, 6, 6, 35),
      end: new Date(2017, 9 /* Oct */, 12, 22, 15),
    });
    expect(result).toEqual([
      new Date(2012, 0 /* Jan */, 1),
      new Date(2013, 0 /* Jan */, 1),
      new Date(2014, 0 /* Jan */, 1),
      new Date(2015, 0 /* Jan */, 1),
      new Date(2016, 0 /* Jan */, 1),
      new Date(2017, 0 /* Jan */, 1),
    ]);
  });

  it("returns one year if the both arguments are on the same year", () => {
    const result = eachYearOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 15),
    });
    expect(result).toEqual([new Date(2014, 0 /* Jan */, 1)]);
  });

  it("returns one year if the both arguments are the same", () => {
    const result = eachYearOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 14),
    });
    expect(result).toEqual([new Date(2014, 0 /* Jan */, 1)]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachYearOfInterval({
      start: new Date(2017, 9 /* Oct */, 12),
      end: new Date(2012, 9 /* Oct */, 6),
    });
    expect(result).toEqual([
      new Date(2017, 0 /* Jan */, 1),
      new Date(2016, 0 /* Jan */, 1),
      new Date(2015, 0 /* Jan */, 1),
      new Date(2014, 0 /* Jan */, 1),
      new Date(2013, 0 /* Jan */, 1),
      new Date(2012, 0 /* Jan */, 1),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachYearOfInterval({
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachYearOfInterval({
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachYearOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  describe("options.step", () => {
    const interval = {
      start: new Date(2012, 9 /* Oct */, 6),
      end: new Date(2017, 9 /* Oct */, 12),
    };

    it("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
      const result = eachYearOfInterval(interval, { step: 3 });
      expect(result).toEqual([
        new Date(2012, 0 /* Jan */, 1),
        new Date(2015, 0 /* Jan */, 1),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachYearOfInterval(interval, { step: -3 });
      expect(result).toEqual([
        new Date(2015, 0 /* Jan */, 1),
        new Date(2012, 0 /* Jan */, 1),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachYearOfInterval(
        { start: interval.end, end: interval.start },
        { step: -3 },
      );
      expect(result).toEqual([
        new Date(2012, 0 /* Jan */, 1),
        new Date(2015, 0 /* Jan */, 1),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachYearOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachYearOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });

  it("resolves the date type by default", () => {
    const result = eachYearOfInterval({
      start: Date.now(),
      end: Date.now(),
    });
    expect(result[0]).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date[], typeof result>>(true);
  });

  it("resolves the start date object type", () => {
    const result = eachYearOfInterval({
      start: new TZDate(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(TZDate);
    assertType<assertType.Equal<TZDate[], typeof result>>(true);
  });

  it("resolves the end date object type if the start isn't object", () => {
    const result = eachYearOfInterval({
      start: Date.now(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate[], typeof result>>(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2024, 0, 1, 0, "Asia/Singapore");
    const dateRight = new TZDate(2027, 0, 1, 0, "America/New_York");
    expect(
      eachYearOfInterval({ start: dateLeft, end: dateRight }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      "2024-01-01T00:00:00.000+08:00",
      "2025-01-01T00:00:00.000+08:00",
      "2026-01-01T00:00:00.000+08:00",
      "2027-01-01T00:00:00.000+08:00",
    ]);
    expect(
      eachYearOfInterval({ start: dateRight, end: dateLeft }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      "2027-01-01T00:00:00.000-05:00",
      "2026-01-01T00:00:00.000-05:00",
      "2025-01-01T00:00:00.000-05:00",
      "2024-01-01T00:00:00.000-05:00",
      "2023-01-01T00:00:00.000-05:00",
    ]);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      eachYearOfInterval({ start, end });
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const interval = {
        start: "2024-04-10T07:00:00Z",
        end: "2027-04-10T07:00:00Z",
      };
      expect(
        eachYearOfInterval(interval, { in: tz("America/Los_Angeles") }).map(
          (date) => date.toISOString(),
        ),
      ).toEqual([
        "2024-01-01T00:00:00.000-08:00",
        "2025-01-01T00:00:00.000-08:00",
        "2026-01-01T00:00:00.000-08:00",
        "2027-01-01T00:00:00.000-08:00",
      ]);
      expect(
        eachYearOfInterval(interval, { in: tz("Asia/Singapore") }).map((date) =>
          date.toISOString(),
        ),
      ).toEqual([
        "2024-01-01T00:00:00.000+08:00",
        "2025-01-01T00:00:00.000+08:00",
        "2026-01-01T00:00:00.000+08:00",
        "2027-01-01T00:00:00.000+08:00",
      ]);
    });

    it("resolves the context date type", () => {
      const interval = {
        start: new Date("2024-04-10T07:00:00Z"),
        end: new Date("2027-04-10T07:00:00Z"),
      };
      const result = eachYearOfInterval(interval, {
        in: tz("Asia/Tokyo"),
      });
      expect(result[0]).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate[], typeof result>>(true);
    });
  });
});
