import { describe, expect, it } from "vitest";
import { addMinutes } from "./index.js";

describe("addMinutes", () => {
  it("adds the given number of minutes", () => {
    const result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30);
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 30));
  });

  it("accepts a timestamp", () => {
    const result = addMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(),
      20,
    );
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 20));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 0);
    addMinutes(date, 25);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addMinutes(new Date(NaN), 30);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
