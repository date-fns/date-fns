import { describe, expect, it } from "vitest";
import { getISOWeek } from "./index.js";

describe("getISOWeek", () => {
  it("returns the ISO week of the given date", () => {
    const result = getISOWeek(new Date(2005, 0 /* Jan */, 2));
    expect(result).toBe(53);
  });

  it("accepts a timestamp", () => {
    const result = getISOWeek(new Date(2008, 11 /* Dec */, 29).getTime());
    expect(result).toBe(1);
  });

  describe("edge cases", () => {
    it("returns the ISO week at 1 January 2016", () => {
      const result = getISOWeek(new Date(2016, 0 /* Jan */, 1));
      expect(result).toBe(53);
    });

    it("returns the ISO week at 1 May 2016", () => {
      const result = getISOWeek(new Date(2016, 4 /* May */, 1));
      expect(result).toBe(17);
    });

    it("returns the ISO week at 2 May 2016", () => {
      const result = getISOWeek(new Date(2016, 4 /* May */, 2));
      expect(result).toBe(18);
    });

    it("returns the ISO week at 31 May 2016", () => {
      const result = getISOWeek(new Date(2016, 4 /* May */, 31));
      expect(result).toBe(22);
    });

    it("properly works with negative numbers", () => {
      expect(getISOWeek(new Date(2014, 6 /* Jul */, 14))).toBe(29);
      expect(getISOWeek(new Date(-2014, 6 /* Jul */, 14))).toBe(29);
    });
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(7, 11 /* Dec */, 30);
    initialDate.setHours(0, 0, 0, 0);
    const result = getISOWeek(initialDate);
    expect(result).toBe(52);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getISOWeek(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
