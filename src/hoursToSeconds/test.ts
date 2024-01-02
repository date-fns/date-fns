/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { hoursToSeconds } from "./index.js";

describe("hoursToSeconds", () => {
  it("converts hours to seconds", () => {
    assert(hoursToSeconds(1) === 3600);
    assert(hoursToSeconds(2) === 7200);
  });

  it("uses floor rounding", () => {
    assert(hoursToSeconds(0.123) === 442);
  });

  it("handles border values", () => {
    assert(hoursToSeconds(1.5) === 5400);
    assert(hoursToSeconds(0) === 0);
  });
});
