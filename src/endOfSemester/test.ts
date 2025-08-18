import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { endOfSemester } from "./index.js";

describe("endOfSemester", () => {
  const semester1End = new Date(2014, 5, 30, 23, 59, 59, 999);
  const semester2End = new Date(2014, 11, 31, 23, 59, 59, 999);
  it("returns the date with the time set to 23:59:59.999 and the date set to the last day of a semester", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfSemester(date);
    expect(result).toEqual(semester2End);
  });

  it("30 of June should be in the first semester", () => {
    const date = new Date(2014, 5 /* Jun */, 30, 23, 59, 59, 999);
    const result = endOfSemester(date);
    expect(result).toEqual(semester1End);
  });

  it("1 of July should be in the second semester", () => {
    const date = new Date(2014, 6 /* Jul */, 1);
    const result = endOfSemester(date);
    expect(result).toEqual(semester2End);
  });

  it("1 of January should be in the first semester", () => {
    const date = new Date(2014, 0, 1);
    const result = endOfSemester(date);
    expect(result).toEqual(semester1End);
  });

  it("31 of Decembers should be in the second semester", () => {
    const date = new Date(2014, 11, 31);
    const result = endOfSemester(date);
    expect(result).toEqual(semester2End)
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = endOfSemester(date);
    expect(result).toEqual(semester2End);
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfSemester(date);
    expect(date).toEqual(date);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfSemester(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = endOfSemester(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = endOfSemester(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        endOfSemester("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-06-30T23:59:59.999+08:00");
      expect(
        endOfSemester("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-06-30T23:59:59.999-07:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = endOfSemester(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
