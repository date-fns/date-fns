import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { differenceInQuarters } from "./index.js";
import type { ContextOptions, DateArg } from "../types.js";

describe("differenceInQuarters", () => {
  it("returns the number of full quarters between the given dates with `trunc` as a default rounding method", () => {
    const result = differenceInQuarters(
      new Date(2012, 6 /* Jul */, 2, 5, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(3);
  });

  it("returns the number of full quarters between the given dates", () => {
    const result = differenceInQuarters(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(4);
  });

  it("returns the number of full quarters between the given dates with `trunc` as a default rounding method", () => {
    const result = differenceInQuarters(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 4 /* May */, 2, 6, 0),
    );
    expect(result).toBe(4);
  });

  it("returns the number of full quarters between the given dates with `ceil` as a rounding method", () => {
    const result = differenceInQuarters(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 4 /* May */, 2, 6, 0),
      { roundingMethod: "ceil" },
    );
    expect(result).toBe(5);
  });

  it("returns the number of full quarters between the given dates with `floor` as a rounding method", () => {
    const result = differenceInQuarters(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 4 /* May */, 2, 6, 0),
      { roundingMethod: "floor" },
    );
    expect(result).toBe(4);
  });

  it("returns the number of full quarters between the given dates with `round` as a rounding method", () => {
    const result = differenceInQuarters(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 4 /* May */, 2, 6, 0),
      { roundingMethod: "round" },
    );
    expect(result).toBe(5);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInQuarters(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0),
    );
    expect(result).toBe(-4);
  });

  it("returns a 0, not a negative 0 - issue #2555 ", () => {
    const result = differenceInQuarters(
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28.973),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28.976),
    );
    expect(Object.is(result, 0)).toBe(true);
  });

  it("accepts timestamps", () => {
    const result = differenceInQuarters(
      new Date(2014, 9 /* Oct */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(17);
  });

  describe("edge cases", () => {
    it("the difference is less than a quarter, but the given dates are in different calendar quarters", () => {
      const result = differenceInQuarters(
        new Date(2014, 6 /* Jul */, 1),
        new Date(2014, 5 /* Jun */, 30),
      );
      expect(result).toBe(0);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInQuarters(
        new Date(2014, 5 /* Jun */, 30),
        new Date(2014, 6 /* Jul */, 1),
      );
      expect(result).toBe(0);
    });

    it("the days of months of the given dates are the same", () => {
      const result = differenceInQuarters(
        new Date(2014, 3 /* Apr */, 6),
        new Date(2014, 0 /* Jan */, 6),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInQuarters(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInQuarters(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInQuarters(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInQuarters(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if both dates are `Invalid Date`", () => {
    const result = differenceInQuarters(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInQuarters(arg1, arg2);
    }
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2022, 3, 1, "Asia/Singapore");
    const dateRight = new TZDate(2021, 11, 31, "America/New_York");
    expect(differenceInQuarters(dateLeft, dateRight)).toBe(1);
    expect(differenceInQuarters(dateRight, dateLeft)).toBe(-1);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const result = differenceInQuarters(
        "2024-01-10T07:00:00Z",
        "2023-01-10T07:00:00Z",
        {
          in: tz("America/Los_Angeles"),
        },
      );
      expect(result).toBe(4);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        differenceInQuarters(arg1, arg2, { in: options?.in });
      }
    });
  });
});
