import { describe, expect, it } from "vitest";
import { getTimezoneOffsetInMilliseconds } from "./index.ts";

describe("getTimezoneOffsetInMilliseconds", () => {
  it("works for a modern date", () => {
    const date = new Date(2018, 0 /* Jan */, 1, 12, 34, 56, 789);
    const result = date.getTime() - getTimezoneOffsetInMilliseconds(date);
    const expectedResult = Date.UTC(2018, 0 /* Jan */, 1, 12, 34, 56, 789);
    expect(result).toBe(expectedResult);
  });

  it("works for a date before standardized timezones", () => {
    const date = new Date(1800, 0 /* Jan */, 1, 12, 34, 56, 789);
    const result = date.getTime() - getTimezoneOffsetInMilliseconds(date);
    const expectedResult = Date.UTC(1800, 0 /* Jan */, 1, 12, 34, 56, 789);
    expect(result).toBe(expectedResult);
  });

  it("works for a date BC", () => {
    const date = new Date(-500, 0 /* Jan */, 1, 12, 34, 56, 789);
    const result = date.getTime() - getTimezoneOffsetInMilliseconds(date);
    const expectedResult = Date.UTC(-500, 0 /* Jan */, 1, 12, 34, 56, 789);
    expect(result).toBe(expectedResult);
  });

  it.each([
    [0, 1, 28, "0000-02-28T12:34:56.789Z"],
    [0, 1, 29, "0000-02-29T12:34:56.789Z"],
    [0, 2, 1, "0000-03-01T12:34:56.789Z"],
    [4, 1, 29, "0004-02-29T12:34:56.789Z"],
    [96, 1, 29, "0096-02-29T12:34:56.789Z"],
    [100, 2, 1, "0100-03-01T12:34:56.789Z"],
  ])(
    "preserves local fields in year %i, month %i, day %i",
    (year, month, day, expected) => {
      const date = new Date(0);
      date.setFullYear(year, month, day);
      date.setHours(12, 34, 56, 789);

      expect(+date - getTimezoneOffsetInMilliseconds(date)).toBe(
        Date.parse(expected),
      );
    },
  );
});
