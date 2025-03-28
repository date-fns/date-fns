import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { subSeconds } from "./index.js";

describe("subSeconds", () => {
  it("subtracts the given number of seconds", () => {
    const result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30);
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 44, 30));
  });

  it("accepts a timestamp", () => {
    const result = subSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(),
      20,
    );
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 44, 40));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 45, 0);
    subSeconds(date, 15);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subSeconds(new Date(NaN), 30);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = subSeconds(Date.now(), 30);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = subSeconds(new UTCDate(), 15);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context and handles timezones correctly", () => {
      expect(
        subSeconds(new Date("2024-08-18T15:00:00Z"), 18000, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toEqual("2024-08-18T18:00:00.000+08:00");
    });

    it("resolves the context date type", () => {
      const result = subSeconds("2024-08-18T15:00:00Z", 30, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
