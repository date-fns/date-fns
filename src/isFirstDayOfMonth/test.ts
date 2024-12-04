import { describe, expect, it } from "vitest";
import { isFirstDayOfMonth } from "./index.js";

describe("isFirstDayOfMonth", () => {
  it("returns true if the given date is in the last day of month", () => {
    const result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 1));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not in the last day of month", () => {
    const result = isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 2));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 9 /* Oct */, 1).getTime();
    const result = isFirstDayOfMonth(date);
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isFirstDayOfMonth(new Date(NaN));
    expect(result).toBe(false);
  });
});
