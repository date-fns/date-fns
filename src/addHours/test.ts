import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { addHours } from "./index.js";

describe("addHours", () => {
  it("adds the given numbers of hours", () => {
    const result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), 2);
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 11, 1, 0));
  });

  it("accepts a timestamp", () => {
    const result = addHours(
      new Date(2014, 6 /* Jul */, 10, 23, 0).getTime(),
      26,
    );
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 12, 1, 0));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 10, 23, 0);
    addHours(date, 10);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 10, 23, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addHours(new Date(NaN), 2);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addHours(new Date(2014, 6 /* Jul */, 10, 23, 0), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = addHours(Date.now(), 2);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = addHours(new UTCDate(), 2);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        addHours("2024-04-10T07:00:00Z", 2, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T17:00:00.000+08:00");
      expect(
        addHours("2024-04-10T07:00:00Z", 2, {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-10T02:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = addHours(date, 2, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
