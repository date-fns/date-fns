import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { subWeeks } from "./index.js";

describe("subWeeks", () => {
  it("subtracts the given number of weeks", () => {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1), 4);
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 4));
  });

  it("accepts a timestamp", () => {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1);
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 25));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    subWeeks(date, 2);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subWeeks(new Date(NaN), 4);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = subWeeks(Date.now(), 1);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = subWeeks(new UTCDate(), 1);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        subWeeks("2024-04-01T15:00:00Z", 1, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-03-25T23:00:00.000+08:00");
      expect(
        subWeeks("2024-04-01T16:00:00Z", 1, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-03-26T00:00:00.000+08:00");
    });

    it("resolves the context date type", () => {
      const result = subWeeks("2014-09-01T00:00:00Z", 1, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
