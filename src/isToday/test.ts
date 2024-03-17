import { UTCDate } from "@date-fns/utc";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { isToday } from "./index.js";

describe("isToday", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date is today", () => {
    const result = isToday(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not today", () => {
    const result = isToday(new Date(2014, 8 /* Sep */, 26));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isToday(new Date(2014, 8 /* Sep */, 25).getTime());
    expect(result).toBe(true);
  });

  it("respects date extensions", () => {
    expect(isToday(new UTCDate(+new Date(2014, 8 /* Sep */, 25)))).toBe(true);
  });
});
