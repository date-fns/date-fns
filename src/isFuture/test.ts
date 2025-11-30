import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.ts";
import { isFuture } from "./index.ts";

describe("isFuture", () => {
  fakeDate(new Date(2014, 8 /* Sep */, 25));

  it("returns true if the given date is in the future", () => {
    const result = isFuture(new Date(2014, 9 /* Oct */, 31));
    expect(result).toBe(true);
  });

  it("returns false if the given date is in the past", () => {
    const result = isFuture(new Date(2014, 8 /* Sep */, 1));
    expect(result).toBe(false);
  });

  it("returns false if the given date is now", () => {
    const result = isFuture(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isFuture(new Date(2014, 9 /* Oct */, 31).getTime());
    expect(result).toBe(true);
  });

  it("returns false for null", () => {
    const result = isFuture(null as any);
    expect(result).toBe(false);
  });

  it("returns false for undefined", () => {
    const result = isFuture(undefined as any);
    expect(result).toBe(false);
  });

  it("returns false for invalid date", () => {
    const result = isFuture(new Date("invalid"));
    expect(result).toBe(false);
  });
});
