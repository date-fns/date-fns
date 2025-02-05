import { describe, expect, it } from "vitest";
import { startOfISOWeek } from "./index.js";
import { assertType } from "../_lib/test/index.js";
import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";

describe("startOfISOWeek", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of an ISO week", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfISOWeek(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0).getTime();
    const result = startOfISOWeek(date);
    expect(result).toEqual(new Date(2014, 1 /* Feb */, 10));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfISOWeek(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfISOWeek(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = startOfISOWeek(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = startOfISOWeek(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        startOfISOWeek("2024-08-18T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-08-12T00:00:00.000+08:00");
      expect(
        startOfISOWeek("2024-08-18T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-08-19T00:00:00.000+08:00");
      expect(
        startOfISOWeek("2024-08-19T03:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-08-12T00:00:00.000-04:00");
      expect(
        startOfISOWeek("2024-08-19T04:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-08-19T00:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = startOfISOWeek(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
