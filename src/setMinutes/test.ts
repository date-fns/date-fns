import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { setMinutes } from "./index.js";

describe("setMinutes", () => {
  it("sets the minutes", () => {
    const result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), 45);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 45, 40));
  });

  it("accepts a timestamp", () => {
    const result = setMinutes(
      new Date(2014, 8 /* Sep */, 1, 11, 30).getTime(),
      5,
    );
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 5));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1, 11, 30);
    setMinutes(date, 15);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setMinutes(new Date(NaN), 45);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = setMinutes(Date.now(), 45);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setMinutes(new UTCDate(), 45);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setMinutes("2024-04-10T07:00:00Z", 45, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T15:45:00.000+08:00");
      expect(
        setMinutes("2024-04-10T07:00:00Z", 45, {
          in: tz("Asia/Kolkata"),
        }).toISOString(),
      ).toBe("2024-04-10T12:45:00.000+05:30");
    });

    it("resolves the context date type", () => {
      const result = setMinutes("2014-09-01T00:00:00Z", 45, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
