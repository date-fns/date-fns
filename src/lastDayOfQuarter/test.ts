import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { lastDayOfQuarter } from "./index.js";

describe("lastDayOfQuarter", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the last day of a quarter", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfQuarter(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 30));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = lastDayOfQuarter(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 30));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    lastDayOfQuarter(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = lastDayOfQuarter(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = lastDayOfQuarter(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = lastDayOfQuarter(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        lastDayOfQuarter("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-06-30T00:00:00.000-07:00");
      expect(
        lastDayOfQuarter("2024-05-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-06-30T00:00:00.000+08:00");
    });

    it("resolves the context date type", () => {
      const result = lastDayOfQuarter("2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
