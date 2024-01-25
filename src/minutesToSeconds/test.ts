/* eslint-env mocha */

import assert from "node:assert";
import { describe, expect, it } from "vitest";
import { minutesToSeconds } from "./index.js";

describe("minutesToSeconds", () => {
  it("converts minutes to seconds", () => {
    assert(minutesToSeconds(1) === 60);
    assert(minutesToSeconds(2) === 120);
  });

  it("uses floor rounding", () => {
    assert(minutesToSeconds(0.123456) === 7);
  });

  it("handles border values", () => {
    assert(minutesToSeconds(1.5) === 90);
    assert(minutesToSeconds(0) === 0);
  });

  it("properly works with negative numbers", () => {
    expect(minutesToSeconds(1.23)).toBe(73);
    expect(minutesToSeconds(-1.23)).toBe(-73);
  });
});
