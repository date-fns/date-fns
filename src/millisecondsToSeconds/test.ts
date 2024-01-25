/* eslint-env mocha */

import assert from "node:assert";
import { describe, expect, it } from "vitest";
import { millisecondsToSeconds } from "./index.js";

describe("millisecondsToSeconds", () => {
  it("converts milliseconds to seconds", () => {
    assert(millisecondsToSeconds(1000) === 1);
    assert(millisecondsToSeconds(2000) === 2);
  });

  it("uses floor rounding", () => {
    assert(millisecondsToSeconds(1001) === 1);
    assert(millisecondsToSeconds(999) === 0);
  });

  it("handles border values", () => {
    assert(millisecondsToSeconds(1000.5) === 1);
    assert(millisecondsToSeconds(0) === 0);
  });

  it("properly works with negative numbers", () => {
    expect(millisecondsToSeconds(123456789)).toBe(123456);
    expect(millisecondsToSeconds(-123456789)).toBe(-123456);
  });
});
