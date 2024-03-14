import { describe, expect, it } from "vitest";
import { hoursToSeconds } from "./index.js";

describe("hoursToSeconds", () => {
  it("converts hours to seconds", () => {
    expect(hoursToSeconds(1)).toBe(3600);
    expect(hoursToSeconds(2)).toBe(7200);
  });

  it("uses floor rounding", () => {
    expect(hoursToSeconds(0.123)).toBe(442);
  });

  it("handles border values", () => {
    expect(hoursToSeconds(1.5)).toBe(5400);
    expect(hoursToSeconds(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(hoursToSeconds(1.11)).toBe(3996);
    expect(hoursToSeconds(1.44)).toBe(5184);
    expect(hoursToSeconds(-1.11)).toBe(-3996);
    expect(hoursToSeconds(-1.44)).toBe(-5184);
  });
});
