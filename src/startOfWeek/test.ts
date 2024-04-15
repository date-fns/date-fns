import { describe, expect, it } from "vitest";
import { startOfWeek } from "./index.js";

describe("startOfWeek", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of a week", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfWeek(date);
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 31));
  });

  it("allows to specify which day is the first day of the week", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfWeek(date, { weekStartsOn: 1 });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfWeek(date, {
      locale: {
        options: { weekStartsOn: 1 },
      },
    });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfWeek(date, {
      weekStartsOn: 1,
      locale: {
        options: { weekStartsOn: 0 },
      },
    });
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = startOfWeek(date);
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 31));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfWeek(date);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  describe("edge cases", () => {
    describe("when the given day is before the start of a week", () => {
      it("it returns the start of a week", () => {
        const date = new Date(2014, 9 /* Oct */, 6);
        const result = startOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(new Date(2014, 9 /* Oct */, 1));
      });
    });

    describe("when the given day is the start of a week", () => {
      it("it returns the start of a week", () => {
        const date = new Date(2014, 9 /* Oct */, 8);
        const result = startOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(new Date(2014, 9 /* Oct */, 8));
      });
    });

    describe("when the given day is after the start of a week", () => {
      it("it returns the start of a week", () => {
        const date = new Date(2014, 9 /* Oct */, 10);
        const result = startOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(new Date(2014, 9 /* Oct */, 8));
      });
    });

    it("handles the week at the start of a year", () => {
      const date = new Date(2014, 0 /* Jan */, 1);
      const result = startOfWeek(date);
      expect(result).toEqual(new Date(2013, 11 /* Dec */, 29));
    });
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfWeek(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
