import { describe, expect, it } from "vitest";
import { monthsToQuarters } from "./index.js";

describe("monthsToQuarters", () => {
  it("converts months to quarters", () => {
    expect(monthsToQuarters(3)).toBe(1);
    expect(monthsToQuarters(6)).toBe(2);
  });

  it("uses floor rounding", () => {
    expect(monthsToQuarters(4)).toBe(1);
    expect(monthsToQuarters(2)).toBe(0);
  });

  it("handles border values", () => {
    expect(monthsToQuarters(3.5)).toBe(1);
    expect(monthsToQuarters(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(monthsToQuarters(12.34)).toBe(4);
    expect(monthsToQuarters(-12.34)).toBe(-4);
  });
});
