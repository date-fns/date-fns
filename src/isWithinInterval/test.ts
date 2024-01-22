/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { isWithinInterval } from "./index.js";

describe("isWithinInterval", () => {
  it("returns true if the given date in within the given interval", () => {
    const result = isWithinInterval(new Date(2014, 9 /* Oct */, 31), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31),
    });
    assert(result === true);
  });

  it("returns true if the given date has same time as the left boundary of the interval", () => {
    const result = isWithinInterval(new Date(2014, 8 /* Sep */, 1), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31),
    });
    assert(result === true);
  });

  it("returns true if the given date has same time as the right boundary of the interval", () => {
    const result = isWithinInterval(new Date(2014, 11 /* Dec */, 31), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31),
    });
    assert(result === true);
  });

  it("returns true if the given date and the both boundaries are the same", () => {
    const result = isWithinInterval(new Date(2014, 11 /* Dec */, 31), {
      start: new Date(2014, 11 /* Dec */, 31),
      end: new Date(2014, 11 /* Dec */, 31),
    });
    assert(result === true);
  });

  it("returns false if the given date is outside of the interval", () => {
    const result = isWithinInterval(new Date(2014, 1 /* Feb */, 11), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31),
    });
    assert(result === false);
  });

  it("accepts a timestamp", () => {
    const result = isWithinInterval(new Date(2014, 9 /* Oct */, 31).getTime(), {
      start: new Date(2014, 8 /* Sep */, 1).getTime(),
      end: new Date(2014, 11 /* Dec */, 31).getTime(),
    });
    assert(result === true);
  });

  it("normalizes the interval if the start date is after the end date", () => {
    const result = isWithinInterval(new Date(2014, 9 /* Oct */, 31), {
      start: new Date(2014, 11 /* Dec */, 31),
      end: new Date(2014, 8 /* Sep */, 1),
    });
    assert(result === true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isWithinInterval(new Date(NaN), {
      start: new Date(2014, 8 /* Sep */, 1),
      end: new Date(2014, 11 /* Dec */, 31),
    });
    assert(!result);
  });

  it("returns false if the start date is `Invalid Date`", () => {
    const result = isWithinInterval(new Date(2014, 9 /* Oct */, 31), {
      start: new Date(NaN),
      end: new Date(2014, 8 /* Sep */, 1),
    });
    assert(!result);
  });

  it("returns false if the end date is `Invalid Date`", () => {
    const result = isWithinInterval(new Date(2014, 9 /* Oct */, 31), {
      start: new Date(2014, 11 /* Dec */, 31),
      end: new Date(NaN),
    });
    assert(!result);
  });

  it("properly sorts the dates", () => {
    const result = isWithinInterval(new Date(2023, 11 /* Dec */, 19), {
      start: new Date(2001, 8 /* Sep */, 1),
      end: new Date(2023, 11 /* Dec */, 20),
    });
    assert(result);
  });
});
