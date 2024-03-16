import { describe, expect, it } from "vitest";
import { daysToWeeks } from "./index.js";

describe("daysToWeeks", () => {
  it("converts days to weeks", () => {
    expect(daysToWeeks(7)).toBe(1);
    expect(daysToWeeks(14)).toBe(2);
  });

  it("uses trunc rounding", () => {
    expect(daysToWeeks(8)).toBe(1);
    expect(daysToWeeks(6)).toBe(0);
  });

  it("handles border values", () => {
    expect(daysToWeeks(7.5)).toBe(1);
    expect(daysToWeeks(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(daysToWeeks(7)).toBe(1);
    expect(daysToWeeks(-7)).toBe(-1);

    expect(daysToWeeks(14)).toBe(2);
    expect(daysToWeeks(-14)).toBe(-2);

    expect(daysToWeeks(8)).toBe(1);
    expect(daysToWeeks(-8)).toBe(-1);

    expect(daysToWeeks(6)).toBe(0);
    expect(daysToWeeks(-6)).toBe(0);

    expect(daysToWeeks(7.5)).toBe(1);
    expect(daysToWeeks(-7.5)).toBe(-1);
  });
});
