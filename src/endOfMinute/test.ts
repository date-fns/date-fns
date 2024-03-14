import { describe, expect, it } from "vitest";
import { endOfMinute } from "./index.js";

describe("endOfMinute", () => {
  it("returns the date with the time set to the last millisecond before a minute ends", () => {
    const date = new Date(2014, 11, 1, 22, 15);
    const result = endOfMinute(date);
    expect(result).toEqual(new Date(2014, 11, 1, 22, 15, 59, 999));
  });

  it("accepts a timestamp", () => {
    const result = endOfMinute(new Date(2014, 11, 1, 22, 15).getTime());
    expect(result).toEqual(new Date(2014, 11, 1, 22, 15, 59, 999));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 11, 1, 22, 15);
    endOfMinute(date);
    expect(date).toEqual(new Date(2014, 11, 1, 22, 15));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfMinute(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
