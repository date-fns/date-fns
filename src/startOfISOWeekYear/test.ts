import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { startOfISOWeekYear } from "./index.js";

describe("startOfISOWeekYear", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of an ISO year", () => {
    const result = startOfISOWeekYear(new Date(2009, 0 /* Jan */, 1, 16, 0));
    expect(result).toEqual(new Date(2008, 11 /* Dec */, 29, 0, 0, 0, 0));
  });

  it("accepts a timestamp", () => {
    const result = startOfISOWeekYear(
      new Date(2005, 0 /* Jan */, 1, 6, 0).getTime(),
    );
    expect(result).toEqual(new Date(2003, 11 /* Dec */, 29, 0, 0, 0, 0));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    startOfISOWeekYear(date);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 2));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(9, 0 /* Jan */, 1);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(8, 11 /* Dec */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = startOfISOWeekYear(initialDate);
    expect(result).toEqual(expectedResult);
  });

  it("correctly handles years in which 4 January is Sunday", () => {
    const result = startOfISOWeekYear(new Date(2009, 6 /* Jul */, 2));
    expect(result).toEqual(new Date(2008, 11 /* Dec */, 29));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfISOWeekYear(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = startOfISOWeekYear(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = startOfISOWeekYear(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        startOfISOWeekYear("2023-12-31T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2023-01-02T00:00:00.000+08:00");
      expect(
        startOfISOWeekYear("2023-12-31T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-01-01T00:00:00.000+08:00");
      expect(
        startOfISOWeekYear("2024-01-01T04:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2023-01-02T00:00:00.000-05:00");
      expect(
        startOfISOWeekYear("2024-01-01T05:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-01-01T00:00:00.000-05:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = startOfISOWeekYear(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
