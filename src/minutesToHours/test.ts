import { describe, expect, it } from "vitest";
import { minutesToHours } from "./index.js";

describe("minuteToHours", () => {
  it("converts minutes to hours", () => {
    expect(minutesToHours(60)).toBe(1);
    expect(minutesToHours(120)).toBe(2);
  });

  it("uses floor rounding", () => {
    expect(minutesToHours(61)).toBe(1);
    expect(minutesToHours(59)).toBe(0);
  });

  it("handles border values", () => {
    expect(minutesToHours(60.5)).toBe(1);
    expect(minutesToHours(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(minutesToHours(123456)).toBe(2057);
    expect(minutesToHours(-123456)).toBe(-2057);
  });
});
