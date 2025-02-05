import { describe, expect, it } from "vitest";
import { millisecondsToMinutes } from "./index.js";

describe("millisecondsToMinutes", () => {
  it("converts milliseconds to minutes", () => {
    expect(millisecondsToMinutes(60000)).toBe(1);
    expect(millisecondsToMinutes(120000)).toBe(2);
  });

  it("uses floor rounding", () => {
    expect(millisecondsToMinutes(60001)).toBe(1);
    expect(millisecondsToMinutes(59999)).toBe(0);
  });

  it("handles border values", () => {
    expect(millisecondsToMinutes(60000.5)).toBe(1);
    expect(millisecondsToMinutes(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(millisecondsToMinutes(123456)).toBe(2);
    expect(millisecondsToMinutes(-123456)).toBe(-2);
  });
});
