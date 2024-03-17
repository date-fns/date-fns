import { describe, expect, it } from "vitest";
import { getDaysInMonth } from "./index.js";

describe("getDaysInMonth", () => {
  it("returns the number of days in the month of the given date", () => {
    const result = getDaysInMonth(new Date(2100, 1 /* Feb */, 11));
    expect(result).toBe(28);
  });

  it("works for the February of a leap year", () => {
    const result = getDaysInMonth(new Date(2000, 1 /* Feb */, 11));
    expect(result).toBe(29);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime();
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("handles dates before 100 AD", () => {
    const date = new Date(0);
    date.setFullYear(0, 1 /* Feb */, 15);
    date.setHours(0, 0, 0, 0);
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
