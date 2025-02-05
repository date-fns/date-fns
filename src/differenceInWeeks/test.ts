import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { differenceInWeeks } from "./index.js";

describe("differenceInWeeks", () => {
  it("returns the number of full weeks between the given dates", () => {
    const result = differenceInWeeks(
      new Date(2014, 6 /* Jul */, 8, 18, 0),
      new Date(2014, 5 /* Jun */, 29, 6, 0),
    );
    expect(result).toBe(1);
  });

  it("returns the number of weeks between the given dates with `trunc` as default a rounding method", () => {
    const result = differenceInWeeks(
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      new Date(2014, 6 /* Jul */, 13, 5, 0),
    );
    expect(result).toBe(-1);
  });

  it("returns the number of weeks between the given dates with `trunc` passed in as a rounding method", () => {
    const result = differenceInWeeks(
      new Date(2014, 6 /* Jul */, 8, 18, 0),
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      { roundingMethod: "trunc" },
    );
    expect(result).toBe(1);
  });

  it("returns the number of weeks between the given dates with `ceil` passed in as a rounding method", () => {
    const result = differenceInWeeks(
      new Date(2014, 6 /* Jul */, 8, 18, 0),
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      { roundingMethod: "ceil" },
    );
    expect(result).toBe(2);
  });

  it("returns the number of weeks between the given dates with `floor` passed in as a rounding method", () => {
    const result = differenceInWeeks(
      new Date(2014, 6 /* Jul */, 8, 18, 0),
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      { roundingMethod: "floor" },
    );
    expect(result).toBe(1);
  });

  it("returns the number of weeks between the given dates with `round` passed in as a rounding method", () => {
    const result = differenceInWeeks(
      new Date(2014, 6 /* Jul */, 10, 18, 0),
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      { roundingMethod: "round" },
    );
    expect(result).toBe(2);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInWeeks(
      new Date(2014, 5 /* Jun */, 29, 6, 0),
      new Date(2014, 6 /* Jul */, 8, 18, 0),
    );
    expect(result).toBe(-1);
  });

  it("returns a 0, not a negative 0 - issue #2555 ", () => {
    const result = differenceInWeeks(
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28.973),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28.976),
    );
    expect(result).toBe(0);
  });

  it("accepts timestamps", () => {
    const result = differenceInWeeks(
      new Date(2014, 6 /* Jul */, 12).getTime(),
      new Date(2014, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(1);
  });

  describe("edge cases", () => {
    it("the difference is less than a week, but the given dates are in different calendar weeks", () => {
      const result = differenceInWeeks(
        new Date(2014, 6 /* Jul */, 6),
        new Date(2014, 6 /* Jul */, 5),
      );
      expect(result).toBe(0);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInWeeks(
        new Date(2014, 6 /* Jul */, 5),
        new Date(2014, 6 /* Jul */, 6),
      );
      expect(result).toBe(0);
    });

    it("days of weeks of the given dates are the same", () => {
      const result = differenceInWeeks(
        new Date(2014, 6 /* Jul */, 9),
        new Date(2014, 6 /* Jul */, 2),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInWeeks(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInWeeks(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInWeeks(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInWeeks(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInWeeks(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInWeeks(arg1, arg2);
    }
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2025, 0, 1, "Asia/Singapore");
    const dateRight = new TZDate(2024, 0, 1, "America/New_York");
    expect(differenceInWeeks(dateLeft, dateRight)).toBe(52);
    expect(differenceInWeeks(dateRight, dateLeft)).toBe(-52);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        differenceInWeeks("2024-01-15T00:00:00Z", "2024-01-01T00:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(2);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        differenceInWeeks(arg1, arg2, { in: options?.in });
      }
    });
  });
});
