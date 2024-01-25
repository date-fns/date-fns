/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { eachWeekendOfMonth } from "./index.js";

describe("eachWeekendOfMonth", () => {
  it("returns all weekends of the given month", () => {
    const result = eachWeekendOfMonth(new Date(2022, 1, 20));
    assert.deepStrictEqual(result, [
      new Date(2022, 1, 5),
      new Date(2022, 1, 6),
      new Date(2022, 1, 12),
      new Date(2022, 1, 13),
      new Date(2022, 1, 19),
      new Date(2022, 1, 20),
      new Date(2022, 1, 26),
      new Date(2022, 1, 27),
    ]);
  });

  it("returns an empty asrray when the expected year is an Invalid Date", () => {
    const result = eachWeekendOfMonth(new Date(NaN));
    assert.deepStrictEqual(result, []);
  });
});
