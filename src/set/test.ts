/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { set } from "./index.js";

describe("set", () => {
  it("sets all values", () => {
    const result = set(new Date(2013, 0 /* Jan */), {
      year: 2014,
      month: 8, // Sep
      date: 20,
      hours: 12,
      minutes: 12,
      seconds: 12,
      milliseconds: 12,
    });
    assert.deepStrictEqual(
      result.toString(),
      new Date(2014, 8 /* Sep */, 20, 12, 12, 12, 12).toString(),
    );
  });

  it("sets year", () => {
    const result = set(new Date(2013, 8 /* Sep */), { year: 2014 });
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */));
  });

  it("sets month", () => {
    const result = set(new Date(2014, 8 /* Sep */), { month: 9 /* Oct */ });
    assert.deepStrictEqual(result, new Date(2014, 9 /* Oct */));
  });

  it("sets day of month", () => {
    const result = set(new Date(2014, 8 /* Sep */), { date: 20 });
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 20));
  });

  it("sets hours", () => {
    const result = set(new Date(2014, 8 /* Sep */, 1), { hours: 12 });
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 12));
  });

  it("sets minutes", () => {
    const result = set(new Date(2014, 8 /* Sep */, 1, 1), { minutes: 12 });
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 1, 12));
  });

  it("sets seconds", () => {
    const result = set(new Date(2014, 8 /* Sep */, 1, 1, 1), { seconds: 12 });
    assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 1, 1, 1, 12));
  });

  it("sets milliseconds", () => {
    const result = set(new Date(2014, 8 /* Sep */, 1, 1, 1, 1), {
      milliseconds: 500,
    });
    assert.deepStrictEqual(
      result,
      new Date(2014, 8 /* Sep */, 1, 1, 1, 1, 500),
    );
  });

  describe("value overflow", () => {
    it("months overflow into years", () => {
      const result = set(new Date(2014, 8 /* Sep */, 1), {
        month: 12 /* 13th month */,
      });
      assert.deepStrictEqual(result, new Date(2015, 0 /* Jan */, 1));
    });

    it("days of months overflow into months", () => {
      const result = set(new Date(2014, 8 /* Sep */, 1), { date: 31 });
      assert.deepStrictEqual(result, new Date(2014, 9 /* Oct */, 1));
    });

    it("hours overflow into days", () => {
      const result = set(new Date(2014, 8 /* Sep */, 19), { hours: 24 });
      assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 20));
    });

    it("minutes overflow into hours", () => {
      const result = set(new Date(2014, 8 /* Sep */, 20, 11), { minutes: 60 });
      assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 20, 12));
    });

    it("seconds overflow into minutes", () => {
      const result = set(new Date(2014, 8 /* Sep */, 20, 12, 58), {
        seconds: 60,
      });
      assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 20, 12, 59));
    });

    it("milliseconds overflow into seconds", () => {
      const result = set(new Date(2014, 8 /* Sep */, 20, 12, 58, 30), {
        milliseconds: 1000,
      });
      assert.deepStrictEqual(
        result,
        new Date(2014, 8 /* Sep */, 20, 12, 58, 31),
      );
    });
  });

  describe("edge cases", () => {
    it("sets January", () => {
      const result = set(new Date(2014, 8 /* Sep */), { month: 0 /* Jan */ });
      assert.deepStrictEqual(result, new Date(2014, 0 /* Jan */));
    });

    it("sets the last day of new month if the initial date was the last day of a longer month", () => {
      const result = set(new Date(2014, 7 /* Aug */, 31), {
        month: 8 /* Sep */,
      });
      assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */, 30));
    });

    it("ignores undefined values", () => {
      const result = set(new Date(2014, 8 /* Sep */), { year: undefined });
      assert.deepStrictEqual(result, new Date(2014, 8 /* Sep */));
    });

    it("returns Invalid Date if any value in values is NaN", () => {
      const result = set(new Date(2014, 8 /* Sep */), { year: NaN });
      assert(isNaN(result.getTime()));
    });

    it("returns Invalid Date the initial date was Invalid Date as well", () => {
      const result = set(new Date(NaN), { year: 2019 });
      assert(isNaN(result.getTime()));
    });
  });
});
