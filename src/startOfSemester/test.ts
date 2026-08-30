import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { startOfSemester} from "./index.js";

describe("startOfQuarter", () => {
  const semester1Start = new Date(2014, 0, 1);
  const semester2Start = new Date(2014, 6, 1);
  it("returns the date with the time set to 00:00:00 and the date set to the first day of a semester",
  () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfSemester(date);
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 1));
  });

  it("30 of June should be in the first semester", () => {
    const date = new Date(2014, 5 /* Jun */, 30, 23, 59, 59, 999);
    const result = startOfSemester(date);
    expect(result).toEqual(semester1Start);
  });

  it("1 of July should be in the second semester", () => {
    const date = new Date(2014, 6 /* Jul */, 1);
    const result = startOfSemester(date);
    expect(result).toEqual(semester2Start);
  });

  it("1 of January should be in the first semester", () => {
    const date = new Date(2014, 0, 1);
    const result = startOfSemester(date);
    expect(result).toEqual(semester1Start);
  });

  it("31 of Decembers should be in the second semester", () => {
    const date = new Date(2014, 11, 31);
    const result = startOfSemester(date);
    expect(result).toEqual(semester2Start);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = startOfSemester(date);
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 1));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfSemester(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfSemester(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = startOfSemester(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = startOfSemester(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const date = new Date(2022, 1 /* Feb */, 19);
      const context = { in: tz("America/New_York") };
      const result = startOfSemester(date, context);
      expect(result.toISOString()).toEqual("2022-01-01T00:00:00.000-05:00");
    });

    it("resolves the context date type", () => {
      const date = new Date(2022, 1 /* Feb */, 19);
      const context = { in: tz("America/New_York") };
      const result = startOfSemester(date, context);
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});