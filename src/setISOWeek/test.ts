import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { setISOWeek } from "./index.js";

describe("setISOWeek", () => {
  it("sets the ISO week", () => {
    const result = setISOWeek(new Date(2004, 7 /* Aug */, 7), 53);
    expect(result).toEqual(new Date(2005, 0 /* Jan */, 1));
  });

  it("accepts a timestamp", () => {
    const result = setISOWeek(new Date(2009, 11 /* Dec */, 2).getTime(), 1);
    expect(result).toEqual(new Date(2008, 11 /* Dec */, 31));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    setISOWeek(date, 52);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 2));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(4, 0 /* Jan */, 4);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(4, 11 /* Dec */, 26);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setISOWeek(initialDate, 52);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setISOWeek(new Date(NaN), 53);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given week is NaN", () => {
    const result = setISOWeek(new Date(2004, 7 /* Aug */, 7), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = setISOWeek(Date.now(), 15);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setISOWeek(new UTCDate(), 15);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setISOWeek("2024-04-10T07:00:00Z", 15, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T15:00:00.000+08:00");
      expect(
        setISOWeek("2024-04-10T07:00:00Z", 15, {
          in: tz("Asia/Kolkata"),
        }).toISOString(),
      ).toBe("2024-04-10T12:30:00.000+05:30");
    });

    it("resolves the context date type", () => {
      const result = setISOWeek("2014-09-01T00:00:00Z", 15, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
