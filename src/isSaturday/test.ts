import { describe, expect, it } from "vitest";
import { isSaturday } from "./index.js";

describe("isSaturday", () => {
  it("returns true if the given date is Saturday", () => {
    const result = isSaturday(new Date(2014, 8 /* Sep */, 27));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not Saturday", () => {
    const result = isSaturday(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSaturday(new Date(2014, 1 /* Feb */, 15).getTime());
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isSaturday(new Date(NaN));
    expect(result).toBe(false);
  });
});
