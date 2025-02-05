import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { setHours } from "./index.js";

describe("setHours", () => {
  it("sets the amount of hours", () => {
    const result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), 4);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 4, 30));
  });

  it("accepts a timestamp", () => {
    const result = setHours(new Date(2014, 8 /* Sep */, 1, 11).getTime(), 5);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 5));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1, 11);
    setHours(date, 12);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1, 11));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setHours(new Date(NaN), 4);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = setHours(Date.now(), 16);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setHours(new UTCDate(), 16);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setHours("2024-04-10T07:00:00Z", 16, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T16:00:00.000+08:00");
      expect(
        setHours("2024-04-10T07:00:00Z", 16, {
          in: tz("Asia/Kolkata"),
        }).toISOString(),
      ).toBe("2024-04-10T16:30:00.000+05:30");
    });

    it("resolves the context date type", () => {
      const result = setHours("2014-09-01T00:00:00Z", 16, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
