import { describe, expect, it } from "vitest";
import { getMilliseconds } from "./index.js";

describe("getMilliseconds", () => {
  it("returns the milliseconds of the given date", () => {
    const result = getMilliseconds(
      new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123),
    );
    expect(result).toBe(123);
  });

  it("accepts a timestamp", () => {
    const result = getMilliseconds(
      new Date(2014, 3 /* Apr */, 2, 23, 30, 42, 500).getTime(),
    );
    expect(result).toBe(500);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getMilliseconds(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
