import { UTCDate } from "@date-fns/utc";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { isThisSecond } from "./index.js";

describe("isThisSecond", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500).getTime(),
    );
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date and the current date have the same second", () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18, 30, 15);
    expect(isThisSecond(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different seconds", () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18, 30, 16);
    expect(isThisSecond(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 250).getTime();
    expect(isThisSecond(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(
      isThisSecond(
        new UTCDate(+new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500)),
      ),
    ).toBe(true);
  });
});
