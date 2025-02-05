import { describe, expect, it } from "vitest";
import { yearsToDays } from "./index.js";

describe("yearsToDays", () => {
  it("converts years to days", () => {
    expect(yearsToDays(1)).toBe(365);
    expect(yearsToDays(2)).toBe(730);
  });

  it("uses floor rounding", () => {
    expect(yearsToDays(1.7)).toBe(620);
    expect(yearsToDays(0.1)).toBe(36);
  });

  it("handles border values", () => {
    expect(yearsToDays(1.5)).toBe(547);
    expect(yearsToDays(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(yearsToDays(1.23)).toBe(449);
    expect(yearsToDays(-1.23)).toBe(-449);
  });
});
