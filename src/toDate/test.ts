import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
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

  describe("types", () => {
    it("resolves the date type by default", () => {
      const result = toDate(Date.now());
      expect(result instanceof Date).toBe(true);
      assertType<assertType.Equal<Date, typeof result>>(true);
    });

    it("resolves the argument type if a date extension is passed", () => {
      const result = toDate(new UTCDate());
      expect(result instanceof UTCDate).toBe(true);
      assertType<assertType.Equal<UTCDate, typeof result>>(true);
    });

    it("resolves the context type if it is passed", () => {
      const result = toDate(new Date(), tz("Asia/Singapore"));
      expect(result instanceof TZDate).toBe(true);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });

  describe("edge cases", () => {
    it("returns invalid date for invalid arguments consistently", () => {
      expect(+toDate(NaN)).toBe(NaN);
      expect(+toDate(NaN, tz("Asia/Singapore"))).toBe(NaN);
    });
  });
});
