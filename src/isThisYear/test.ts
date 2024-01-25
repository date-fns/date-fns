/* eslint-env mocha */

import assert from "node:assert";
import { afterEach, beforeEach, describe, it } from "vitest";
import sinon from "sinon";
import { isThisYear } from "./index.js";

describe("isThisYear", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date and the current date have the same year", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    assert(isThisYear(date) === true);
  });

  it("returns false if the given date and the current date have different years", () => {
    const date = new Date(2015, 6 /* Jul */, 2);
    assert(isThisYear(date) === false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime();
    assert(isThisYear(date) === true);
  });
});
