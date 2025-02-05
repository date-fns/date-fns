import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { endOfWeek } from "./index.js";

describe("endOfWeek", () => {
  it("returns the date with the time set to 23:59:59:999 and the date set to the last day of a week", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfWeek(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999));
  });

  it("allows to specify which day is the first day of the week", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfWeek(date, { weekStartsOn: 1 });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999));
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfWeek(date, {
      locale: {
        options: { weekStartsOn: 1 },
      },
    });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999));
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfWeek(date, {
      weekStartsOn: 1,
      locale: {
        options: { weekStartsOn: 0 },
      },
    });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = endOfWeek(date);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfWeek(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  describe("edge cases", () => {
    describe("when the given day is before the start of a week", () => {
      it("it returns the end of a week", () => {
        const date = new Date(2014, 9 /* Oct */, 6);
        const result = endOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(new Date(2014, 9 /* Oct */, 7, 23, 59, 59, 999));
      });
    });

    describe("when the given day is the start of a week", () => {
      it("it returns the end of a week", () => {
        const date = new Date(2014, 9 /* Oct */, 8);
        const result = endOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(
          new Date(2014, 9 /* Oct */, 14, 23, 59, 59, 999),
        );
      });
    });

    describe("when the given day is after the start of a week", () => {
      it("it returns the end of a week", () => {
        const date = new Date(2014, 9 /* Oct */, 10);
        const result = endOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(
          new Date(2014, 9 /* Oct */, 14, 23, 59, 59, 999),
        );
      });
    });

    it("handles the week at the end of a year", () => {
      const date = new Date(2014, 11 /* Dec */, 29);
      const result = endOfWeek(date, { weekStartsOn: 5 });
      expect(result).toEqual(new Date(2015, 0 /* Jan */, 1, 23, 59, 59, 999));
    });
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfWeek(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = endOfWeek(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = endOfWeek(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        endOfWeek("2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe("2024-04-13T23:59:59.999+08:00");
      expect(
        endOfWeek("2024-04-10T07:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2024-04-13T23:59:59.999-04:00");
    });

    it("resolves the context date type", () => {
      const date = new Date("2014-09-01T00:00:00Z");
      const result = endOfWeek(date, {
        in: tz("America/Los_Angeles"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
