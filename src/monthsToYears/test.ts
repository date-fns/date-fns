/* eslint-env mocha */

import assert from "node:assert";
import { describe, expect, it } from "vitest";
import { monthsToYears } from "./index.js";

describe("monthsToYears", () => {
  it("converts months to years", () => {
    assert(monthsToYears(12) === 1);
    assert(monthsToYears(24) === 2);
  });

  it("uses floor rounding", () => {
    assert(monthsToYears(13) === 1);
    assert(monthsToYears(11) === 0);
  });

  it("handles border values", () => {
    assert(monthsToYears(12.5) === 1);
    assert(monthsToYears(0) === 0);
  });

  it("properly works with negative numbers", () => {
    expect(monthsToYears(1234567)).toBe(102880);
    expect(monthsToYears(-1234567)).toBe(-102880);
  });
});
