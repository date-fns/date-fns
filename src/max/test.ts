import { describe, expect, it } from "vitest";
import { max } from "./index.js";

describe("max", () => {
  it("returns the latest date", () => {
    const result = max([
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11),
    ]);
    expect(result).toEqual(new Date(1989, 6 /* Jul */, 10));
  });

  it("accepts array with more than 2 entries", () => {
    const result = max([
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1995, 6 /* Jul */, 2),
      new Date(1990, 0 /* Jan */, 1),
    ]);
    expect(result).toEqual(new Date(1995, 6 /* Jul */, 2));
  });

  it("accepts timestamps", () => {
    const result = max([
      new Date(1989, 6 /* Jul */, 10).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime(),
    ]);
    expect(result).toEqual(new Date(1989, 6 /* Jul */, 10));
  });

  it("returns `Invalid Date` if any given date is invalid", () => {
    const result = max([
      new Date(1989, 6 /* Jul */, 10),
      new Date(NaN),
      new Date(1987, 1 /* Feb */, 11),
    ]);
    expect(isNaN(+result)).toBe(true);
  });

  it("returns `Invalid Date` for empty array", () => {
    const result = max([]);
    expect(isNaN(+result)).toBe(true);
  });
});
