// subISOWeekYears tests with "context" feature

import { describe, expect, it } from "vitest";
import { subISOWeekYears } from "./index.js";
import { TZDate, tz } from "@date-fns/tz";
import { assertType } from "../_lib/test/index.js";
import { UTCDate } from "@date-fns/utc";

describe("subISOWeekYears", () => {
  it("subtracts the given number of ISO week-numbering years", () => {
    const result = subISOWeekYears(new Date(2014, 8 /* Sep */, 1), 5);
    expect(result).toEqual(new Date(2009, 7 /* Aug */, 31));
  });

  it("accepts a timestamp", () => {
    const result = subISOWeekYears(
      new Date(2014, 8 /* Sep */, 1).getTime(),
      12,
    );
    expect(result).toEqual(new Date(2002, 8 /* Sep */, 2));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    subISOWeekYears(date, 12);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(15, 5 /* Jun */, 26);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(10, 6 /* Jul */, 2);
    expectedResult.setHours(0, 0, 0, 0);
    const result = subISOWeekYears(initialDate, 5);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subISOWeekYears(new Date(NaN), 5);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subISOWeekYears(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = subISOWeekYears(Date.now(), 5);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = subISOWeekYears(new UTCDate(), 5);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        subISOWeekYears("2024-01-01T00:00:00Z", 5, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2018-12-30T00:00:00.000-05:00");
      expect(
        subISOWeekYears("2024-01-01T00:00:00Z", 5, {
          in: tz("Asia/Tokyo"),
        }).toISOString(),
      ).toBe("2018-12-31T00:00:00.000+09:00");
    });

    it("resolves the context date type", () => {
      const date = new UTCDate("2014-09-01T00:00:00Z");
      const result = subISOWeekYears(date, 5, { in: tz("Asia/Tokyo") });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
