import { describe, expect, it } from "vitest";
import { quartersToMonths } from "./index.js";

describe("quartersToMonths", () => {
  it("converts quarters to months", () => {
    expect(quartersToMonths(1)).toBe(3);
    expect(quartersToMonths(2)).toBe(6);
  });

  it("uses floor rounding", () => {
    expect(quartersToMonths(1.5)).toBe(4);
    expect(quartersToMonths(0.3)).toBe(0);
  });

  it("handles border values", () => {
    expect(quartersToMonths(0.4)).toBe(1);
    expect(quartersToMonths(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(quartersToMonths(12.34)).toBe(37);
    expect(quartersToMonths(-12.34)).toBe(-37);
  });
});
