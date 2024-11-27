import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getWeekYear } from "./index.js";

describe("getWeekYear", () => {
  it("returns the local week-numbering year of the given date", () => {
    const result = getWeekYear(new Date(2004, 11 /* Dec */, 26));
    expect(result).toBe(2005);
  });

  it("accepts a timestamp", () => {
    const result = getWeekYear(new Date(2000, 11 /* Dec */, 30).getTime());
    expect(result).toBe(2000);
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(7, 11 /* Dec */, 31);
    initialDate.setHours(0, 0, 0, 0);
    const result = getWeekYear(initialDate);
    expect(result).toBe(8);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getWeekYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
    const date = new Date(2004, 11 /* Dec */, 26);
    const result = getWeekYear(date, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    });
    expect(result).toBe(2004);
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = new Date(2004, 11 /* Dec */, 26);
    const result = getWeekYear(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    });
    expect(result).toBe(2004);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getWeekYear("2023-12-31T15:00:00Z", {
          in: tz("Asia/Singapore"),
          weekStartsOn: 1,
        }),
      ).toBe(2023);
      expect(
        getWeekYear("2023-12-31T16:00:00Z", {
          in: tz("Asia/Singapore"),
          weekStartsOn: 1,
        }),
      ).toBe(2024);
      expect(
        getWeekYear("2024-01-01T04:00:00Z", {
          in: tz("America/New_York"),
          weekStartsOn: 1,
        }),
      ).toBe(2023);
      expect(
        getWeekYear("2024-01-01T05:00:00Z", {
          in: tz("America/New_York"),
          weekStartsOn: 1,
        }),
      ).toBe(2024);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getWeekYear(arg, { in: options?.in });
      }
    });
  });
});
