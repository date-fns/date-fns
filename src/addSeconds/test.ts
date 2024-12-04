import { describe, expect, it } from "vitest";
import { addSeconds } from "./index.js";

describe("addSeconds", () => {
  it("adds the given number of seconds", () => {
    const result = addSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30);
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 30));
  });

  it("accepts a timestamp", () => {
    const result = addSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(),
      20,
    );
    expect(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 20));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 45, 0);
    addSeconds(date, 15);
    expect(date).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 0));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addSeconds(new Date(NaN), 30);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
