import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isSameISOWeek } from "./index.js";

describe("isSameISOWeek", () => {
  it("returns true if the given dates have the same ISO week", () => {
    const result = isSameISOWeek(
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 8 /* Sep */, 7),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates have different ISO weeks", () => {
    const result = isSameISOWeek(
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 8 /* Sep */, 14),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameISOWeek(
      new Date(2014, 5 /* Jun */, 30).getTime(),
      new Date(2014, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameISOWeek(
      new Date(NaN),
      new Date(1989, 6 /* Jul */, 10),
    );
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameISOWeek(
      new Date(1987, 1 /* Feb */, 11),
      new Date(NaN),
    );
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameISOWeek(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      isSameISOWeek(arg1, arg2);
    }
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2024, 8, 2, 0, "America/New_York");
    const dateRight = new TZDate(2024, 8, 9, 4, "Europe/London");
    expect(isSameISOWeek(dateLeft, dateRight)).toBe(true);
    expect(isSameISOWeek(dateRight, dateLeft)).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isSameISOWeek("2024-08-19T00:00:00Z", "2024-08-19T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
      expect(
        isSameISOWeek("2024-08-19T00:00:00Z", "2024-08-19T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isSameISOWeek(arg1, arg2, { in: options?.in });
      }
    });
  });
});
