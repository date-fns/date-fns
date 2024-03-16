import { describe, expect, it } from "vitest";
import { setISODay } from "./index.js";

describe("setISODay", () => {
  it("sets the day of the ISO week", () => {
    const result = setISODay(new Date(2014, 8 /* Sep */, 1), 3);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 3));
  });

  it("sets the day to Sunday of this ISO week if the index is 7", () => {
    const result = setISODay(new Date(2014, 8 /* Sep */, 1), 7);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 7));
  });

  describe("the day index is more than 7", () => {
    it("sets the day of the next ISO week", () => {
      const result = setISODay(new Date(2014, 8 /* Sep */, 1), 8);
      expect(result).toEqual(new Date(2014, 8 /* Sep */, 8));
    });

    it("sets the day of another ISO week in the future", () => {
      const result = setISODay(new Date(2014, 8 /* Sep */, 1), 21);
      expect(result).toEqual(new Date(2014, 8 /* Sep */, 21));
    });
  });

  describe("the day index is less than 1", () => {
    it("sets the day of the last ISO week", () => {
      const result = setISODay(new Date(2014, 8 /* Sep */, 1), 0);
      expect(result).toEqual(new Date(2014, 7 /* Aug */, 31));
    });

    it("set the day of another ISO week in the past", () => {
      const result = setISODay(new Date(2014, 8 /* Sep */, 1), -13);
      expect(result).toEqual(new Date(2014, 7 /* Aug */, 18));
    });
  });

  it("accepts a timestamp", () => {
    const result = setISODay(new Date(2014, 8 /* Sep */, 1).getTime(), 3);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 3));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    setISODay(date, 3);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setISODay(new Date(NaN), 3);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setISODay(new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
