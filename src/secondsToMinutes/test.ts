/* eslint-env mocha */

import assert from "node:assert";
import { describe, expect, it } from "vitest";
import { secondsToMinutes } from "./index.js";

describe("secondsToMinutes", () => {
  it("converts seconds to minutes", () => {
    assert(secondsToMinutes(60) === 1);
    assert(secondsToMinutes(120) === 2);
  });

  it("uses floor rounding", () => {
    assert(secondsToMinutes(61) === 1);
    assert(secondsToMinutes(59) === 0);
  });

  it("handles border values", () => {
    assert(secondsToMinutes(60.5) === 1);
    assert(secondsToMinutes(0) === 0);
  });

  it("properly works with negative numbers", () => {
    expect(secondsToMinutes(123456)).toBe(2057);
    expect(secondsToMinutes(-123456)).toBe(-2057);
  });
});
