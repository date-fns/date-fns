import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { setYear } from "./index.js";

describe("setYear", () => {
  it("sets the year", () => {
    const result = setYear(new Date(2014, 8 /* Sep */, 1), 2013);
    expect(result).toEqual(new Date(2013, 8 /* Sep */, 1));
  });

  it("accepts a timestamp", () => {
    const result = setYear(new Date(2014, 8 /* Sep */, 1).getTime(), 2016);
    expect(result).toEqual(new Date(2016, 8 /* Sep */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    setYear(date, 2011);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setYear(new Date(NaN), 2013);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setYear(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = setYear(Date.now(), 2020);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setYear(new UTCDate(), 2020);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setYear("2024-04-10T07:00:00Z", 2014, {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2014-04-10T00:00:00.000-07:00");
      expect(
        setYear("2024-04-10T07:00:00Z", 2016, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2016-04-10T15:00:00.000+08:00");
    });

    it("resolves the context date type", () => {
      const result = setYear("2014-09-01T00:00:00Z", 2010, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
