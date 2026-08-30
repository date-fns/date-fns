import { describe, expect, it } from "vitest";
import { allClosestIndicesTo } from "./index.ts";

describe("allClosestIndicesTo", () => {
  it("returns the index of the single closest date", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    const result = allClosestIndicesTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2),
    ]);
    expect(result).toEqual([0]);
  });

  it("returns every index that shares the minimum distance", () => {
    const date = new Date(2015, 8 /* Sep */, 6);
    const result = allClosestIndicesTo(date, [
      new Date(2015, 8 /* Sep */, 5),
      new Date(2015, 8 /* Sep */, 7),
      new Date(2015, 8 /* Sep */, 10),
    ]);
    expect(result).toEqual([0, 1]);
  });

  it("preserves the input order of the tied indices", () => {
    const date = new Date(2014, 6 /* Jul */, 2, 6, 30, 4, 500);
    const result = allClosestIndicesTo(date, [
      new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 100),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 900),
    ]);
    expect(result).toEqual([0, 1]);
  });

  it("accepts timestamps", () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime();
    const result = allClosestIndicesTo(date, [
      new Date(2015, 7 /* Aug */, 31).getTime(),
      new Date(2012, 6 /* Jul */, 2).getTime(),
    ]);
    expect(result).toEqual([0]);
  });

  it("returns an empty array if the given array is empty", () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime();
    const result = allClosestIndicesTo(date, []);
    expect(result).toEqual([]);
  });

  it("returns an empty array if the given date is `Invalid Date`", () => {
    const date = new Date(NaN);
    const result = allClosestIndicesTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2),
    ]);
    expect(result).toEqual([]);
  });

  it("returns an empty array if any date in the given array is `Invalid Date`", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    const result = allClosestIndicesTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(NaN),
      new Date(2012, 6 /* Jul */, 2),
    ]);
    expect(result).toEqual([]);
  });
});
