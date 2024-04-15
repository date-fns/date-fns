import { describe, expect, it } from "vitest";
import { isFriday } from "./index.js";

describe("isFriday", () => {
  it("returns true if the given date is Friday", () => {
    const result = isFriday(new Date(2014, 8 /* Sep */, 26));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not Friday", () => {
    const result = isFriday(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isFriday(new Date(2014, 1 /* Feb */, 14).getTime());
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isFriday(new Date(NaN));
    expect(result).toBe(false);
  });
});
