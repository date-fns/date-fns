import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { endOfMonth } from "./index.js";

describe("endOfMonth", () => {
  it("returns the date with the time set to 23:59:59.999 and the date set to the last day of a month", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfMonth(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = endOfMonth(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfMonth(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  describe("edge cases", () => {
    it("works for last month in year", () => {
      const date = new Date(2014, 11 /* Dec */, 1, 0, 0, 0);
      const result = endOfMonth(date);
      expect(result).toEqual(new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999));
    });

    it("works for last day of month", () => {
      const date = new Date(2014, 9 /* Oct */, 31);
      const result = endOfMonth(date);
      expect(result).toEqual(new Date(2014, 9 /* Oct */, 31, 23, 59, 59, 999));
    });
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfMonth(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = endOfMonth(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = endOfMonth(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        endOfMonth("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-30T23:59:59.999+08:00");
      expect(
        endOfMonth("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-30T23:59:59.999-07:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = endOfMonth(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
