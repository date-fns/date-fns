/* eslint-env mocha */

import assert from "node:assert";
import { describe, expect, it } from "vitest";
import { quartersToYears } from "./index.js";

describe("quartersToYears", () => {
  it("converts quarters to years", () => {
    assert(quartersToYears(4) === 1);
    assert(quartersToYears(8) === 2);
  });

  it("uses floor rounding", () => {
    assert(quartersToYears(5) === 1);
    assert(quartersToYears(3) === 0);
  });

  it("handles border values", () => {
    assert(quartersToYears(4.5) === 1);
    assert(quartersToYears(0) === 0);
  });

  it("properly works with negative numbers", () => {
    expect(quartersToYears(12.34)).toBe(3);
    expect(quartersToYears(-12.34)).toBe(-3);
  });
});
