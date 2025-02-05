import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { endOfSecond } from "./index.js";

describe("endOfSecond", () => {
  it("returns the date with the time set to the last millisecond before a second ends", () => {
    const date = new Date(2014, 11, 1, 22, 15, 30);
    const result = endOfSecond(date);
    expect(result).toEqual(new Date(2014, 11, 1, 22, 15, 30, 999));
  });

  it("accepts a timestamp", () => {
    const result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45).getTime());
    expect(result).toEqual(new Date(2014, 11, 1, 22, 15, 45, 999));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 11, 1, 22, 15, 15, 300);
    endOfSecond(date);
    expect(date).toEqual(new Date(2014, 11, 1, 22, 15, 15, 300));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfSecond(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = endOfSecond(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = endOfSecond(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        endOfSecond("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T15:00:00.999+08:00");
      expect(
        endOfSecond("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-10T00:00:00.999-07:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = endOfSecond(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
