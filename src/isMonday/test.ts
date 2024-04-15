import { describe, expect, it } from "vitest";
import { isMonday } from "./index.js";

describe("isMonday", () => {
  it("returns true if the given date is Monday", () => {
    const result = isMonday(new Date(2014, 8 /* Sep */, 22));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not Monday", () => {
    const result = isMonday(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isMonday(new Date(2014, 1 /* Feb */, 10).getTime());
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isMonday(new Date(NaN));
    expect(result).toBe(false);
  });
});
