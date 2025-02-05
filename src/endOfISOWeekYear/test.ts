import { tz, TZDate } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { endOfISOWeekYear } from "./index.js";

describe("endOfISOWeekYear", () => {
  it("returns the date with the time set to 23:59:59.999 and the date set to the last day of an ISO year", () => {
    const result = endOfISOWeekYear(new Date(2009, 0 /* Jan */, 1, 16, 0));
    expect(result).toEqual(new Date(2010, 0 /* Jan */, 3, 23, 59, 59, 999));
  });

  it("accepts a timestamp", () => {
    const result = endOfISOWeekYear(
      new Date(2005, 0 /* Jan */, 1, 6, 0).getTime(),
    );
    expect(result).toEqual(new Date(2005, 0 /* Jan */, 2, 23, 59, 59, 999));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    endOfISOWeekYear(date);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 2));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(5, 0 /* Jan */, 4);
    initialDate.setHours(16, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(6, 0 /* Jan */, 1);
    expectedResult.setHours(23, 59, 59, 999);
    const result = endOfISOWeekYear(initialDate);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfISOWeekYear(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = endOfISOWeekYear(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = endOfISOWeekYear(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        endOfISOWeekYear("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-12-29T23:59:59.999+08:00");
      expect(
        endOfISOWeekYear("2024-04-10T07:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-12-29T23:59:59.999-05:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2023-01-01T00:00:00Z");
      const result = endOfISOWeekYear(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
