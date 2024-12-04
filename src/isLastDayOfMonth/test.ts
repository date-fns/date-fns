import { describe, expect, it } from "vitest";
import { isLastDayOfMonth } from "./index.js";

describe("isLastDayOfMonth", () => {
  it("returns true if the given date is in the last day of month", () => {
    const result = isLastDayOfMonth(new Date(2014, 9 /* Oct */, 31));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not in the last day of month", () => {
    const result = isLastDayOfMonth(new Date(2014, 9 /* Oct */, 30));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 9 /* Oct */, 31).getTime();
    const result = isLastDayOfMonth(date);
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isLastDayOfMonth(new Date(NaN));
    expect(result).toBe(false);
  });
});
