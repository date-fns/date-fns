import { describe, expect, it } from "vitest";
import { differenceInCalendarMonths } from "./index.js";

describe("differenceInCalendarMonths", () => {
  it("returns the number of calendar months between the given dates", () => {
    const result = differenceInCalendarMonths(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(12);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInCalendarMonths(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0),
    );
    expect(result).toBe(-12);
  });

  it("accepts timestamps", () => {
    const result = differenceInCalendarMonths(
      new Date(2014, 7 /* Aug */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(49);
  });

  describe("edge cases", () => {
    it("the difference is less than a month, but the given dates are in different calendar months", () => {
      const result = differenceInCalendarMonths(
        new Date(2014, 8 /* Sep */, 1),
        new Date(2014, 7 /* Aug */, 31),
      );
      expect(result).toBe(1);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInCalendarMonths(
        new Date(2014, 7 /* Aug */, 31),
        new Date(2014, 8 /* Sep */, 1),
      );
      expect(result).toBe(-1);
    });

    it("the days of months of the given dates are the same", () => {
      const result = differenceInCalendarMonths(
        new Date(2014, 8 /* Sep */, 6),
        new Date(2014, 7 /* Aug */, 6),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInCalendarMonths(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInCalendarMonths(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInCalendarMonths(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInCalendarMonths(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInCalendarMonths(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
