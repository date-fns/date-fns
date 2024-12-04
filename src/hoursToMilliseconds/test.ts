import { describe, expect, it } from "vitest";
import { hoursToMilliseconds } from "./index.js";

describe("hoursToMilliseconds", () => {
  it("converts hours to milliseconds", () => {
    expect(hoursToMilliseconds(1)).toBe(3600000);
    expect(hoursToMilliseconds(2)).toBe(7200000);
  });

  it("uses floor rounding", () => {
    expect(hoursToMilliseconds(0.123456)).toBe(444441);
  });

  it("handles border values", () => {
    expect(hoursToMilliseconds(1.5)).toBe(5400000);
    expect(hoursToMilliseconds(0)).toBe(0);
  });

  it("works with negative numbers properly", () => {
    expect(hoursToMilliseconds(1.234567)).toBe(4444441);
    expect(hoursToMilliseconds(-1.234567)).toBe(-4444441);
  });
});
