import { UTCDate } from "@date-fns/utc";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { isTomorrow } from "./index.js";

describe("isTomorrow", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Aug */, 25).getTime());
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date is tomorrow", () => {
    const result = isTomorrow(new Date(2014, 8 /* Sep */, 26));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not tomorrow", () => {
    const result = isTomorrow(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isTomorrow(new Date(2014, 8 /* Sep */, 26).getTime());
    expect(result).toBe(true);
  });

  it("respects date extensions", () => {
    expect(isTomorrow(new UTCDate(+new Date(2014, 8 /* Aug */, 26)))).toBe(
      true,
    );
  });
});
