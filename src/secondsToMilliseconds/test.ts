/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { secondsToMilliseconds } from "./index.js";

describe("secondsToMilliseconds", () => {
  it("converts seconds to milliseconds", () => {
    assert(secondsToMilliseconds(1) === 1000);
    assert(secondsToMilliseconds(2) === 2000);
  });

  it("handles border values", () => {
    assert(secondsToMilliseconds(1.5) === 1500);
    assert(secondsToMilliseconds(0) === 0);
  });
});
