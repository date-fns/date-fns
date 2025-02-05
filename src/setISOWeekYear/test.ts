import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { setISOWeekYear } from "./index.js";

describe("setISOWeekYear", () => {
  it("sets the ISO week-numbering year, saving the ISO week and the day of the week", () => {
    const result = setISOWeekYear(new Date(2008, 11 /* Dec */, 29), 2007);
    expect(result).toEqual(new Date(2007, 0 /* Jan */, 1));
  });

  it("accepts a timestamp", () => {
    const result = setISOWeekYear(
      new Date(2010, 0 /* Jan */, 2).getTime(),
      2004,
    );
    expect(result).toEqual(new Date(2005, 0 /* Jan */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2008, 11 /* Dec */, 29);
    setISOWeekYear(date, 2000);
    expect(date).toEqual(new Date(2008, 11 /* Dec */, 29));
  });

  it("sets ISO week-numbering years less than 100", () => {
    const initialDate = new Date(2008, 11 /* Dec */, 29);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(7, 0 /* Jan */, 1);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setISOWeekYear(initialDate, 7);
    expect(result).toEqual(expectedResult);
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(8, 11 /* Dec */, 29);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(7, 0 /* Jan */, 1);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setISOWeekYear(initialDate, 7);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setISOWeekYear(new Date(NaN), 2007);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setISOWeekYear(new Date(2008, 11 /* Dec */, 29), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = setISOWeekYear(Date.now(), 5);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setISOWeekYear(new UTCDate(), 5);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setISOWeekYear("2024-04-10T07:00:00Z", 2024, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T00:00:00.000+08:00");
      expect(
        setISOWeekYear("2024-04-10T07:00:00Z", 2024, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-04-10T00:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2024-04-10T07:00:00Z");
      const result = setISOWeekYear(date, 2024, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
