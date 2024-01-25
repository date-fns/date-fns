/* eslint-env mocha */

import assert from "node:assert";
import { describe, expect, it } from "vitest";
import { hoursToSeconds } from "./index.js";

describe("hoursToSeconds", () => {
  it("converts hours to seconds", () => {
    assert(hoursToSeconds(1) === 3600);
    assert(hoursToSeconds(2) === 7200);
  });

  it("uses floor rounding", () => {
    assert(hoursToSeconds(0.123) === 442);
  });

  it("handles border values", () => {
    assert(hoursToSeconds(1.5) === 5400);
    assert(hoursToSeconds(0) === 0);
  });

  it("properly works with negative numbers", () => {
    expect(hoursToSeconds(1.11)).toBe(3996);
    expect(hoursToSeconds(1.44)).toBe(5184);
    expect(hoursToSeconds(-1.11)).toBe(-3996);
    expect(hoursToSeconds(-1.44)).toBe(-5184);
  });
});
