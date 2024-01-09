/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { minutesToHours } from "./index.js";

describe("minuteToHours", () => {
  it("converts minutes to hours", () => {
    assert(minutesToHours(60) === 1);
    assert(minutesToHours(120) === 2);
  });

  it("uses floor rounding", () => {
    assert(minutesToHours(61) === 1);
    assert(minutesToHours(59) === 0);
  });

  it("handles border values", () => {
    assert(minutesToHours(60.5) === 1);
    assert(minutesToHours(0) === 0);
  });
});
