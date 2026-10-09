import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.ts";
import { endOfQuarter } from "./index.ts";

describe("endOfQuarter", () => {
  it("returns the date with the time set to 23:59:59.999 and the date set to the last day of a quarter", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfQuarter(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = endOfQuarter(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfQuarter(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfQuarter(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = endOfQuarter(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = endOfQuarter(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        endOfQuarter("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-06-30T23:59:59.999+08:00");
      expect(
        endOfQuarter("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-06-30T23:59:59.999-07:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = endOfQuarter(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});

describe("endOfQuarter with the yearStartsOn option", () => {
  it("returns the end of the fiscal quarter", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfQuarter(date, { yearStartsOn: 3 /* Apr */ });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999));
  });

  it("handles fiscal quarters that wrap around the calendar year", () => {
    const date = new Date(2025, 11 /* Dec */, 15);
    const result = endOfQuarter(date, { yearStartsOn: 9 /* Oct */ });
    expect(result).toEqual(new Date(2025, 11 /* Dec */, 31, 23, 59, 59, 999));
  });

  it("ends on the last day of the fiscal quarter that started the previous calendar year", () => {
    const date = new Date(2026, 1 /* Feb */, 15);
    const result = endOfQuarter(date, { yearStartsOn: 3 /* Apr */ });
    expect(result).toEqual(new Date(2026, 2 /* Mar */, 31, 23, 59, 59, 999));
  });

  it("behaves like the calendar quarter when the option is not passed", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfQuarter(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999));
  });
});
