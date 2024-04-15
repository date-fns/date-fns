import { describe, expect, it } from "vitest";
import { isSameHour } from "./index.js";

describe("isSameHour", () => {
  it("returns true if the given dates have the same hour", () => {
    const result = isSameHour(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 6, 30),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates have different hours", () => {
    const result = isSameHour(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 5, 0),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameHour(
      new Date(2014, 8 /* Sep */, 4, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameHour(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameHour(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameHour(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });
});
