import { describe, expect, it } from "vitest";
import { secondsToMinutes } from "./index.js";

describe("secondsToMinutes", () => {
  it("converts seconds to minutes", () => {
    expect(secondsToMinutes(60)).toBe(1);
    expect(secondsToMinutes(120)).toBe(2);
  });

  it("uses floor rounding", () => {
    expect(secondsToMinutes(61)).toBe(1);
    expect(secondsToMinutes(59)).toBe(0);
  });

  it("handles border values", () => {
    expect(secondsToMinutes(60.5)).toBe(1);
    expect(secondsToMinutes(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(secondsToMinutes(123456)).toBe(2057);
    expect(secondsToMinutes(-123456)).toBe(-2057);
  });
});
