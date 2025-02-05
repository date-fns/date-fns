import { tz, TZDate } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { startOfSecond } from "./index.js";

describe("startOfSecond", () => {
  it("returns the date with the time set to the first millisecond of a second", () => {
    const date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400);
    const result = startOfSecond(date);
    expect(result).toEqual(new Date(2014, 11 /* Dec */, 1, 22, 15, 45));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400).getTime();
    const result = startOfSecond(date);
    expect(result).toEqual(new Date(2014, 11 /* Dec */, 1, 22, 15, 45));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400);
    startOfSecond(date);
    expect(date).toEqual(new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfSecond(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = startOfSecond(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = startOfSecond(new TZDate());
    expect(result).toBeInstanceOf(TZDate);
    assertType<assertType.Equal<TZDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        startOfSecond("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T15:00:00.000+08:00");
      expect(
        startOfSecond("2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-10T00:00:00.000-07:00");
    });

    it("resolves context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = startOfSecond(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
