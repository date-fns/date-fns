import { describe, expect, it } from "vitest";
import { differenceInSeconds } from "./index.js";

describe("differenceInSeconds", () => {
  it("returns the number of seconds between the given dates with `trunc` as a default rounding method", () => {
    const result = differenceInSeconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 6, 29),
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 28.777),
    );
    expect(result).toBe(-13);
  });

  it("returns the number of seconds between the given dates", () => {
    const result = differenceInSeconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20),
      new Date(2014, 6 /* Jul */, 2, 12, 30, 6),
    );
    expect(result).toBe(14);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInSeconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 6),
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20),
    );
    expect(result).toBe(-14);
  });

  it("returns a 0, not a negative 0 - issue #2555 ", () => {
    const result = differenceInSeconds(
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28.973),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28.976),
    );
    expect(result).toBe(0);
  });

  it("returns 1 with `round` passed in as a rounding method", () => {
    const result = differenceInSeconds(
      new Date(2021, 6 /* Jul */, 22, 6, 1, 29.973),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28.976),
      { roundingMethod: "round" },
    );
    expect(result).toBe(1);
  });

  it("returns a -1 with `round` passed in as a rounding method", () => {
    const result = differenceInSeconds(
      new Date(2021, 6 /* Jul */, 22, 6, 1, 27.976),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28.973),

      { roundingMethod: "round" },
    );
    expect(result).toBe(-1);
  });

  it("returns a -2 with `ceil` passed in as a rounding method", () => {
    const result = differenceInSeconds(
      new Date(2021, 6 /* Jul */, 22, 6, 1, 27.976),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 29.973),
      { roundingMethod: "ceil" },
    );
    expect(result).toBe(-2);
  });

  it("returns a 2 with `ceil` passed in as a rounding method", () => {
    const result = differenceInSeconds(
      new Date(2021, 6 /* Jul */, 22, 6, 1, 29.973),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 27.976),
      { roundingMethod: "ceil" },
    );
    expect(result).toBe(2);
  });

  it("accepts timestamps", () => {
    const result = differenceInSeconds(
      new Date(2014, 8 /* Sep */, 5, 18, 30, 45).getTime(),
      new Date(2014, 8 /* Sep */, 5, 18, 30, 15).getTime(),
    );
    expect(result).toBe(30);
  });

  describe("edge cases", () => {
    it("the difference is less than a second, but the given dates are in different calendar seconds", () => {
      const result = differenceInSeconds(
        new Date(2014, 8 /* Sep */, 5, 12, 30, 12),
        new Date(2014, 8 /* Sep */, 5, 12, 30, 11, 999),
      );
      expect(result).toBe(0);
    });

    it("the same for the swapped dates but a different result as a resulf of the default rounding method `trunc`", () => {
      const result = differenceInSeconds(
        new Date(2014, 8 /* Sep */, 5, 12, 30, 11, 999),
        new Date(2014, 8 /* Sep */, 5, 12, 30, 12),
      );
      expect(result).toBe(0);
    });

    it("the difference is an integral number of seconds", () => {
      const result = differenceInSeconds(
        new Date(2014, 8 /* Sep */, 5, 12, 30, 25),
        new Date(2014, 8 /* Sep */, 5, 12, 30, 15),
      );
      expect(result).toBe(10);
    });

    it("the given dates are the same", () => {
      const result = differenceInSeconds(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      const result = differenceInSeconds(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(!isNegativeZero(result)).toBe(true);
    });

    it("does not return -0 when the given dates have milliseconds difference", () => {
      const result = differenceInSeconds(
        new Date(2014, 8 /* Sep */, 5, 0, 0, 0, 973),
        new Date(2014, 8 /* Sep */, 5, 0, 0, 0, 976),
      );
      expect(!isNegativeZero(result)).toBe(true);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInSeconds(
      new Date(NaN),
      new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInSeconds(
      new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInSeconds(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});

function isNegativeZero(x: number): boolean {
  return x === 0 && 1 / x < 0;
}
