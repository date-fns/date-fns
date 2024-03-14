import { afterEach, beforeEach, describe, expect, it } from "vitest";
import sinon from "sinon";
import { isThisMonth } from "./index.js";

describe("isThisMonth", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date and the current date have the same month (and year)", () => {
    const date = new Date(2014, 8 /* Sep */, 15);
    expect(isThisMonth(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different months", () => {
    const date = new Date(2013, 7 /* Aug */, 31);
    expect(isThisMonth(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 30).getTime();
    expect(isThisMonth(date)).toBe(true);
  });
});
