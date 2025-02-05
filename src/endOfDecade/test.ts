import { describe, expect, it } from "vitest";
import { endOfDecade } from "./index.js";
import { assertType } from "../_lib/test/index.js";
import { UTCDate } from "@date-fns/utc";
import { TZDate, tz } from "@date-fns/tz";

describe("endOfDecade", () => {
  it("returns the date with the time set to 23:59:59.999 and the date set to the last millisecond of a decade", () => {
    const date = new Date(2017, 3 /* Apr */, 10, 0, 0, 0);
    const result = endOfDecade(date);
    expect(result).toEqual(new Date(2019, 11 /* Dec */, 31, 23, 59, 59, 999));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2007, 9 /* Oct */, 10, 0, 0, 0).getTime();
    const result = endOfDecade(date);
    expect(result).toEqual(new Date(2009, 11 /* Dec */, 31, 23, 59, 59, 999));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2038, 0 /* Jan */, 19, 3, 14, 8);
    endOfDecade(date);
    expect(date).toEqual(new Date(2038, 0 /* Jan */, 19, 3, 14, 8));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfDecade(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("properly works with negative numbers", () => {
    expect(endOfDecade(new Date(2001, 0, 1))).toEqual(
      new Date(2009, 11, 31, 23, 59, 59, 999),
    );
    expect(endOfDecade(new Date(-2009, 0, 1))).toEqual(
      new Date(-2001, 11, 31, 23, 59, 59, 999),
    );
  });

  it("resolves the date type by default", () => {
    const result = endOfDecade(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = endOfDecade(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        endOfDecade("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2029-12-31T23:59:59.999+08:00");
      expect(
        endOfDecade("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2029-12-31T23:59:59.999-08:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = endOfDecade(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
