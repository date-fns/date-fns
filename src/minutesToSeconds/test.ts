import { describe, expect, it } from "vitest";
import { minutesToSeconds } from "./index.js";

describe("minutesToSeconds", () => {
  it("converts minutes to seconds", () => {
    expect(minutesToSeconds(1)).toBe(60);
    expect(minutesToSeconds(2)).toBe(120);
  });

  it("uses floor rounding", () => {
    expect(minutesToSeconds(0.123456)).toBe(7);
  });

  it("handles border values", () => {
    expect(minutesToSeconds(1.5)).toBe(90);
    expect(minutesToSeconds(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(minutesToSeconds(1.23)).toBe(73);
    expect(minutesToSeconds(-1.23)).toBe(-73);
  });
});
