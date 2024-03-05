/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { isTuesday } from "./index.js";

describe("isTuesday", () => {
  it("returns true if the given date is Tuesday", () => {
    const result = isTuesday(new Date(2014, 8 /* Sep */, 23));
    assert(result === true);
  });

  it("returns false if the given date is not Tuesday", () => {
    const result = isTuesday(new Date(2014, 8 /* Sep */, 25));
    assert(result === false);
  });

  it("accepts a timestamp", () => {
    const result = isTuesday(new Date(2014, 1 /* Feb */, 11).getTime());
    assert(result === true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isTuesday(new Date(NaN));
    assert(result === false);
  });
});
