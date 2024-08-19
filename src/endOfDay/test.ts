import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { endOfDay } from "./index.js";
import { assertType } from "../_lib/test/index.js";
import { UTCDate } from "@date-fns/utc";

describe("endOfDay", () => {
  it("returns the date with the time set to 23:59:59.999", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfDay(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = endOfDay(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfDay(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfDay(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = endOfDay(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = endOfDay(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        endOfDay("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T23:59:59.999+08:00");
      expect(
        endOfDay("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-10T23:59:59.999-07:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = endOfDay(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
