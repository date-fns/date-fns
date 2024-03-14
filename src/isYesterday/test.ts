import { afterEach, beforeEach, describe, expect, it } from "vitest";
import sinon from "sinon";
import { isYesterday } from "./index.js";

describe("isYesterday", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Aug */, 25).getTime());
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date is yesterday", () => {
    const result = isYesterday(new Date(2014, 8 /* Sep */, 24));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not yesterday", () => {
    const result = isYesterday(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isYesterday(new Date(2014, 8 /* Sep */, 24).getTime());
    expect(result).toBe(true);
  });
});
