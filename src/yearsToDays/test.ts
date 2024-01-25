/* eslint-env mocha */

import assert from "node:assert";
import { describe, expect, it } from "vitest";
import { yearsToDays } from "./index";

describe("yearsToDays", () => {
  it("converts years to days", () => {
    assert(yearsToDays(1) === 365);
    assert(yearsToDays(2) === 730);
  });

  it("uses floor rounding", () => {
    assert(yearsToDays(1.7) === 620);
    assert(yearsToDays(0.1) === 36);
  });

  it("handles border values", () => {
    assert(yearsToDays(1.5) === 547);
    assert(yearsToDays(0) === 0);
  });

  it("properly works with negative numbers", () => {
    expect(yearsToDays(1.23)).toBe(449);
    expect(yearsToDays(-1.23)).toBe(-449);
  });
});
