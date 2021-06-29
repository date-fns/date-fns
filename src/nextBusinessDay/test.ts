/* eslint-env mocha */

import assert from "power-assert";
import nextBusinessDay from ".";

describe("nextBusinessDay function", () => {
  describe("when startFrom is zero and the current date is a bussiness day", () => {
    it("returns the current date", () => {
      const initial = new Date(2021, 6, 28); // Monday

      assert.deepStrictEqual(nextBusinessDay(initial), initial);
    });
  });

  describe("when startFrom is zero but the current date isn't a business day", () => {
    it("returns the next business day", () => {
      const initial = new Date(2021, 6, 3); // Saturday
      const expected = new Date(2021, 6, 5); // Monday

      assert.deepStrictEqual(nextBusinessDay(initial),expected);
    });
  });

  describe("when startFrom is greater than zero", () => {
    it("moves the initial date adding the number of days specified on the startFrom param", () => {
      const initial = new Date(2021, 6, 2); // Friday
      const expected = new Date(2021, 6, 5); // Monday

      // Will start counting from June 4th, 2021
      assert.deepStrictEqual(nextBusinessDay(initial, 2), expected);
    });
  });

  it("doesn't accept negative numbers for the startFrom param", () => {
    const initial = new Date(2021, 6, 2); // Friday
    const errorMessage = /startFrom can't be a negative number$/;

    assert.throws(() => nextBusinessDay(initial, -1), errorMessage)
  });

  it("skips the dates specified on the excludeDates array", () => {
    const brazilianIndependenceDay = new Date(2021, 8, 7); // Tuesday
    const holidays = [brazilianIndependenceDay];

    assert.deepStrictEqual(
      nextBusinessDay(new Date(2021, 8, 6), 1, holidays), 
      new Date(2021, 8, 8)
    );
  });
});
