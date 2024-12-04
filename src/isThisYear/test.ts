import { UTCDate } from "@date-fns/utc";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { isThisYear } from "./index.js";

describe("isThisYear", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 0 /* Jan */, 1).getTime());
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date and the current date have the same year", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    expect(isThisYear(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different years", () => {
    const date = new Date(2015, 6 /* Jul */, 2);
    expect(isThisYear(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime();
    expect(isThisYear(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(isThisYear(new UTCDate(+new Date(2014, 0 /* Jan */, 1)))).toBe(true);
  });
});
