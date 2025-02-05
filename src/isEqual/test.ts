import { describe, expect, it } from "vitest";
import { isEqual } from "./index.js";

describe("isEqual", () => {
  it("returns true if the given dates are equal", () => {
    const result = isEqual(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1987, 1 /* Feb */, 11),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates are not equal", () => {
    const result = isEqual(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isEqual(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isEqual(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isEqual(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isEqual(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });
});
