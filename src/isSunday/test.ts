import { describe, expect, it } from "vitest";
import { isSunday } from "./index.js";

describe("isSunday", () => {
  it("returns true if the given date is Sunday", () => {
    const result = isSunday(new Date(2014, 8 /* Sep */, 21));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not Sunday", () => {
    const result = isSunday(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSunday(new Date(2014, 1 /* Feb */, 9).getTime());
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isSunday(new Date(NaN));
    expect(result).toBe(false);
  });
});
