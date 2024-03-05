/* eslint-env mocha */

import assert from "node:assert";
import { describe, expect, it } from "vitest";
import { getISOWeeksInYear } from "./index.js";

describe("getISOWeeksInYear", () => {
  it("returns the number of ISO weeks in the ISO week-numbering year of the given date", () => {
    const result = getISOWeeksInYear(new Date(2015, 1 /* Feb */, 11));
    expect(result).toBe(53);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2003, 11 /* Dec */, 30);
    const result = getISOWeeksInYear(+date);
    expect(result).toBe(53);
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(4, 0 /* Jan */, 4);
    initialDate.setHours(0, 0, 0, 0);
    const result = getISOWeeksInYear(initialDate);
    expect(result).toBe(53);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getISOWeeksInYear(new Date(NaN));
    assert(isNaN(result));
  });

  it("properly works with negative numbers", () => {
    expect(getISOWeeksInYear(new Date(2015, 1 /* Feb */, 11))).toBe(53);
    // The number must differ. The Gregorian calendar repeats every 400 years,
    // so the number of ISO weeks as well. -2015 corresponds to 385 AD where
    // there was 52 ISO weeks.
    expect(getISOWeeksInYear(new Date(-2015, 1 /* Feb */, 11))).toBe(52);
    expect(getISOWeeksInYear(new Date(385, 1 /* Feb */, 11))).toBe(52);
  });
});
