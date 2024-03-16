import { UTCDate } from "@date-fns/utc";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { isThisISOWeek } from "./index.js";

describe("isSameISOWeek", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date and the current date have the same ISO week", () => {
    const date = new Date(2014, 8 /* Sep */, 22);
    expect(isThisISOWeek(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different ISO weeks", () => {
    const date = new Date(2014, 8 /* Sep */, 21);
    expect(isThisISOWeek(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 29).getTime();
    expect(isThisISOWeek(date)).toBe(false);
  });

  it("respects date extensions", () => {
    expect(isThisISOWeek(new UTCDate(+new Date(2014, 8 /* Sep */, 25)))).toBe(
      true,
    );
  });
});
