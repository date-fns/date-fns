import { describe, expect, it } from "vitest";
import { addMinutes } from "./index.js";
import { TZDate, tz } from "@date-fns/tz";
import { assertType } from "../_lib/test/index.js";
import { UTCDate } from "@date-fns/utc";

describe("addMinutes", () => {
  it("adds the given number of minutes", () => {
    const result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30);
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 30));
  });

  it("accepts a timestamp", () => {
    const result = addMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(),
      20,
    );
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 20));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 0);
    addMinutes(date, 25);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addMinutes(new Date(NaN), 30);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = addMinutes(Date.now(), 2);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = addMinutes(new UTCDate(), 2);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        addMinutes("2024-04-10T15:00:00Z", 60, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-10T23:00:00.000+08:00");
      expect(
        addMinutes("2024-04-10T15:00:00Z", 60, {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe("2024-04-10T08:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = addMinutes(date, 2, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
