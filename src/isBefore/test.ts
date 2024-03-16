import { describe, expect, it } from "vitest";
import { isBefore } from "./index.js";

describe("isBefore", () => {
  it("returns true if the first date is before the second one", () => {
    const result = isBefore(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is after the second one", () => {
    const result = isBefore(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11),
    );
    expect(result).toBe(false);
  });

  it("returns false if the first date is equal to the second one", () => {
    const result = isBefore(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isBefore(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1989, 6 /* Jul */, 10).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isBefore(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isBefore(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isBefore(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });
});
