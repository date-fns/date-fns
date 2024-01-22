/* eslint-env mocha */

import assert from "node:assert";
import { describe, expect, it } from "vitest";
import { quartersToMonths } from "./index.js";

describe("quartersToMonths", () => {
  it("converts quarters to months", () => {
    assert(quartersToMonths(1) === 3);
    assert(quartersToMonths(2) === 6);
  });

  it("uses floor rounding", () => {
    assert(quartersToMonths(1.5) === 4);
    assert(quartersToMonths(0.3) === 0);
  });

  it("handles border values", () => {
    assert(quartersToMonths(0.4) === 1);
    assert(quartersToMonths(0) === 0);
  });

  it("properly works with negative numbers", () => {
    expect(quartersToMonths(12.34)).toBe(37);
    expect(quartersToMonths(-12.34)).toBe(-37);
  });
});
