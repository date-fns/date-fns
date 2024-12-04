import { describe, expect, it } from "vitest";
import { getISOWeekYear } from "./index.js";

describe("getISOWeekYear", () => {
  it("returns the ISO week-numbering year of the given date", () => {
    const result = getISOWeekYear(new Date(2007, 11 /* Dec */, 31));
    expect(result).toBe(2008);
  });

  it("accepts a timestamp", () => {
    const result = getISOWeekYear(new Date(2005, 0 /* Jan */, 1).getTime());
    expect(result).toBe(2004);
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(7, 11 /* Dec */, 31);
    initialDate.setHours(0, 0, 0, 0);
    const result = getISOWeekYear(initialDate);
    expect(result).toBe(8);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getISOWeekYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
