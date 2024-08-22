import { describe, expect, it } from "vitest";
import { eachWeekendOfYear } from "./index.js";
import { isWeekend } from "../isWeekend/index.js";
import { tz, TZDate } from "@date-fns/tz";
import { assertType } from "../_lib/test/index.js";
import { UTCDate } from "@date-fns/utc";

describe("eachWeekendOfYear", () => {
  it("returns all weekends of the given year", () => {
    const result = eachWeekendOfYear(new Date(2020, 0, 1));
    expect(result.length).toBe(104);
    expect(result.every((date) => isWeekend(date))).toBe(true);
    expect(result[0]).toEqual(new Date(2020, 0, 4));
    expect(result[103]).toEqual(new Date(2020, 11, 27));
  });

  it("returns an empty array when the given date is `Invalid Date`", () => {
    const result = eachWeekendOfYear(new Date(NaN));
    expect(result).toEqual([]);
  });

  it("resolves the date type by default", () => {
    const result = eachWeekendOfYear(Date.now());
    expect(result[0]).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, (typeof result)[0]>>(true);
  });

  it("resolves the context date type", () => {
    const result = eachWeekendOfYear(new UTCDate());
    expect(result[0]).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, (typeof result)[0]>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        eachWeekendOfYear("2024-04-01T07:00:00Z", {
          in: tz("Asia/Tokyo"),
        })
          .slice(0, 7)
          .map((date) => date.toISOString()),
      ).toEqual([
        "2024-01-06T00:00:00.000+09:00",
        "2024-01-07T00:00:00.000+09:00",
        "2024-01-13T00:00:00.000+09:00",
        "2024-01-14T00:00:00.000+09:00",
        "2024-01-20T00:00:00.000+09:00",
        "2024-01-21T00:00:00.000+09:00",
        "2024-01-27T00:00:00.000+09:00",
      ]);
      expect(
        eachWeekendOfYear("2024-04-01T07:00:00Z", {
          in: tz("America/New_York"),
        })
          .slice(0, 7)
          .map((date) => date.toISOString()),
      ).toEqual([
        "2024-01-06T00:00:00.000-05:00",
        "2024-01-07T00:00:00.000-05:00",
        "2024-01-13T00:00:00.000-05:00",
        "2024-01-14T00:00:00.000-05:00",
        "2024-01-20T00:00:00.000-05:00",
        "2024-01-21T00:00:00.000-05:00",
        "2024-01-27T00:00:00.000-05:00",
      ]);
    });

    it("resolves the context date type", () => {
      const result = eachWeekendOfYear(new Date("2024-01-01T00:00:00Z"), {
        in: tz("Asia/Tokyo"),
      });
      expect(result[0]).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate[], typeof result>>(true);
    });
  });
});
