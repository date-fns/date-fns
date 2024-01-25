/* eslint-env mocha */

import assert from "node:assert";
import { describe, expect, it } from "vitest";
import { millisecondsToHours } from "./index.js";

describe("millisecondsToHours", () => {
  it("converts milliseconds to hours", () => {
    assert(millisecondsToHours(3600000) === 1);
    assert(millisecondsToHours(7200000) === 2);
  });

  it("uses floor rounding", () => {
    assert(millisecondsToHours(3600001) === 1);
    assert(millisecondsToHours(3599999) === 0);
  });

  it("handles border values", () => {
    assert(millisecondsToHours(3600000.5) === 1);
    assert(millisecondsToHours(0) === 0);
  });

  it("properly works with negative numbers", () => {
    expect(millisecondsToHours(123456789)).toBe(34);
    expect(millisecondsToHours(-123456789)).toBe(-34);
  });
});
