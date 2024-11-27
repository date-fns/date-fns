import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { setDayOfYear } from "./index.js";

describe("setDayOfYear", () => {
  it("sets the day of the year", () => {
    const result = setDayOfYear(new Date(2014, 6 /* Jul */, 2), 2);
    expect(result).toEqual(new Date(2014, 0 /* Jan */, 2));
  });

  it("accepts a timestamp", () => {
    const result = setDayOfYear(new Date(2014, 6 /* Jul */, 2).getTime(), 60);
    expect(result).toEqual(new Date(2014, 2 /* Mar */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    setDayOfYear(date, 365);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 2));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setDayOfYear(new Date(NaN), 2);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setDayOfYear(new Date(2014, 6 /* Jul */, 2), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = setDayOfYear(Date.now(), 123);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setDayOfYear(new UTCDate(), 123);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setDayOfYear("2024-04-10T07:00:00Z", 123, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-05-02T15:00:00.000+08:00");
      expect(
        setDayOfYear("2024-04-10T07:00:00Z", 123, {
          in: tz("Asia/Kolkata"),
        }).toISOString(),
      ).toBe("2024-05-02T12:30:00.000+05:30");
    });

    it("resolves the context date type", () => {
      const result = setDayOfYear("2014-09-01T00:00:00Z", 123, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
