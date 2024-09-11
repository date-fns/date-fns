import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getWeekOfMonth } from "./index.js";

describe("getWeekOfMonth", () => {
  it("returns the week of the month of the given date", () => {
    const result = getWeekOfMonth(new Date(2017, 10 /* Nov */, 15));
    expect(result).toBe(3);
  });

  describe("edge cases", () => {
    describe("when the given day is the first of a month", () => {
      it("returns the week of the month of the given date", () => {
        const result = getWeekOfMonth(new Date(2017, 10 /* Nov */, 1));
        expect(result).toBe(1);
      });
    });

    describe("when the given day is the last of a month #1", () => {
      it("returns the week of the month of the given date", () => {
        const result = getWeekOfMonth(new Date(2017, 10 /* Nov */, 30));
        expect(result).toBe(5);
      });
    });

    describe("when the given day is the last of a month #2", () => {
      it("returns the week of the month of the given date", () => {
        const result = getWeekOfMonth(new Date(2017, 9 /* Oct */, 31));
        expect(result).toBe(5);
      });
    });
  });

  it("allows to specify which day is the first day of the week", () => {
    const result = getWeekOfMonth(new Date(2017, 9 /* Oct */, 1), {
      weekStartsOn: 1,
    });
    expect(result).toBe(1);
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const result = getWeekOfMonth(new Date(2017, 9 /* Oct */, 31), {
      locale: {
        options: { weekStartsOn: 1 },
      },
    });
    expect(result).toBe(6);
  });

  it("options.weekStartsOn overwrites the first day of the week specified in locale", () => {
    const result = getWeekOfMonth(new Date(2017, 10 /* Nov */, 13), {
      weekStartsOn: 1,
      locale: {
        options: { weekStartsOn: 0 },
      },
    });
    expect(result).toBe(3);
  });

  it("accepts a timestamp", () => {
    const result = getWeekOfMonth(new Date(2017, 10 /* Nov */, 1).getTime());
    expect(result).toBe(1);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getWeekOfMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns the week of the month of the given date, when the given date is sunday", () => {
    const result = getWeekOfMonth(new Date(2019, 4 /* May */, 5), {
      weekStartsOn: 1,
    });
    expect(result).toBe(1);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getWeekOfMonth("2024-08-24T15:00:00Z", { in: tz("Asia/Singapore") }),
      ).toBe(4);
      expect(
        getWeekOfMonth("2024-08-24T16:00:00Z", { in: tz("Asia/Singapore") }),
      ).toBe(5);
      expect(
        getWeekOfMonth("2024-08-25T03:00:00Z", { in: tz("America/New_York") }),
      ).toBe(4);
      expect(
        getWeekOfMonth("2024-08-25T04:00:00Z", { in: tz("America/New_York") }),
      ).toBe(5);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getWeekOfMonth(arg, { in: options?.in });
      }
    });
  });
});
