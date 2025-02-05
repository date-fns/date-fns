import { describe, expect, it } from "vitest";
import { startOfDecade } from "./index.js";
import { TZDate, tz } from "@date-fns/tz";
import { assertType } from "../_lib/test/index.js";
import { UTCDate } from "@date-fns/utc";

describe("startOfDecade", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of a year", () => {
    const date = new Date(1953, 3 /* Apr */, 13);
    const result = startOfDecade(date);
    expect(result).toEqual(new Date(1950, 0 /* Jan */, 1));
  });

  it("accepts a timestamp", () => {
    const date = new Date(1984, 9 /* Oct */, 14).getTime();
    const result = startOfDecade(date);
    expect(result).toEqual(new Date(1980, 0 /* Jan */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(1978, 10 /* Nov */, 14);
    startOfDecade(date);
    expect(date).toEqual(new Date(1978, 10 /* Nov */, 14));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfDecade(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("properly works with negative numbers", () => {
    expect(startOfDecade(new Date(2009, 0, 1))).toEqual(new Date(2000, 0, 1));
    expect(startOfDecade(new Date(-2001, 0, 1))).toEqual(new Date(-2010, 0, 1));
  });

  it("resolves the date type by default", () => {
    const result = startOfDecade(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = startOfDecade(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        startOfDecade("2024-08-18T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2020-01-01T00:00:00.000+08:00");
      expect(
        startOfDecade("2024-08-18T17:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2020-01-01T00:00:00.000-05:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = startOfDecade(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
