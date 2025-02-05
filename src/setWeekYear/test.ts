import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { setWeekYear } from "./index.js";

describe("setWeekYear", () => {
  it("sets the local week-numbering year, saving the week and the day of the week", () => {
    const result = setWeekYear(new Date(2010, 0 /* Jan */, 2), 2004);
    expect(result).toEqual(new Date(2004, 0 /* Jan */, 3));
  });

  it("accepts a timestamp", () => {
    const result = setWeekYear(
      new Date(2008, 11 /* Dec */, 29).getTime(),
      2007,
    );
    expect(result).toEqual(new Date(2007, 0 /* Jan */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2008, 11 /* Dec */, 29);
    setWeekYear(date, 2000);
    expect(date).toEqual(new Date(2008, 11 /* Dec */, 29));
  });

  it("sets local week-numbering years less than 100", () => {
    const initialDate = new Date(2008, 11 /* Dec */, 29);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(7, 0 /* Jan */, 1);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setWeekYear(initialDate, 7);
    expect(result).toEqual(expectedResult);
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(8, 11 /* Dec */, 29);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(7, 0 /* Jan */, 1);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setWeekYear(initialDate, 7);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setWeekYear(new Date(NaN), 2007);
    expect(result instanceof Date && isNaN(result.getDate())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setWeekYear(new Date(2008, 11 /* Dec */, 29), NaN);
    expect(result instanceof Date && isNaN(result.getDate())).toBe(true);
  });

  it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
    const date = new Date(2010, 0 /* Jan */, 2);
    const result = setWeekYear(date, 2004, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    });
    expect(result).toEqual(new Date(2005, 0 /* Jan */, 1));
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = new Date(2010, 0 /* Jan */, 2);
    const result = setWeekYear(date, 2004, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    });
    expect(result).toEqual(new Date(2005, 0 /* Jan */, 1));
  });

  it("resolves the date type by default", () => {
    const result = setWeekYear(Date.now(), 2020);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setWeekYear(new UTCDate(), 2020);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setWeekYear("2024-04-10T07:00:00Z", 2014, {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2014-04-09T00:00:00.000-07:00");
      expect(
        setWeekYear("2024-04-10T07:00:00Z", 2016, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2016-04-06T00:00:00.000+08:00");
    });

    it("resolves the context date type", () => {
      const result = setWeekYear("2010-01-02T00:00:00Z", 2004, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
