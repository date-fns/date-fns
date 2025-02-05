import { describe, expect, it } from "vitest";
import { weeksToDays } from "./index.js";

describe("weeksToDays", () => {
  it("converts weeks to days", () => {
    expect(weeksToDays(1)).toBe(7);
    expect(weeksToDays(2)).toBe(14);
  });

  it("uses floor rounding", () => {
    expect(weeksToDays(1.5)).toBe(10);
    expect(weeksToDays(0.1)).toBe(0);
  });

  it("handles border values", () => {
    expect(weeksToDays(1.5)).toBe(10);
    expect(weeksToDays(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(weeksToDays(1.23)).toBe(8);
    expect(weeksToDays(-1.23)).toBe(-8);
  });
});
