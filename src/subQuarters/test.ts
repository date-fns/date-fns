import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { subQuarters } from "./index.js";

describe("subQuarters", () => {
  it("subtracts the given number of quarters", () => {
    const result = subQuarters(new Date(2014, 8 /* Sep */, 1), 3);
    expect(result).toEqual(new Date(2013, 11 /* Dec */, 1));
  });

  it("accepts a timestamp", () => {
    const result = subQuarters(new Date(2014, 8 /* Sep */, 1).getTime(), 4);
    expect(result).toEqual(new Date(2013, 8 /* Sep */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    subQuarters(date, 3);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("works well if the desired month has fewer days and the provided date is in the last day of a month", () => {
    const date = new Date(2014, 11 /* Dec */, 31);
    const result = subQuarters(date, 1);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 30));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(0, 10 /* Nov */, 30);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = subQuarters(initialDate, 3);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subQuarters(new Date(NaN), 3);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subQuarters(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = subQuarters(Date.now(), 2);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = subQuarters(new UTCDate(), 2);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        subQuarters("2024-04-10T07:00:00Z", 2, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2023-10-10T15:00:00.000+08:00");
    });

    it("resolves the context date type", () => {
      const result = subQuarters("2024-08-18T15:00:00Z", 2, {
        in: tz("America/New_York"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
