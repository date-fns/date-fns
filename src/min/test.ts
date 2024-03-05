/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { min } from "./index.js";

describe("min", () => {
  it("returns the earliest date", () => {
    const result = min([
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11),
    ]);
    assert.deepStrictEqual(result, new Date(1987, 1 /* Feb */, 11));
  });

  it("accepts array with more than 2 entries", () => {
    const result = min([
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1985, 6 /* Jul */, 2),
      new Date(1990, 0 /* Jan */, 1),
    ]);
    assert.deepStrictEqual(result, new Date(1985, 6 /* Jul */, 2));
  });

  it("accepts timestamps", () => {
    const result = min([
      new Date(1989, 6 /* Jul */, 10).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime(),
    ]);
    assert.deepStrictEqual(result, new Date(1987, 1 /* Feb */, 11));
  });

  it("returns `Invalid Date` if any given date is invalid", () => {
    const result = min([
      new Date(1989, 6 /* Jul */, 10),
      new Date(NaN),
      new Date(1987, 1 /* Feb */, 11),
    ]);
    assert(isNaN(+result));
  });

  it("returns `Invalid Date` for empty array", () => {
    const result = min([]);
    assert(isNaN(+result));
  });
});
