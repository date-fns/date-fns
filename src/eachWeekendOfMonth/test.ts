import { describe, expect, it } from "vitest";
import { eachWeekendOfMonth } from "./index.js";
import { TZDate, tz } from "@date-fns/tz";
import { assertType } from "../_lib/test/index.js";
import { UTCDate } from "@date-fns/utc";

describe("eachWeekendOfMonth", () => {
  it("returns all weekends of the given month", () => {
    const result = eachWeekendOfMonth(new Date(2022, 1, 20));
    expect(result).toEqual([
      new Date(2022, 1, 5),
      new Date(2022, 1, 6),
      new Date(2022, 1, 12),
      new Date(2022, 1, 13),
      new Date(2022, 1, 19),
      new Date(2022, 1, 20),
      new Date(2022, 1, 26),
      new Date(2022, 1, 27),
    ]);
  });

  it("returns an empty array when the expected year is an Invalid Date", () => {
    const result = eachWeekendOfMonth(new Date(NaN));
    expect(result).toEqual([]);
  });

  it("resolves the date type by default", () => {
    const result = eachWeekendOfMonth(Date.now());
    expect(result[0]).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, (typeof result)[0]>>(true);
  });

  it("resolves the context date type", () => {
    const result = eachWeekendOfMonth(new UTCDate());
    expect(result[0]).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, (typeof result)[0]>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        eachWeekendOfMonth("2024-04-01T07:00:00Z", {
          in: tz("Asia/Tokyo"),
        }).map((date) => date.toISOString()),
      ).toEqual([
        "2024-04-06T00:00:00.000+09:00",
        "2024-04-07T00:00:00.000+09:00",
        "2024-04-13T00:00:00.000+09:00",
        "2024-04-14T00:00:00.000+09:00",
        "2024-04-20T00:00:00.000+09:00",
        "2024-04-21T00:00:00.000+09:00",
        "2024-04-27T00:00:00.000+09:00",
        "2024-04-28T00:00:00.000+09:00",
      ]);
      expect(
        eachWeekendOfMonth("2024-04-01T07:00:00Z", {
          in: tz("America/New_York"),
        }).map((date) => date.toISOString()),
      ).toEqual([
        "2024-04-06T00:00:00.000-04:00",
        "2024-04-07T00:00:00.000-04:00",
        "2024-04-13T00:00:00.000-04:00",
        "2024-04-14T00:00:00.000-04:00",
        "2024-04-20T00:00:00.000-04:00",
        "2024-04-21T00:00:00.000-04:00",
        "2024-04-27T00:00:00.000-04:00",
        "2024-04-28T00:00:00.000-04:00",
      ]);
    });

    it("resolves the context date type", () => {
      const result = eachWeekendOfMonth(new Date("2024-04-01T00:00:00Z"), {
        in: tz("Asia/Tokyo"),
      });
      expect(result[0]).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, (typeof result)[0]>>(true);
    });
  });
});
