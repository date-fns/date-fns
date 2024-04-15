import { describe, expect, it } from "vitest";
import { differenceInMinutes } from "./index.js";

describe("differenceInMinutes", () => {
  it("returns the number of minutes between the given dates", () => {
    const result = differenceInMinutes(
      new Date(2014, 6 /* Jul */, 2, 12, 20),
      new Date(2014, 6 /* Jul */, 2, 12, 6),
    );
    expect(result).toBe(14);
  });

  it("returns the number of minutes between the given dates with `trunc` as a default rounding method", () => {
    const result = differenceInMinutes(
      new Date(2014, 6 /* Jul */, 2, 12, 6, 50),
      new Date(2014, 6 /* Jul */, 2, 12, 20, 10),
    );
    expect(result).toBe(-13);
  });

  it("returns the number of minutes between the given dates with `trunc` passed in as a rounding method ", () => {
    const result = differenceInMinutes(
      new Date(2014, 6 /* Jul */, 2, 12, 20, 50),
      new Date(2014, 6 /* Jul */, 2, 12, 6, 10),
      { roundingMethod: "trunc" },
    );
    expect(result).toBe(14);
  });

  it("returns the number of minutes between the given dates with `ceil` passed in as a rounding method ", () => {
    const result = differenceInMinutes(
      new Date(2014, 6 /* Jul */, 2, 12, 20, 50),
      new Date(2014, 6 /* Jul */, 2, 12, 6, 10),
      { roundingMethod: "ceil" },
    );
    expect(result).toBe(15);
  });

  it("returns the number of minutes between the given dates with `floor` passed in as a rounding method ", () => {
    const result = differenceInMinutes(
      new Date(2014, 6 /* Jul */, 2, 12, 20, 50),
      new Date(2014, 6 /* Jul */, 2, 12, 6, 10),
      { roundingMethod: "floor" },
    );
    expect(result).toBe(14);
  });

  it("returns the number of minutes between the given dates with `round` passed in as a rounding method ", () => {
    const result = differenceInMinutes(
      new Date(2014, 6 /* Jul */, 2, 12, 20, 60),
      new Date(2014, 6 /* Jul */, 2, 12, 6, 10),
      { roundingMethod: "round" },
    );
    expect(result).toBe(15);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInMinutes(
      new Date(2014, 6 /* Jul */, 2, 12, 6),
      new Date(2014, 6 /* Jul */, 2, 12, 20),
    );
    expect(result).toBe(-14);
  });

  it("accepts timestamps", () => {
    const result = differenceInMinutes(
      new Date(2014, 8 /* Sep */, 5, 18, 45).getTime(),
      new Date(2014, 8 /* Sep */, 5, 18, 15).getTime(),
    );
    expect(result).toBe(30);
  });

  describe("edge cases", () => {
    it("the difference is less than a minute, but the given dates are in different calendar minutes", () => {
      const result = differenceInMinutes(
        new Date(2014, 8 /* Sep */, 5, 12, 12),
        new Date(2014, 8 /* Sep */, 5, 12, 11, 59),
      );
      expect(result).toBe(0);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInMinutes(
        new Date(2014, 8 /* Sep */, 5, 12, 11, 59),
        new Date(2014, 8 /* Sep */, 5, 12, 12),
      );
      expect(result).toBe(0);
    });

    it("the difference is an integral number of minutes", () => {
      const result = differenceInMinutes(
        new Date(2014, 8 /* Sep */, 5, 12, 25),
        new Date(2014, 8 /* Sep */, 5, 12, 15),
      );
      expect(result).toBe(10);
    });

    it("the given dates are the same", () => {
      const result = differenceInMinutes(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number) {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInMinutes(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInMinutes(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInMinutes(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInMinutes(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
