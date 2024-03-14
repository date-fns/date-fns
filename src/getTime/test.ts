import { describe, expect, it } from "vitest";
import { getTime } from "./index.js";

describe("getTime", () => {
  it("returns the timestamp of the given date", () => {
    const timestamp = 1483228800000;
    const result = getTime(new Date(timestamp));
    expect(result).toBe(timestamp);
  });

  it("accepts a timestamp (and returns it unchanged)", () => {
    const timestamp = 804643200000;
    const result = getTime(timestamp);
    expect(result).toBe(timestamp);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getTime(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
