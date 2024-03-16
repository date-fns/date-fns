import { describe, expect, it } from "vitest";
import { closestTo } from "./index.js";

describe("closestTo", () => {
  it("returns the date from the given array closest to the given date", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    const result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2),
    ]);
    expect(result).toEqual(new Date(2015, 7 /* Aug */, 31));
  });

  it("works if the closest date from the given array is before the given date", () => {
    const date = new Date(2014, 6 /* Jul */, 2, 6, 30, 4, 500);
    const result = closestTo(date, [
      new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 10),
    ]);
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900));
  });

  it("accepts timestamps", () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime();
    const result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31).getTime(),
      new Date(2012, 6 /* Jul */, 2).getTime(),
    ]);
    expect(result).toEqual(new Date(2015, 7 /* Aug */, 31));
  });

  it("returns undefined if the given array is empty", () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime();
    const result = closestTo(date, []);
    expect(result).toEqual(undefined);
  });

  it("returns `Invalid Date` if the given date is `Invalid Date`", () => {
    const date = new Date(NaN);
    const result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2),
    ]);

    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if any date in the given array is `Invalid Date`", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    const result = closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(NaN),
      new Date(2012, 6 /* Jul */, 2),
    ]);

    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
