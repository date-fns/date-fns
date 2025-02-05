import { describe, expect, it } from "vitest";
import { yearsToMonths } from "./index.js";

describe("yearsToMonths", () => {
  it("converts years to months", () => {
    expect(yearsToMonths(1)).toBe(12);
    expect(yearsToMonths(2)).toBe(24);
  });

  it("uses floor rounding", () => {
    expect(yearsToMonths(1.7)).toBe(20);
    expect(yearsToMonths(0.1)).toBe(1);
  });

  it("handles border values", () => {
    expect(yearsToMonths(1.5)).toBe(18);
    expect(yearsToMonths(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(yearsToMonths(1.23)).toBe(14);
    expect(yearsToMonths(-1.23)).toBe(-14);
  });
});
