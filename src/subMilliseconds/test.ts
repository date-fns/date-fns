import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { subMilliseconds } from "./index.js";
import { assertType } from "../_lib/test/index.js";
import { UTCDate } from "@date-fns/utc";

describe("subMilliseconds", () => {
  it("subtracts the given number of milliseconds", () => {
    const result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      750,
    );
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 250));
  });

  it("accepts a timestamp", () => {
    const result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(),
      500,
    );
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 500));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0);
    subMilliseconds(date, 250);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subMilliseconds(new Date(NaN), 750);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = subMilliseconds(Date.now(), 5);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = subMilliseconds(new UTCDate(), 5);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        subMilliseconds("2024-04-10T07:00:00Z", 10, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T14:59:59.990+08:00");
    });

    it("resolves the context date type", () => {
      const result = subMilliseconds("2014-09-01T00:00:00Z", 1000, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
