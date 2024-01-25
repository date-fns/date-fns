/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { fromUnixTime } from "./index.js";

describe("fromUnixTime", () => {
  it("returns the date derived from the given UNIX timestamp", () => {
    const result = fromUnixTime(1330515499);
    assert(result.getTime() === 1330515499000);
  });

  it("returns invalid if the given timestamp is invalid", () => {
    const result = fromUnixTime(NaN);
    assert(isNaN(result.getTime()));
  });
});
