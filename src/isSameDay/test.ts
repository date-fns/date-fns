import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isSameDay } from "./index.js";

describe("isSameDay", () => {
  it("returns true if the given dates have the same day", () => {
    const result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 18, 0),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates have different days", () => {
    const result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 23, 59),
      new Date(2014, 8 /* Sep */, 5, 0, 0),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 0).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameDay(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameDay(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameDay(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      isSameDay(arg1, arg2);
    }
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2024, 5, 7, 8, "Asia/Singapore");
    const dateRight = new TZDate(2024, 5, 6, 4, "America/New_York");
    expect(isSameDay(dateLeft, dateRight)).toBe(false);
    expect(isSameDay(dateRight, dateLeft)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isSameDay("2024-04-10T07:00:00Z", "2024-04-10T15:00:00Z", {
          in: tz("America/Los_Angeles"),
        }),
      ).toBe(true);
      expect(
        isSameDay("2024-04-10T07:00:00Z", "2024-04-11T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isSameDay(arg1, arg2, { in: options?.in });
      }
    });
  });
});
