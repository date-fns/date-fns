/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { isExisting } from "./index.js";

describe("isValid", () => {
  it("returns true if the given date is valid", () => {
    const result = isExisting(2018, 0, 31);
    assert(result === true);
  });

  it("returns false if the given date is invalid", () => {
    const result = isExisting(2018, 1 /* Feb */, 31);
    assert(result === false);
  });
});
