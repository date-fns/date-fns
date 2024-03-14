import { UTCDate } from "@date-fns/utc";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { isThisQuarter } from "./index.js";

describe("isThisQuarter", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 6 /* Jul */, 1).getTime());
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date and the current date have the same quarter (and year)", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    expect(isThisQuarter(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different quarters", () => {
    const date = new Date(2014, 1 /* Feb */, 11);
    expect(isThisQuarter(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime();
    expect(isThisQuarter(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(isThisQuarter(new UTCDate(+new Date(2014, 6 /* Jul */, 1)))).toBe(
      true,
    );
  });
});
