import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { eachMonthOfInterval } from "./index.js";

describe("eachMonthOfInterval", () => {
  it("returns an array with starts of months from the month of the start date to the month of the end date", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */, 6),
      end: new Date(2014, 7 /* Aug */, 12),
    });
    expect(result).toEqual([
      new Date(2014, 2 /* Mar */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 4 /* May */, 1),
      new Date(2014, 5 /* Jun */, 1),
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 7 /* Aug */, 1),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */, 6).getTime(),
      end: new Date(2014, 7 /* Aug */, 12).getTime(),
    });
    expect(result).toEqual([
      new Date(2014, 2 /* Mar */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 4 /* May */, 1),
      new Date(2014, 5 /* Jun */, 1),
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 7 /* Aug */, 1),
    ]);
  });

  it("handles the dates that are not starts of days", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */, 6, 6, 35),
      end: new Date(2014, 7 /* Aug */, 12, 22, 15),
    });
    expect(result).toEqual([
      new Date(2014, 2 /* Mar */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 4 /* May */, 1),
      new Date(2014, 5 /* Jun */, 1),
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 7 /* Aug */, 1),
    ]);
  });

  it("handles the dates that are not containing days", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 2 /* Mar */),
      end: new Date(2014, 7 /* Aug */),
    });
    expect(result).toEqual([
      new Date(2014, 2 /* Mar */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 4 /* May */, 1),
      new Date(2014, 5 /* Jun */, 1),
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 7 /* Aug */, 1),
    ]);
  });

  it("returns one month if the both arguments are on the same month", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 9, 15),
    });
    expect(result).toEqual([new Date(2014, 9 /* Oct */, 1)]);
  });

  it("returns one month if the both arguments are the same", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 14),
    });
    expect(result).toEqual([new Date(2014, 9 /* Oct */, 1)]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 7 /* Aug */, 12),
      end: new Date(2014, 2 /* Mar */, 6),
    });
    expect(result).toEqual([
      new Date(2014, 7 /* Aug */, 1),
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 5 /* Jun */, 1),
      new Date(2014, 4 /* May */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 2 /* Mar */, 1),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachMonthOfInterval({
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachMonthOfInterval({
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachMonthOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  describe("options.step", () => {
    const interval = {
      start: new Date(2014, 2 /* Mar */, 6),
      end: new Date(2014, 7 /* Aug */, 12),
    };

    it("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
      const result = eachMonthOfInterval(interval, { step: 3 });
      expect(result).toEqual([
        new Date(2014, 2 /* Mar */, 1),
        new Date(2014, 5 /* Jun */, 1),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachMonthOfInterval(interval, { step: -3 });
      expect(result).toEqual([
        new Date(2014, 5 /* Jun */, 1),
        new Date(2014, 2 /* Mar */, 1),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachMonthOfInterval(
        { start: interval.end, end: interval.start },
        { step: -3 },
      );
      expect(result).toEqual([
        new Date(2014, 2 /* Mar */, 1),
        new Date(2014, 5 /* Jun */, 1),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachMonthOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachMonthOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });

  it("resolves the date type by default", () => {
    const result = eachMonthOfInterval({
      start: Date.now(),
      end: Date.now(),
    });
    expect(result[0]).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date[], typeof result>>(true);
  });

  it("resolves the start date object type", () => {
    const result = eachMonthOfInterval({
      start: new TZDate(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(TZDate);
    assertType<assertType.Equal<TZDate[], typeof result>>(true);
  });

  it("resolves the end date object type if the start isn't object", () => {
    const result = eachMonthOfInterval({
      start: Date.now(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate[], typeof result>>(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2024, 0, 1, 12, "Asia/Singapore");
    const dateRight = new TZDate(2024, 5, 30, 12, "America/New_York");
    expect(
      eachMonthOfInterval({ start: dateLeft, end: dateRight }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      "2024-01-01T00:00:00.000+08:00",
      "2024-02-01T00:00:00.000+08:00",
      "2024-03-01T00:00:00.000+08:00",
      "2024-04-01T00:00:00.000+08:00",
      "2024-05-01T00:00:00.000+08:00",
      "2024-06-01T00:00:00.000+08:00",
      "2024-07-01T00:00:00.000+08:00",
    ]);
    expect(
      eachMonthOfInterval({ start: dateRight, end: dateLeft }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      "2024-06-01T00:00:00.000-04:00",
      "2024-05-01T00:00:00.000-04:00",
      "2024-04-01T00:00:00.000-04:00",
      "2024-03-01T00:00:00.000-05:00",
      "2024-02-01T00:00:00.000-05:00",
      "2024-01-01T00:00:00.000-05:00",
      "2023-12-01T00:00:00.000-05:00",
    ]);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      eachMonthOfInterval({ start, end });
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const interval = {
        start: "2024-04-10T07:00:00Z",
        end: "2024-08-12T07:00:00Z",
      };
      expect(
        eachMonthOfInterval(interval, { in: tz("America/Los_Angeles") }).map(
          (date) => date.toISOString(),
        ),
      ).toEqual([
        "2024-04-01T00:00:00.000-07:00",
        "2024-05-01T00:00:00.000-07:00",
        "2024-06-01T00:00:00.000-07:00",
        "2024-07-01T00:00:00.000-07:00",
        "2024-08-01T00:00:00.000-07:00",
      ]);
      expect(
        eachMonthOfInterval(interval, { in: tz("Asia/Singapore") }).map(
          (date) => date.toISOString(),
        ),
      ).toEqual([
        "2024-04-01T00:00:00.000+08:00",
        "2024-05-01T00:00:00.000+08:00",
        "2024-06-01T00:00:00.000+08:00",
        "2024-07-01T00:00:00.000+08:00",
        "2024-08-01T00:00:00.000+08:00",
      ]);
    });

    it("resolves the context date type", () => {
      const interval = {
        start: new Date("2014-09-01T00:00:00Z"),
        end: new Date("2014-09-05T00:00:00Z"),
      };
      const result = eachMonthOfInterval(interval, {
        in: tz("Asia/Tokyo"),
      });
      expect(result[0]).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate[], typeof result>>(true);
    });
  });
});
