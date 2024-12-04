import { describe, expect, it } from "vitest";
import { differenceInMonths } from "./index.js";

describe("differenceInMonths", () => {
  it("returns the number of full months between the given dates", () => {
    const result = differenceInMonths(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(12);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInMonths(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0),
    );
    expect(result).toBe(-12);
  });

  it("accepts timestamps", () => {
    const result = differenceInMonths(
      new Date(2014, 7 /* Aug */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(49);
  });

  describe("edge cases", () => {
    it("it returns diff of 1 month between Feb 28 2021 and Jan 30 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 1 /* Feb */, 28),
        new Date(2021, 0 /* Jan */, 30),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 1 month between Feb 28 2021 and Jan 31 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 1 /* Feb */, 28),
        new Date(2021, 0 /* Jan */, 31),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 1 month between Nov, 30 2021 and Oct, 31 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 10 /* Nov */, 30),
        new Date(2021, 9 /* Oct */, 31),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 1 month between Oct, 31 2021 and Sep, 30 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 9 /* Oct */, 31),
        new Date(2021, 8 /* Sep */, 30),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 6 month between Oct, 31 2021 and Apr, 30 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 9 /* Oct */, 31),
        new Date(2021, 3 /* Apr */, 30),
      );
      expect(result).toBe(6);
    });

    it("it returns diff of -1 month between Sep, 30 2021 and Oct, 31 2021", () => {
      const result = differenceInMonths(
        new Date(2021, 8 /* Sep */, 30),
        new Date(2021, 9 /* Oct */, 31),
      );
      expect(result).toBe(-1);
    });

    it("the difference is less than a month, but the given dates are in different calendar months", () => {
      const result = differenceInMonths(
        new Date(2014, 7 /* Aug */, 1),
        new Date(2014, 6 /* Jul */, 31),
      );
      expect(result).toBe(0);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInMonths(
        new Date(2014, 6 /* Jul */, 31),
        new Date(2014, 7 /* Aug */, 1),
      );
      expect(result).toBe(0);
    });

    it("the days of months of the given dates are the same", () => {
      const result = differenceInMonths(
        new Date(2014, 8 /* Sep */, 6),
        new Date(2014, 7 /* Aug */, 6),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInMonths(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInMonths(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInMonths(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInMonths(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInMonths(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("edge cases", () => {
    it("returns the number of full months between the given dates - end of Feb", () => {
      expect(differenceInMonths(
        new Date(2012, 1 /* Feb */, 29, 9, 0, 0),
        new Date(2012, 1 /* Feb */, 29, 10, 0, 0),
      )).toBe(0);
      expect(differenceInMonths(
        new Date(2012, 1 /* Feb */, 28, 9, 0, 0),
        new Date(2012, 1 /* Feb */, 29, 10, 0, 0),
      )).toBe(0);
      expect(differenceInMonths(
        new Date(2012, 1 /* Feb */, 27, 9, 0, 0),
        new Date(2012, 1 /* Feb */, 27, 10, 0, 0),
      )).toBe(0);
      expect(differenceInMonths(
        new Date(2012, 1 /* Feb */, 28, 9, 0, 0),
        new Date(2012, 1 /* Feb */, 28, 10, 0, 0),
      )).toBe(0);
    });

    expect(differenceInMonths(
      new Date(2021, 1 /* Feb */, 28, 7, 23, 7),
      new Date(2021, 1 /* Feb */, 28, 7, 38, 18),
    )).toBe(0);
  });
});
