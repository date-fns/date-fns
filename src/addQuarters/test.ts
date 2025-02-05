import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { addQuarters } from "./index.js";
import { UTCDate } from "@date-fns/utc";

describe("addQuarters", () => {
  it("adds the given number of quarters", () => {
    const result = addQuarters(new Date(2014, 8 /* Sep */, 1), 1);
    expect(result).toEqual(new Date(2014, 11 /* Dec */, 1));
  });

  it("accepts a timestamp", () => {
    const result = addQuarters(new Date(2014, 8 /* Sep */, 1).getTime(), 4);
    expect(result).toEqual(new Date(2015, 8 /* Sep */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    addQuarters(date, 4);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("works well if the desired month has fewer days and the provided date is in the last day of a month", () => {
    const date = new Date(2014, 11 /* Dec */, 31);
    const result = addQuarters(date, 3);
    expect(result).toEqual(new Date(2015, 8 /* Sep */, 30));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(-1, 10 /* Nov */, 30);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = addQuarters(initialDate, 1);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addQuarters(new Date(NaN), 1);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addQuarters(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = addQuarters(Date.now(), 2);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = addQuarters(new UTCDate(), 2);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        addQuarters("2023-03-31T00:00:00Z", 1, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2023-06-30T20:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2023-09-01T00:00:00Z");
      const result = addQuarters(date, 1, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
