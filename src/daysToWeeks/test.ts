/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { daysToWeeks } from "./index.js";

describe("daysToWeeks", () => {
  it("converts days to weeks", () => {
    assert(daysToWeeks(7) === 1);
    assert(daysToWeeks(14) === 2);
  });

  it("uses floor rounding", () => {
    assert(daysToWeeks(8) === 1);
    assert(daysToWeeks(6) === 0);
  });

  it("handles border values", () => {
    assert(daysToWeeks(7.5) === 1);
    assert(daysToWeeks(0) === 0);
  });
});
