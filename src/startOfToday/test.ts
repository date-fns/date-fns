/* eslint-env mocha */

import assert from "node:assert";
import { afterEach, beforeEach, describe, it } from "vitest";
import sinon from "sinon";
import { startOfToday } from "./index.js";

describe("startOfToday", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime(),
    );
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns the current date with the time setted to 00:00:00", () => {
    const result = startOfToday();
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 25));
  });
});
