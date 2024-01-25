/* eslint-env mocha */

import assert from "node:assert";
import { describe, expect, it } from "vitest";
import { hoursToMinutes } from "./index.js";

describe("hoursToMinutes", () => {
  it("converts hours to minutes", () => {
    assert(hoursToMinutes(1) === 60);
    assert(hoursToMinutes(2) === 120);
  });

  it("uses floor rounding", () => {
    assert(hoursToMinutes(0.123) === 7);
  });

  it("handles border values", () => {
    assert(hoursToMinutes(1.5) === 90);
    assert(hoursToMinutes(0) === 0);
  });

  it("properly works with negative numbers", () => {
    expect(hoursToMinutes(1.11)).toBe(66);
    expect(hoursToMinutes(1.44)).toBe(86);
    expect(hoursToMinutes(-1.11)).toBe(-66);
    expect(hoursToMinutes(-1.44)).toBe(-86);
  });
});
