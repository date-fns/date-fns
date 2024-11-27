import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { subDays } from "./index.js";

describe("subDays", () => {
  it("subtracts the given number of days", () => {
    const result = subDays(new Date(2014, 8 /* Sep */, 1), 10);
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 22));
  });

  it("accepts a timestamp", () => {
    const result = subDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10);
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 22));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    subDays(date, 11);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subDays(new Date(NaN), 10);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subDays(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = subDays(Date.now(), 5);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = subDays(new UTCDate(), 5);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        subDays("2024-04-10T07:00:00Z", 10, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-03-31T15:00:00.000+08:00");
      expect(
        subDays("2024-04-10T07:00:00Z", 10, {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-03-31T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2024-09-01T00:00:00Z");
      const result = subDays(date, 10, { in: tz("Asia/Tokyo") });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
