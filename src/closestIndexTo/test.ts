import { describe, expect, it } from "vitest";
import { closestIndexTo } from "./index.js";

describe("closestIndexTo", () => {
  it("returns the date index from the given array closest to the given date", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    const result = closestIndexTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2),
    ]);
    expect(result).toBe(0);
  });

  it("works if the closest date from the given array is before the given date", () => {
    const date = new Date(2014, 6 /* Jul */, 2, 6, 30, 4, 500);
    const result = closestIndexTo(date, [
      new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 10),
    ]);
    expect(result).toBe(1);
  });

  it("accepts timestamps", () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime();
    const result = closestIndexTo(date, [
      new Date(2015, 7 /* Aug */, 31).getTime(),
      new Date(2012, 6 /* Jul */, 2).getTime(),
    ]);
    expect(result).toBe(0);
  });

  it("returns undefined if the given array is empty", () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime();
    const result = closestIndexTo(date, []);
    expect(result).toBe(undefined);
  });

  it("returns NaN if the given date is `Invalid Date`", () => {
    const date = new Date(NaN);
    const result = closestIndexTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2),
    ]);
    expect(result != null && isNaN(result)).toBe(true);
  });

  it("returns NaN if any date in the given array is `Invalid Date`", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    const result = closestIndexTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(NaN),
      new Date(2012, 6 /* Jul */, 2),
    ]);
    expect(result != null && isNaN(result)).toBe(true);
  });
});
