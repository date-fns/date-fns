import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { lastDayOfDecade } from "./index.js";

describe("lastDayOfDecade", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the last day of a decade", () => {
    const date = new Date(1985, 9 /* Oct */, 20);
    const result = lastDayOfDecade(date);
    expect(result).toEqual(new Date(1989, 11 /* Dec */, 31));
  });

  it("accepts a timestamp", () => {
    const date = new Date(1975, 0 /* Jan */, 19).getTime();
    const result = lastDayOfDecade(date);
    expect(result).toEqual(new Date(1979, 11 /* Dec */, 31));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2013, 3 /* Apr */, 23);
    lastDayOfDecade(date);
    expect(date).toEqual(new Date(2013, 3 /* Apr */, 23));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = lastDayOfDecade(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("properly works with negative numbers", () => {
    expect(lastDayOfDecade(new Date(2001, 0, 1))).toEqual(
      new Date(2009, 11, 31),
    );
    expect(lastDayOfDecade(new Date(-2009, 0, 1))).toEqual(
      new Date(-2001, 11, 31),
    );
  });

  it("resolves the date type by default", () => {
    const result = lastDayOfDecade(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = lastDayOfDecade(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        lastDayOfDecade("1999-12-31T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("1999-12-31T00:00:00.000+08:00");
      expect(
        lastDayOfDecade("1999-12-31T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2009-12-31T00:00:00.000+08:00");
      expect(
        lastDayOfDecade("2000-01-01T04:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("1999-12-31T00:00:00.000-05:00");
      expect(
        lastDayOfDecade("2000-01-01T05:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2009-12-31T00:00:00.000-05:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2000-01-01T00:00:00Z");
      const result = lastDayOfDecade(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
