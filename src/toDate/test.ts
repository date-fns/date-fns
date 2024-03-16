import { describe, expect, it } from "vitest";
import { toDate } from "./index.js";

describe("toDate", () => {
  describe("date argument", () => {
    it("returns a clone of the given date", () => {
      const date = new Date(2016, 0, 1);
      const dateClone = toDate(date);
      dateClone.setFullYear(2015);
      expect(date).toEqual(new Date(2016, 0, 1));
    });
  });

  describe("timestamp argument", () => {
    it("creates a date from the timestamp", () => {
      const timestamp = new Date(2016, 0, 1, 23, 30, 45, 123).getTime();
      const result = toDate(timestamp);
      expect(result).toEqual(new Date(2016, 0, 1, 23, 30, 45, 123));
    });
  });

  describe("invalid argument", () => {
    it("returns Invalid Date if argument is NaN", () => {
      const result = toDate(NaN);
      expect(result instanceof Date).toBe(true);
      expect(isNaN(result.getTime())).toBe(true);
    });

    it("returns Invalid Date if argument is Invalid Date", () => {
      const result = toDate(new Date(NaN));
      expect(result instanceof Date).toBe(true);
      expect(isNaN(result.getTime())).toBe(true);
    });
  });
});
