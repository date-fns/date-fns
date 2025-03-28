import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getISOWeekYear } from "./index.js";

describe("getISOWeekYear", () => {
  it("returns the ISO week-numbering year of the given date", () => {
    const result = getISOWeekYear(new Date(2007, 11 /* Dec */, 31));
    expect(result).toBe(2008);
  });

  it("accepts a timestamp", () => {
    const result = getISOWeekYear(new Date(2005, 0 /* Jan */, 1).getTime());
    expect(result).toBe(2004);
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(7, 11 /* Dec */, 31);
    initialDate.setHours(0, 0, 0, 0);
    const result = getISOWeekYear(initialDate);
    expect(result).toBe(8);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getISOWeekYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getISOWeekYear("2023-12-31T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(2023);
      expect(
        getISOWeekYear("2023-12-31T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(2024);
      expect(
        getISOWeekYear("2024-01-01T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(2023);
      expect(
        getISOWeekYear("2024-01-01T05:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(2024);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getISOWeekYear(arg, { in: options?.in });
      }
    });
  });
});
