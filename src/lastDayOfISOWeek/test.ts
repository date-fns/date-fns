import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { lastDayOfISOWeek } from "./index.js";

describe("lastDayOfISOWeek", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the last day of an ISO week", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfISOWeek(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 7));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0).getTime();
    const result = lastDayOfISOWeek(date);
    expect(result).toEqual(new Date(2014, 1 /* Feb */, 16));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    lastDayOfISOWeek(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = lastDayOfISOWeek(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = lastDayOfISOWeek(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = lastDayOfISOWeek(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        lastDayOfISOWeek("2024-09-01T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-09-01T00:00:00.000+08:00");
      expect(
        lastDayOfISOWeek("2024-09-01T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-09-08T00:00:00.000+08:00");
      expect(
        lastDayOfISOWeek("2024-09-02T03:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-09-01T00:00:00.000-04:00");
      expect(
        lastDayOfISOWeek("2024-09-02T04:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-09-08T00:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const result = lastDayOfISOWeek("2014-09-02T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
