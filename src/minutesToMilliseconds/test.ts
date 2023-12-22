/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
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
});
