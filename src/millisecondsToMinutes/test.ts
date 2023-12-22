/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { millisecondsToMinutes } from "./index.js";

describe("millisecondsToMinutes", () => {
  it("converts milliseconds to minutes", () => {
    assert(millisecondsToMinutes(60000) === 1);
    assert(millisecondsToMinutes(120000) === 2);
  });

  it("uses floor rounding", () => {
    assert(millisecondsToMinutes(60001) === 1);
    assert(millisecondsToMinutes(59999) === 0);
  });

  it("handles border values", () => {
    assert(millisecondsToMinutes(60000.5) === 1);
    assert(millisecondsToMinutes(0) === 0);
  });
});
