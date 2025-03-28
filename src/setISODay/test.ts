import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { setISODay } from "./index.js";

describe("setISODay", () => {
  it("sets the day of the ISO week", () => {
    const result = setISODay(new Date(2014, 8 /* Sep */, 1), 3);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 3));
  });

  it("sets the day to Sunday of this ISO week if the index is 7", () => {
    const result = setISODay(new Date(2014, 8 /* Sep */, 1), 7);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 7));
  });

  it("sets the day of the next ISO week", () => {
    const result = setISODay(new Date(2014, 8 /* Sep */, 1), 8);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 8));
  });

  it("sets the day of another ISO week in the future", () => {
    const result = setISODay(new Date(2014, 8 /* Sep */, 1), 21);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 21));
  });

  it("sets the day of the last ISO week", () => {
    const result = setISODay(new Date(2014, 8 /* Sep */, 1), 0);
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 31));
  });

  it("set the day of another ISO week in the past", () => {
    const result = setISODay(new Date(2014, 8 /* Sep */, 1), -13);
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 18));
  });

  it("accepts a timestamp", () => {
    const result = setISODay(new Date(2014, 8 /* Sep */, 1).getTime(), 3);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 3));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    setISODay(date, 3);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setISODay(new Date(NaN), 3);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setISODay(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = setISODay(new Date(2014, 8 /* Sep */, 3), 5);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setISODay(new UTCDate("2014-09-01T00:00:00Z"), 3);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const date = "2024-04-10T07:00:00Z";
      expect(
        setISODay(date, 1, { in: tz("America/Los_Angeles") }).toISOString(),
      ).toBe("2024-04-08T00:00:00.000-07:00");
      expect(setISODay(date, 1, { in: tz("Asia/Kolkata") }).toISOString()).toBe(
        "2024-04-08T12:30:00.000+05:30",
      );
    });

    it("resolves the context date type", () => {
      const result = setISODay("2014-09-01T00:00:00Z", 3, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
