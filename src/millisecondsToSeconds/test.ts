import { describe, expect, it } from "vitest";
import { millisecondsToSeconds } from "./index.js";

describe("millisecondsToSeconds", () => {
  it("converts milliseconds to seconds", () => {
    expect(millisecondsToSeconds(1000)).toBe(1);
    expect(millisecondsToSeconds(2000)).toBe(2);
  });

  it("uses floor rounding", () => {
    expect(millisecondsToSeconds(1001)).toBe(1);
    expect(millisecondsToSeconds(999)).toBe(0);
  });

  it("handles border values", () => {
    expect(millisecondsToSeconds(1000.5)).toBe(1);
    expect(millisecondsToSeconds(0)).toBe(0);
  });

  it("properly works with negative numbers", () => {
    expect(millisecondsToSeconds(123456789)).toBe(123456);
    expect(millisecondsToSeconds(-123456789)).toBe(-123456);
  });
});
