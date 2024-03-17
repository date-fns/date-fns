import { describe, expect, it } from "vitest";
import { differenceInCalendarQuarters } from "./index.js";

describe("differenceInCalendarQuarters", () => {
  it("returns the number of calendar quarters between the given dates", () => {
    const result = differenceInCalendarQuarters(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(4);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInCalendarQuarters(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0),
    );
    expect(result).toBe(-4);
  });

  it("accepts timestamps", () => {
    const result = differenceInCalendarQuarters(
      new Date(2014, 9 /* Oct */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(17);
  });

  describe("edge cases", () => {
    it("the difference is less than a quarter, but the given dates are in different calendar quarters", () => {
      const result = differenceInCalendarQuarters(
        new Date(2014, 6 /* Jul */, 1),
        new Date(2014, 5 /* Jun */, 30),
      );
      expect(result).toBe(1);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInCalendarQuarters(
        new Date(2014, 5 /* Jun */, 30),
        new Date(2014, 6 /* Jul */, 1),
      );
      expect(result).toBe(-1);
    });

    it("the days of months of the given dates are the same", () => {
      const result = differenceInCalendarQuarters(
        new Date(2014, 3 /* Apr */, 6),
        new Date(2014, 0 /* Jan */, 6),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInCalendarQuarters(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInCalendarQuarters(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInCalendarQuarters(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInCalendarQuarters(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInCalendarQuarters(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
