import { describe, expect, it } from "vitest";
import { isWeekend } from "./index.js";

describe("isWeekend", () => {
  it("returns true if the given date is in a weekend", () => {
    const result = isWeekend(new Date(2014, 9 /* Oct */, 5));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not in a weekend", () => {
    const result = isWeekend(new Date(2014, 9 /* Oct */, 6));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isWeekend(new Date(2014, 9 /* Oct */, 5).getTime());
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });
});
