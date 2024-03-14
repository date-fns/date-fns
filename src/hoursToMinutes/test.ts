import { describe, expect, it } from "vitest";
import { hoursToMinutes } from "./index.js";

describe("hoursToMinutes", () => {
  it("converts hours to minutes", () => {
    expect(hoursToMinutes(1)).toBe(60);
    expect(hoursToMinutes(2)).toBe(120);
  });

  it("uses floor rounding", () => {
    expect(hoursToMinutes(0.123)).toBe(7);
  });

  it("handles border values", () => {
    expect(hoursToMinutes(1.5)).toBe(90);
    expect(hoursToMinutes(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(hoursToMinutes(1.11)).toBe(66);
    expect(hoursToMinutes(1.44)).toBe(86);
    expect(hoursToMinutes(-1.11)).toBe(-66);
    expect(hoursToMinutes(-1.44)).toBe(-86);
  });
});
