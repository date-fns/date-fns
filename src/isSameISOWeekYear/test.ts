import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { type DateFns } from "../types.js";
import { isSameISOWeekYear } from "./index.js";

describe("isSameISOWeekYear", () => {
  it("returns true if the given dates have the same ISO week-numbering year", () => {
    const result = isSameISOWeekYear(
      new Date(2003, 11 /* Dec */, 29),
      new Date(2005, 0 /* Jan */, 2),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates have different ISO week-numbering years", () => {
    const result = isSameISOWeekYear(
      new Date(2014, 11 /* Dec */, 28),
      new Date(2014, 11 /* Dec */, 29),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameISOWeekYear(
      new Date(2003, 11 /* Dec */, 29).getTime(),
      new Date(2005, 0 /* Jan */, 2).getTime(),
    );
    expect(result).toBe(true);
  });

  it("handles dates before 100 AD", () => {
    const firstDate = new Date(0);
    firstDate.setFullYear(5, 0 /* Jan */, 1);
    firstDate.setHours(0, 0, 0, 0);
    const secondDate = new Date(0);
    secondDate.setFullYear(5, 0 /* Jan */, 2);
    secondDate.setHours(0, 0, 0, 0);
    const result = isSameISOWeekYear(firstDate, secondDate);
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameISOWeekYear(
      new Date(NaN),
      new Date(1989, 6 /* Jul */, 10),
    );
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameISOWeekYear(
      new Date(1987, 1 /* Feb */, 11),
      new Date(NaN),
    );
    expect(result).toBe(false);
  });

  it("returns false if both dates are `Invalid Date`", () => {
    const result = isSameISOWeekYear(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isSameISOWeekYear("2023-12-31T00:00:00Z", "2023-12-31T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(true);
      expect(
        isSameISOWeekYear("2023-12-31T00:00:00Z", "2023-12-31T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(false);
      expect(
        isSameISOWeekYear("2024-01-01T00:00:00Z", "2024-01-01T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
      expect(
        isSameISOWeekYear("2024-01-01T00:00:00Z", "2024-01-01T05:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateType | number | string,
        arg2: DateType | number | string,
        options?: DateFns.ContextOptions<ResultDate>,
      ) {
        isSameISOWeekYear(arg1, arg2, { in: options?.in });
      }
    });
  });
});
