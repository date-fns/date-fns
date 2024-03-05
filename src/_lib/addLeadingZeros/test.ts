/* eslint-env mocha */

import assert from "node:assert";
import { describe, it, expect } from "vitest";
import { addLeadingZeros } from "./index.js";

describe("addLeadingZeros", () => {
  it("adds leading zeros when number has fewer digits than target length", () => {
    expect(addLeadingZeros(7, 3)).toBe("007");
    assert.strictEqual(addLeadingZeros(7, 2), "07");
    assert.strictEqual(addLeadingZeros(7, 1), "7");
    assert.strictEqual(addLeadingZeros(7, 0), "7");
    assert.strictEqual(addLeadingZeros(7, -1), "7");
  });
});
