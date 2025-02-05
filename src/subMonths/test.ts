import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { subMonths } from "./index.js";

describe("subMonths", () => {
  it("subtracts the given number of months", () => {
    const result = subMonths(new Date(2015, 1 /* Feb */, 1), 5);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("accepts a timestamp", () => {
    const result = subMonths(new Date(2015, 8 /* Sep */, 1).getTime(), 12);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    subMonths(date, 12);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("works if the desired month has fewer days and the provided date is in the last day of a month", () => {
    const date = new Date(2014, 11 /* Dec */, 31);
    const result = subMonths(date, 3);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 30));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(1, 2 /* Mar */, 31);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(1, 1 /* Feb */, 28);
    expectedResult.setHours(0, 0, 0, 0);
    const result = subMonths(initialDate, 1);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subMonths(new Date(NaN), 5);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subMonths(new Date(2015, 1 /* Feb */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = subMonths(Date.now(), 5);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = subMonths(new UTCDate(), 5);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        subMonths("2024-04-10T07:00:00Z", 10, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2023-06-10T15:00:00.000+08:00");
    });

    it("resolves the context date type", () => {
      const result = subMonths("2024-08-18T15:00:00Z", 30, {
        in: tz("America/New_York"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
