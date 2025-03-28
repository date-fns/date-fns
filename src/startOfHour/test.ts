import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { startOfHour } from "./index.js";

describe("startOfHour", () => {
  it("returns the date with the time set to the first millisecond of an hour", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55);
    const result = startOfHour(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 2, 11));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55);
    startOfHour(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55).getTime();
    const result = startOfHour(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 2, 11));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfHour(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = startOfHour(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = startOfHour(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        startOfHour("2024-04-10T07:30:30Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T15:00:00.000+08:00");
      expect(
        startOfHour("2024-04-10T07:30:30Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-04-10T03:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-02T11:55:00Z");
      const result = startOfHour(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
