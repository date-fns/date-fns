import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isSameHour } from "./index.js";

describe("isSameHour", () => {
  it("returns true if the given dates have the same hour", () => {
    const result = isSameHour(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 6, 30),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates have different hours", () => {
    const result = isSameHour(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 5, 0),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameHour(
      new Date(2014, 8 /* Sep */, 4, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameHour(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameHour(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameHour(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      isSameHour(arg1, arg2);
    }
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2024, 8, 9, 7, "America/New_York");
    const dateRight = new TZDate(2024, 8, 9, 16, 15, "Asia/Kolkata");
    expect(isSameHour(dateLeft, dateRight)).toBe(false);
    expect(isSameHour(dateRight, dateLeft)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isSameHour("2024-04-10T07:00:00Z", "2024-04-10T07:30:00Z", {
          in: tz("Asia/Kolkata"),
        }),
      ).toBe(false);
      expect(
        isSameHour("2024-04-10T07:30:00Z", "2024-04-10T08:00:00Z", {
          in: tz("Asia/Kolkata"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isSameHour(arg1, arg2, { in: options?.in });
      }
    });
  });
});
