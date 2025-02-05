import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { setMilliseconds } from "./index.js";

describe("setMilliseconds", () => {
  it("sets the milliseconds", () => {
    const result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      300,
    );
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300));
  });

  it("accepts a timestamp", () => {
    const result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 750).getTime(),
      755,
    );
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 755));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500);
    setMilliseconds(date, 137);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setMilliseconds(new Date(NaN), 300);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setMilliseconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = setMilliseconds(Date.now(), 123);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setMilliseconds(new UTCDate(), 123);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setMilliseconds("2024-04-10T07:00:00Z", 123, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T15:00:00.123+08:00");
      expect(
        setMilliseconds("2024-04-10T07:00:00Z", 123, {
          in: tz("Asia/Kolkata"),
        }).toISOString(),
      ).toBe("2024-04-10T12:30:00.123+05:30");
    });

    it("resolves the context date type", () => {
      const result = setMilliseconds("2014-09-01T00:00:00Z", 123, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
