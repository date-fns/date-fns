import { describe, expect, it } from "vitest";
import { compareAsc } from "./index.js";

describe("compareAsc", () => {
  it("returns 0 if the given dates are equal", () => {
    const result = compareAsc(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10),
    );
    expect(result).toBe(0);
  });

  it("returns -1 if the first date is before the second one", () => {
    const result = compareAsc(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
    );
    expect(result).toBe(-1);
  });

  it("returns 1 if the first date is after the second one", () => {
    const result = compareAsc(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11),
    );
    expect(result).toBe(1);
  });

  it("sorts the dates array in the chronological order when function is passed as the argument to Array.prototype.sort()", () => {
    const unsortedArray = [
      new Date(1995, 6 /* Jul */, 2),
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
    ];

    const sortedArray = [
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1995, 6 /* Jul */, 2),
    ];

    unsortedArray.sort(compareAsc);
    const result = unsortedArray;

    expect(result).toEqual(sortedArray);
  });

  it("accepts timestamps", () => {
    const result = compareAsc(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1989, 6 /* Jul */, 10).getTime(),
    );
    expect(result).toBe(-1);
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = compareAsc(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = compareAsc(new Date(1989, 6 /* Jul */, 10), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = compareAsc(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
