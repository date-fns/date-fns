/* eslint-env mocha */

import assert from "node:assert";
import { describe, it, beforeEach, afterEach } from "vitest";
import sinon from "sinon";
import { isTomorrow } from "./index.js";

describe("isTomorrow", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Aug */, 25).getTime());
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date is tomorrow", () => {
    const result = isTomorrow(new Date(2014, 8 /* Sep */, 26));
    assert(result === true);
  });

  it("returns false if the given date is not tomorrow", () => {
    const result = isTomorrow(new Date(2014, 8 /* Sep */, 25));
    assert(result === false);
  });

  it("accepts a timestamp", () => {
    const result = isTomorrow(new Date(2014, 8 /* Sep */, 26).getTime());
    assert(result === true);
  });
});
