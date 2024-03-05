/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import sinon from "sinon";
import { endOfTomorrow } from "./index.js";

describe("endOfTomorrow", () => {
  it("returns tomorrow with the time settled to 23:59:59.999", () => {
    const clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime(),
    );

    const result = endOfTomorrow();
    assert.deepStrictEqual(
      result,
      new Date(2014, 8 /* Sep */, 26, 23, 59, 59, 999),
    );

    clock.restore();
  });

  it("handles dates before 100 AD", () => {
    const now = new Date(0);
    now.setFullYear(14, 8 /* Sep */, 25);
    now.setHours(14, 30, 45, 500);
    const clock = sinon.useFakeTimers(now.getTime());

    const expectedResult = new Date(0);
    expectedResult.setFullYear(14, 8 /* Sep */, 26);
    expectedResult.setHours(23, 59, 59, 999);
    const result = endOfTomorrow();
    assert.deepStrictEqual(result, expectedResult);

    clock.restore();
  });
});
