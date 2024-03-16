import { describe, expect, it } from "vitest";
import { subBusinessDays } from "./index.js";

describe("subBusinessDays", () => {
  it("substract the given number of business days", () => {
    const result = subBusinessDays(new Date(2014, 8 /* Sep */, 1), 10);
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 18));
  });

  it("handles negative amount", () => {
    const result = subBusinessDays(new Date(2014, 7 /* Sep */, 18), -10);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("can handle a large number of business days", () => {
    const result = subBusinessDays(new Date(15000, 0 /* Jan */, 1), 3387885);
    expect(result).toEqual(new Date(2014, 0 /* Jan */, 1));
  });

  it("accepts a timestamp", () => {
    const result = subBusinessDays(
      new Date(2014, 8 /* Sep */, 1).getTime(),
      10,
    );
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 18));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    subBusinessDays(date, 11);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subBusinessDays(new Date(NaN), 10);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subBusinessDays(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
