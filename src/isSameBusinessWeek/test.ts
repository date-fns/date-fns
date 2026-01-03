import { describe, expect, it } from "vitest";
import { isSameBusinessWeek } from "./index.js";

describe("isSameBusinessWeek", () => {
  it("returns true for dates in the same business week", () => {
    const result = isSameBusinessWeek(
      new Date(2025, 4 /* May */, 6), // Tuesday
      new Date(2025, 4 /* May */, 9), // Friday
      { weekStartsOn: 1 },
    );

    expect(result).toBe(true);
  });

  it("returns false for dates in different business weeks", () => {
    const result = isSameBusinessWeek(
      new Date(2025, 4 /* May */, 9), // Friday
      new Date(2025, 4 /* May */, 16), // Next Friday
      { weekStartsOn: 1 },
    );

    expect(result).toBe(false);
  });

  it("treats Saturday as part of the previous business week", () => {
    const result = isSameBusinessWeek(
      new Date(2025, 4 /* May */, 9), // Friday
      new Date(2025, 4 /* May */, 10), // Saturday
      { weekStartsOn: 1 },
    );

    expect(result).toBe(true);
  });

  it("treats Sunday as part of the next business week", () => {
    const result = isSameBusinessWeek(
      new Date(2025, 4 /* May */, 12), // Monday
      new Date(2025, 4 /* May */, 11), // Sunday
      { weekStartsOn: 1 },
    );

    expect(result).toBe(true);
  });

  it("respects custom weekStartsOn option", () => {
    const result = isSameBusinessWeek(
      new Date(2025, 4 /* May */, 4), // Sunday
      new Date(2025, 4 /* May */, 8), // Thursday
      { weekStartsOn: 0 },
    );

    expect(result).toBe(true);
  });

  it("returns false if either date is invalid", () => {
    const result = isSameBusinessWeek(new Date(NaN), new Date(2025, 4, 6));
    expect(result).toBe(false);
  });

  it("accepts timestamps", () => {
    const result = isSameBusinessWeek(
      new Date(2025, 4, 6).getTime(),
      new Date(2025, 4, 7).getTime(),
      { weekStartsOn: 1 },
    );

    expect(result).toBe(true);
  });

  it("does not mutate the original dates", () => {
    const date = new Date(2025, 4, 9);
    isSameBusinessWeek(date, new Date(2025, 4, 10), { weekStartsOn: 1 });
    expect(date).toEqual(new Date(2025, 4, 9));
  });
});
