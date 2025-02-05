import { describe, expect, it } from "vitest";
import { startOfYear } from "./index.js";
import { assertType } from "../_lib/test/index.js";
import { UTCDate } from "@date-fns/utc";
import { TZDate, tz } from "@date-fns/tz";

describe("startOfYear", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of a year", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfYear(date);
    expect(result).toEqual(new Date(2014, 0 /* Jan */, 1, 0, 0, 0, 0));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = startOfYear(date);
    expect(result).toEqual(new Date(2014, 0 /* Dec */, 1, 0, 0, 0, 0));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfYear(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(9, 0 /* Jan */, 5);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(9, 0 /* Jan */, 1);
    expectedResult.setHours(0, 0, 0, 0);
    const result = startOfYear(initialDate);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfYear(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = startOfYear(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = startOfYear(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        startOfYear("2023-12-31T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2023-01-01T00:00:00.000+08:00");
      expect(
        startOfYear("2023-12-31T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-01-01T00:00:00.000+08:00");
      expect(
        startOfYear("2024-01-01T04:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2023-01-01T00:00:00.000-05:00");
      expect(
        startOfYear("2024-01-01T05:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-01-01T00:00:00.000-05:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = startOfYear(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
