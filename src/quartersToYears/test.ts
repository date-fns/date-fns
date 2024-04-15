import { describe, expect, it } from "vitest";
import { quartersToYears } from "./index.js";

describe("quartersToYears", () => {
  it("converts quarters to years", () => {
    expect(quartersToYears(4)).toBe(1);
    expect(quartersToYears(8)).toBe(2);
  });

  it("uses floor rounding", () => {
    expect(quartersToYears(5)).toBe(1);
    expect(quartersToYears(3)).toBe(0);
  });

  it("handles border values", () => {
    expect(quartersToYears(4.5)).toBe(1);
    expect(quartersToYears(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(quartersToYears(12.34)).toBe(3);
    expect(quartersToYears(-12.34)).toBe(-3);
  });
});
