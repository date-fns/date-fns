import { describe, expect, it } from "vitest";
import { isSameSecond } from "./index.js";

describe("isSameSecond", () => {
  it("returns true if the given dates have the same second", () => {
    const result = isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15, 500),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates have different seconds", () => {
    const result = isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 58, 999),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 59),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30, 400).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameSecond(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameSecond(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameSecond(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });
});
