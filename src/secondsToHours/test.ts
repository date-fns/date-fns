import { describe, expect, it } from "vitest";
import { secondsToHours } from "./index.js";

describe("secondsToHours", () => {
  it("converts seconds to hours", () => {
    expect(secondsToHours(3600)).toBe(1);
    expect(secondsToHours(7200)).toBe(2);
  });

  it("uses floor rounding", () => {
    expect(secondsToHours(3601)).toBe(1);
    expect(secondsToHours(3599)).toBe(0);
  });

  it("handles border values", () => {
    expect(secondsToHours(3600.5)).toBe(1);
    expect(secondsToHours(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(secondsToHours(123456)).toBe(34);
    expect(secondsToHours(-123456)).toBe(-34);
  });
});
