/* eslint-env mocha */

import assert from "node:assert";
import { describe, expect, it } from "vitest";
import { minutesToMilliseconds } from "./index.js";

describe("minutesToMilliseconds", () => {
  it("converts minutes to milliseconds", () => {
    assert(minutesToMilliseconds(1) === 60000);
    assert(minutesToMilliseconds(2) === 120000);
  });

  it("uses floor rounding", () => {
    assert(minutesToMilliseconds(0.123456) === 7407);
  });

  it("handles border values", () => {
    assert(minutesToMilliseconds(1.5) === 90000);
    assert(minutesToMilliseconds(0) === 0);
  });

  it("properly works with negative numbers", () => {
    expect(minutesToMilliseconds(1.123456)).toBe(67407);
    expect(minutesToMilliseconds(-1.123456)).toBe(-67407);
  });
});
