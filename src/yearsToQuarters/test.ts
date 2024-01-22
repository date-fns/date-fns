/* eslint-env mocha */

import assert from "node:assert";
import { describe, expect, it } from "vitest";
import { yearsToQuarters } from "./index.js";

describe("yearsToQuarters", () => {
  it("converts years to quarters", () => {
    assert(yearsToQuarters(1) === 4);
    assert(yearsToQuarters(2) === 8);
  });

  it("uses floor rounding", () => {
    assert(yearsToQuarters(1.3) === 5);
    assert(yearsToQuarters(0.2) === 0);
  });

  it("handles border values", () => {
    assert(yearsToQuarters(1.5) === 6);
    assert(yearsToQuarters(0) === 0);
  });

  it("properly works with negative numbers", () => {
    expect(yearsToQuarters(1.23)).toBe(4);
    expect(yearsToQuarters(-1.23)).toBe(-4);
  });
});
