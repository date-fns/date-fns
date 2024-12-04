import { describe, expect, it } from "vitest";
import { getSeconds } from "./index.js";

describe("getSeconds", () => {
  it("returns the seconds of the given date", () => {
    const result = getSeconds(new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123));
    expect(result).toBe(5);
  });

  it("accepts a timestamp", () => {
    const result = getSeconds(
      new Date(2014, 3 /* Apr */, 2, 23, 30, 42).getTime(),
    );
    expect(result).toBe(42);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getSeconds(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
