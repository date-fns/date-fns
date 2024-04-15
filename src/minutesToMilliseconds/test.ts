import { describe, expect, it } from "vitest";
import { minutesToMilliseconds } from "./index.js";

describe("minutesToMilliseconds", () => {
  it("converts minutes to milliseconds", () => {
    expect(minutesToMilliseconds(1)).toBe(60000);
    expect(minutesToMilliseconds(2)).toBe(120000);
  });

  it("uses floor rounding", () => {
    expect(minutesToMilliseconds(0.123456)).toBe(7407);
  });

  it("handles border values", () => {
    expect(minutesToMilliseconds(1.5)).toBe(90000);
    expect(minutesToMilliseconds(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(minutesToMilliseconds(1.123456)).toBe(67407);
    expect(minutesToMilliseconds(-1.123456)).toBe(-67407);
  });
});
