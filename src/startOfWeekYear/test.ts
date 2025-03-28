import { describe, expect, it } from "vitest";
import { startOfWeekYear } from "./index.js";
import { TZDate, tz } from "@date-fns/tz";
import { assertType } from "../_lib/test/index.js";
import { UTCDate } from "@date-fns/utc";

describe("startOfWeekYear", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of a week year", () => {
    const result = startOfWeekYear(new Date(2005, 6 /* Jul */, 2));
    expect(result).toEqual(new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0));
  });

  it("accepts a timestamp", () => {
    const result = startOfWeekYear(
      new Date(2005, 0 /* Jan */, 1, 6, 0).getTime(),
    );
    expect(result).toEqual(new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    startOfWeekYear(date);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 2));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(9, 0 /* Jan */, 1);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(8, 11 /* Dec */, 28);
    expectedResult.setHours(0, 0, 0, 0);
    const result = startOfWeekYear(initialDate);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfWeekYear(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
    const date = new Date(2005, 6 /* Jul */, 2);
    const result = startOfWeekYear(date, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    });
    expect(result).toEqual(new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0));
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = new Date(2005, 6 /* Jul */, 2);
    const result = startOfWeekYear(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    });
    expect(result).toEqual(new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0));
  });

  it("resolves the date type by default", () => {
    const result = startOfWeekYear(Date.now(), {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
    });
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = startOfWeekYear(new UTCDate(), {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
    });
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        startOfWeekYear("2023-12-31T15:00:00Z", {
          weekStartsOn: 1,
          firstWeekContainsDate: 4,
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2023-01-02T00:00:00.000+08:00");
      expect(
        startOfWeekYear("2023-12-31T16:00:00Z", {
          weekStartsOn: 1,
          firstWeekContainsDate: 4,
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-01-01T00:00:00.000+08:00");
      expect(
        startOfWeekYear("2024-01-01T04:00:00Z", {
          weekStartsOn: 1,
          firstWeekContainsDate: 4,
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2023-01-02T00:00:00.000-05:00");
      expect(
        startOfWeekYear("2024-01-01T05:00:00Z", {
          weekStartsOn: 1,
          firstWeekContainsDate: 4,
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-01-01T00:00:00.000-05:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = startOfWeekYear(date, {
        weekStartsOn: 1,
        firstWeekContainsDate: 4,
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
