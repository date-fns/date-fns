import { describe, expect, it } from "vitest";
import { monthsToYears } from "./index.js";

describe("monthsToYears", () => {
  it("converts months to years", () => {
    expect(monthsToYears(12)).toBe(1);
    expect(monthsToYears(24)).toBe(2);
  });

  it("uses floor rounding", () => {
    expect(monthsToYears(13)).toBe(1);
    expect(monthsToYears(11)).toBe(0);
  });

  it("handles border values", () => {
    expect(monthsToYears(12.5)).toBe(1);
    expect(monthsToYears(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(monthsToYears(1234567)).toBe(102880);
    expect(monthsToYears(-1234567)).toBe(-102880);
  });
});
