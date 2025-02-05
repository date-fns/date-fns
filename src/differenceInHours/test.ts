import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { differenceInHours } from "./index.js";

describe("differenceInHours", () => {
  it("returns the number of hours between the given dates with `trunc` as a default rounding method", () => {
    const result = differenceInHours(
      new Date(2014, 6 /* Jul */, 2, 6, 0, 29),
      new Date(2014, 6 /* Jul */, 2, 20, 0, 28.973),
    );
    expect(result).toBe(-13);
  });

  it("returns the number of hours between the given dates", () => {
    const result = differenceInHours(
      new Date(2014, 6 /* Jul */, 2, 20, 0),
      new Date(2014, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(14);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInHours(
      new Date(2014, 6 /* Jul */, 2, 6, 0),
      new Date(2014, 6 /* Jul */, 2, 20, 0),
    );
    expect(result).toBe(-14);
  });

  it("returns a 0, not a negative 0 - issue #2555 ", () => {
    const result = differenceInHours(
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28.973),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28.976),
    );
    expect(result).toBe(0);
  });

  it("returns 2 with a rounding method of `ceil`, not a negative 0 - issue #2555 ", () => {
    const result = differenceInHours(
      new Date(2021, 6 /* Jul */, 22, 7, 1, 29, 976),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28, 173),
      { roundingMethod: "ceil" },
    );
    expect(result).toBe(2);
  });

  it("returns 1 with a rounding method of `floor`, not a negative 0 - issue #2555 ", () => {
    const result = differenceInHours(
      new Date(2021, 6 /* Jul */, 22, 7, 1, 29, 976),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28, 173),
      { roundingMethod: "floor" },
    );
    expect(result).toBe(1);
  });

  it("returns 1 with a rounding method of `round`, not a negative 0 - issue #2555 ", () => {
    const result = differenceInHours(
      new Date(2021, 6 /* Jul */, 22, 7, 1, 29, 976),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28, 173),
      { roundingMethod: "round" },
    );
    expect(result).toBe(1);
  });

  it("returns 1 with a rounding method of `trunc`, not a negative 0 - issue #2555 ", () => {
    const result = differenceInHours(
      new Date(2021, 6 /* Jul */, 22, 7, 1, 29, 976),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28, 173),
      { roundingMethod: "trunc" },
    );
    expect(result).toBe(1);
  });

  it("accepts timestamps", () => {
    const result = differenceInHours(
      new Date(2014, 8 /* Sep */, 5, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 5, 6, 0).getTime(),
    );
    expect(result).toBe(12);
  });

  describe("edge cases", () => {
    it("the difference is less than an hour, but the given dates are in different calendar hours", () => {
      const result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 12),
        new Date(2014, 8 /* Sep */, 5, 11, 59),
      );
      expect(result).toBe(0);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 11, 59),
        new Date(2014, 8 /* Sep */, 5, 12),
      );
      expect(result).toBe(0);
    });

    it("the difference is an integral number of hours", () => {
      const result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 13, 0),
        new Date(2014, 8 /* Sep */, 5, 12, 0),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInHours(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInHours(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInHours(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInHours(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInHours(arg1, arg2);
    }
  });

  it("normalizes the dates", () => {
    const dateLeft = new TZDate(2024, 5, 7, 8, "Asia/Singapore");
    const dateRight = new TZDate(2024, 5, 6, 4, "America/New_York");
    expect(differenceInHours(dateLeft, dateRight)).toBe(16);
    expect(differenceInHours(dateRight, dateLeft)).toBe(-16);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        differenceInHours("2024-08-18T03:00:00Z", "2024-08-01T00:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(411);
      expect(
        differenceInHours("2024-08-18T03:00:00Z", "2024-08-01T00:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(411);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        differenceInHours(arg1, arg2, { in: options?.in });
      }
    });
  });
});
