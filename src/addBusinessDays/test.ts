import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { addBusinessDays } from "./index.js";

describe("addBusinessDays", () => {
  it("adds the given number of business days", () => {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), 10);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 15));
  });

  it("handles negative amount", () => {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 15), -10);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns the Monday when 1 day is added on the Friday", () => {
    expect(addBusinessDays(new Date(2020, 0 /* Jan */, 10), 1)).toEqual(
      // Friday
      // Monday
      new Date(2020, 0 /* Jan */, 13),
    );
  });

  it("returns the Monday when 1 day is added on the Satuday", () => {
    expect(addBusinessDays(new Date(2020, 0 /* Jan */, 11), 1)).toEqual(
      // Saturday
      // Monday
      new Date(2020, 0 /* Jan */, 13),
    );
  });

  it("returns the Monday when 1 day is added on the Sunday", () => {
    expect(addBusinessDays(new Date(2020, 0 /* Jan */, 12), 1)).toEqual(
      // Sunday
      // Monday
      new Date(2020, 0 /* Jan */, 13),
    );
  });

  it("can handle a large number of business days", () => {
    const result = addBusinessDays(new Date(2014, 0 /* Jan */, 1), 3387885);
    expect(result).toEqual(new Date(15000, 0 /* Jan */, 1));
  });

  it("accepts a timestamp", () => {
    const result = addBusinessDays(
      new Date(2014, 8 /* Sep */, 1).getTime(),
      10,
    );
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 15));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    addBusinessDays(date, 11);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addBusinessDays(new Date(NaN), 10);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("starting from a weekend day should land on a weekday when reducing a divisible by 5", () => {
    const subtractResult = addBusinessDays(new Date(2019, 7, 18), -5);
    expect(subtractResult).toEqual(new Date(2019, 7, 12));

    const subtractResultWeekend = addBusinessDays(new Date(2019, 7, 17), -5);
    expect(subtractResultWeekend).toEqual(new Date(2019, 7, 12));

    const addResult = addBusinessDays(new Date(2019, 7, 18), 5);
    expect(addResult).toEqual(new Date(2019, 7, 23));

    const addResultWeekend = addBusinessDays(new Date(2019, 7, 17), 5);
    expect(addResultWeekend).toEqual(new Date(2019, 7, 23));
  });

  it("resolves the date type by default", () => {
    const result = addBusinessDays(Date.now(), 5);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = addBusinessDays(new UTCDate(), 5);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        addBusinessDays("2024-08-20T15:00:00Z", 3, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-08-23T23:00:00.000+08:00");
      expect(
        addBusinessDays("2024-08-20T16:00:00Z", 3, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-08-26T00:00:00.000+08:00");
      expect(
        addBusinessDays(new Date("2024-08-21T03:00:00Z"), 3, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-08-23T23:00:00.000-04:00");
      expect(
        addBusinessDays(new Date("2024-08-21T04:00:00Z"), 3, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-08-26T00:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = addBusinessDays(date, 1, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
