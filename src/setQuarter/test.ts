import { describe, expect, it } from "vitest";
import { setQuarter } from "./index.js";
import { assertType } from "../_lib/test/index.js";
import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";

describe("setQuarter", () => {
  it("sets the quarter of the year", () => {
    const result = setQuarter(new Date(2014, 6 /* Jul */, 2), 1);
    expect(result).toEqual(new Date(2014, 0 /* Jan */, 2));
  });

  it("sets the last day of the month if the original date was the last day of a longer month", () => {
    const result = setQuarter(new Date(2014, 10 /* Nov */, 30), 1);
    expect(result).toEqual(new Date(2014, 1 /* Feb */, 28));
  });

  it("accepts a timestamp", () => {
    const result = setQuarter(new Date(2014, 6 /* Jul */, 1).getTime(), 4);
    expect(result).toEqual(new Date(2014, 9 /* Oct */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 1);
    setQuarter(date, 2);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 1));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(0, 10 /* Nov */, 30);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setQuarter(initialDate, 1);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setQuarter(new Date(NaN), 1);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setQuarter(new Date(2014, 6 /* Jul */, 2), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = setQuarter(Date.now(), 2);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setQuarter(new UTCDate(), 2);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setQuarter("2024-04-10T07:00:00Z", 2, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T15:00:00.000+08:00");
      expect(
        setQuarter("2024-04-10T07:00:00Z", 2, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-04-10T03:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const result = setQuarter("2014-09-01T00:00:00Z", 45, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
