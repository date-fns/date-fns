/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { monthsToQuarters } from "./index.js";

describe("monthsToQuarters", () => {
  it("converts months to quarters", () => {
    assert(monthsToQuarters(3) === 1);
    assert(monthsToQuarters(6) === 2);
  });

  it("uses floor rounding", () => {
    assert(monthsToQuarters(4) === 1);
    assert(monthsToQuarters(2) === 0);
  });

  it("handles border values", () => {
    assert(monthsToQuarters(3.5) === 1);
    assert(monthsToQuarters(0) === 0);
  });
});
