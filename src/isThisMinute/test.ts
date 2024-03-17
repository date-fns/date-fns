import { UTCDate } from "@date-fns/utc";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { isThisMinute } from "./index.js";

describe("isThisMinute", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500).getTime(),
    );
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date and the current date have the same minute", () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18, 30);
    expect(isThisMinute(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different minutes", () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18, 31);
    expect(isThisMinute(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 25, 18, 30, 30).getTime();
    expect(isThisMinute(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(
      isThisMinute(
        new UTCDate(+new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500)),
      ),
    ).toBe(true);
  });
});
