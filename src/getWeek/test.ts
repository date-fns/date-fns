import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getWeek } from "./index.js";

describe("getWeek", () => {
  it("returns the local week of year of the given date", () => {
    const result = getWeek(new Date(2005, 0 /* Jan */, 2));
    expect(result).toBe(2);
  });

  it("accepts a timestamp", () => {
    const result = getWeek(new Date(2008, 11 /* Dec */, 29).getTime());
    expect(result).toBe(1);
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(7, 11 /* Dec */, 30);
    initialDate.setHours(0, 0, 0, 0);
    const result = getWeek(initialDate);
    expect(result).toBe(1);
  });

  it("properly works with negative numbers", () => {
    expect(getWeek(new Date(2005, 0 /* Jan */, 4))).toBe(2);
    // Calendars repeat every 400 years
    expect(getWeek(new Date(395, 0 /* Jan */, 4))).toBe(1);
    expect(getWeek(new Date(-2005, 0 /* Jan */, 4))).toBe(1);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getWeek(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
    const date = new Date(2005, 0 /* Jan */, 2);
    const result = getWeek(date, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    });
    expect(result).toBe(53);
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = new Date(2005, 0 /* Jan */, 2);
    const result = getWeek(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    });
    expect(result).toBe(53);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getWeek("2024-08-24T15:00:00Z", { in: tz("Asia/Singapore") }),
      ).toBe(34);
      expect(
        getWeek("2024-08-24T16:00:00Z", { in: tz("Asia/Singapore") }),
      ).toBe(35);
      expect(
        getWeek("2024-08-25T03:00:00Z", { in: tz("America/New_York") }),
      ).toBe(34);
      expect(
        getWeek("2024-08-25T04:00:00Z", { in: tz("America/New_York") }),
      ).toBe(35);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getWeek(arg, { in: options?.in });
      }
    });
  });
});
