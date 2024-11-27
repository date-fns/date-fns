import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { setSeconds } from "./index.js";

describe("setSeconds", () => {
  it("sets the seconds", () => {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      45,
    );
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500));
  });

  it("accepts a timestamp", () => {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 15).getTime(),
      45,
    );
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 45));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40);
    setSeconds(date, 15);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 40));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setSeconds(new Date(NaN), 45);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setSeconds(
      new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = setSeconds(Date.now(), 45);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setSeconds(new UTCDate(), 45);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setSeconds("2024-04-10T07:00:00Z", 45, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T15:00:45.000+08:00");
      expect(
        setSeconds("2024-04-10T07:00:00Z", 45, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-04-10T03:00:45.000-04:00");
    });

    it("resolves the context date type", () => {
      const result = setSeconds("2014-09-01T00:00:00Z", 45, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
