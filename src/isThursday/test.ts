import { describe, expect, it } from "vitest";
import { isThursday } from "./index.js";

describe("isThursday", () => {
  it("returns true if the given date is Thursday", () => {
    const result = isThursday(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not Thursday", () => {
    const result = isThursday(new Date(2014, 8 /* Sep */, 24));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isThursday(new Date(2014, 1 /* Feb */, 13).getTime());
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isThursday(new Date(NaN));
    expect(result).toBe(false);
  });
});
