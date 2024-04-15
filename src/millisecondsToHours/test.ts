import { describe, expect, it } from "vitest";
import { millisecondsToHours } from "./index.js";

describe("millisecondsToHours", () => {
  it("converts milliseconds to hours", () => {
    expect(millisecondsToHours(3600000)).toBe(1);
    expect(millisecondsToHours(7200000)).toBe(2);
  });

  it("uses floor rounding", () => {
    expect(millisecondsToHours(3600001)).toBe(1);
    expect(millisecondsToHours(3599999)).toBe(0);
  });

  it("handles border values", () => {
    expect(millisecondsToHours(3600000.5)).toBe(1);
    expect(millisecondsToHours(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(millisecondsToHours(123456789)).toBe(34);
    expect(millisecondsToHours(-123456789)).toBe(-34);
  });
});
