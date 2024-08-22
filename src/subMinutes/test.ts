import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { subMinutes } from "./index.js";

describe("subMinutes", () => {
  it("subtracts the given number of minutes", () => {
    const result = subMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30);
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 11, 30));
  });

  it("accepts a timestamp", () => {
    const result = subMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(),
      20,
    );
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 11, 40));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 0);
    subMinutes(date, 25);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subMinutes(new Date(NaN), 30);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = subMinutes(Date.now(), 5);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = subMinutes(new UTCDate(), 5);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        subMinutes("2024-04-10T07:00:00Z", 10, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T15:00:00.000+08:00");
    });

    it("resolves the context date type", () => {
      const result = subMinutes("2024-08-18T15:00:00Z", 30, {
        in: tz("America/New_York"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
