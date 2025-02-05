import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isSameMonth } from "./index.js";

describe("isSameMonth", () => {
  it("returns true if the given dates have the same month (and year)", () => {
    const result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2014, 8 /* Sep */, 25),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates have different months", () => {
    const result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2013, 8 /* Sep */, 25),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameMonth(
      new Date(2014, 8 /* Sep */, 2).getTime(),
      new Date(2014, 8 /* Sep */, 25).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameMonth(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameMonth(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameMonth(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2023, 11, 31, 23, "Asia/Singapore");
    const dateRight = new TZDate(2023, 11, 31, 12, "America/New_York");
    expect(isSameMonth(dateLeft, dateRight)).toBe(false);
    expect(isSameMonth(dateRight, dateLeft)).toBe(true);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      isSameMonth(arg1, arg2);
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isSameMonth("2014-09-02T15:00:00Z", "2014-09-25T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(true);
      expect(
        isSameMonth("2014-09-02T15:00:00Z", "2015-09-02T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isSameMonth(arg1, arg2, { in: options?.in });
      }
    });
  });
});
