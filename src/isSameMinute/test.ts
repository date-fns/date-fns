import { describe, expect, it } from "vitest";
import { isSameMinute } from "./index.js";

describe("isSameMinute", () => {
  it("returns true if the given dates have the same minute", () => {
    const result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 6, 30),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates have different minutes", () => {
    const result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 59),
      new Date(2014, 8 /* Sep */, 4, 6, 31),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 18, 45).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameMinute(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameMinute(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameMinute(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });
});
