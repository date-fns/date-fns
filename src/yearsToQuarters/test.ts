import { describe, expect, it } from "vitest";
import { yearsToQuarters } from "./index.js";

describe("yearsToQuarters", () => {
  it("converts years to quarters", () => {
    expect(yearsToQuarters(1)).toBe(4);
    expect(yearsToQuarters(2)).toBe(8);
  });

  it("uses floor rounding", () => {
    expect(yearsToQuarters(1.3)).toBe(5);
    expect(yearsToQuarters(0.2)).toBe(0);
  });

  it("handles border values", () => {
    expect(yearsToQuarters(1.5)).toBe(6);
    expect(yearsToQuarters(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(yearsToQuarters(1.23)).toBe(4);
    expect(yearsToQuarters(-1.23)).toBe(-4);
  });
});
