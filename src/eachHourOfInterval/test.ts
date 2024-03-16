import { describe, expect, it } from "vitest";
import { eachHourOfInterval } from "./index.js";

describe("eachHourOfInterval", () => {
  it("returns an array with starts of hours from the hour of the start date to the hour of the end date", () => {
    const result = eachHourOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 12),
      end: new Date(2014, 9 /* Oct */, 6, 15),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 6, 12),
      new Date(2014, 9 /* Oct */, 6, 13),
      new Date(2014, 9 /* Oct */, 6, 14),
      new Date(2014, 9 /* Oct */, 6, 15),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachHourOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 12).getTime(),
      end: new Date(2014, 9 /* Oct */, 6, 15).getTime(),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 6, 12),
      new Date(2014, 9 /* Oct */, 6, 13),
      new Date(2014, 9 /* Oct */, 6, 14),
      new Date(2014, 9 /* Oct */, 6, 15),
    ]);
  });

  it("handles the hours that are not starts of hours", () => {
    const result = eachHourOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 12, 59, 59, 999),
      end: new Date(2014, 9 /* Oct */, 6, 15, 59, 59, 999),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 6, 12),
      new Date(2014, 9 /* Oct */, 6, 13),
      new Date(2014, 9 /* Oct */, 6, 14),
      new Date(2014, 9 /* Oct */, 6, 15),
    ]);
  });

  it("returns one hour if the both arguments are on the same hour", () => {
    const result = eachHourOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 12, 35),
      end: new Date(2014, 9 /* Oct */, 6, 12, 47),
    });
    expect(result).toEqual([new Date(2014, 9 /* Oct */, 6, 12)]);
  });

  it("returns one hour if the both arguments are the same", () => {
    const result = eachHourOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 12, 35),
      end: new Date(2014, 9 /* Oct */, 6, 12, 35),
    });
    expect(result).toEqual([new Date(2014, 9 /* Oct */, 6, 12)]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachHourOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 15),
      end: new Date(2014, 9 /* Oct */, 6, 12),
    });
    expect(result).toEqual([
      new Date(2014, 9 /* Oct */, 6, 15),
      new Date(2014, 9 /* Oct */, 6, 14),
      new Date(2014, 9 /* Oct */, 6, 13),
      new Date(2014, 9 /* Oct */, 6, 12),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachHourOfInterval({
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6, 12),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachHourOfInterval({
      start: new Date(2014, 9 /* Oct */, 12, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachHourOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  describe("options.step", () => {
    const interval = {
      start: new Date(2014, 9 /* Oct */, 6, 12),
      end: new Date(2014, 9 /* Oct */, 6, 18),
    };

    it("returns an array with starts of hours from the hour of the start date to the hour of the end date with the given step", () => {
      const result = eachHourOfInterval(interval, { step: 3 });
      expect(result).toEqual([
        new Date(2014, 9 /* Oct */, 6, 12),
        new Date(2014, 9 /* Oct */, 6, 15),
        new Date(2014, 9 /* Oct */, 6, 18),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachHourOfInterval(
        {
          start: new Date(2014, 9 /* Oct */, 6, 12),
          end: new Date(2014, 9 /* Oct */, 6, 15),
        },
        { step: -1 },
      );
      expect(result).toEqual([
        new Date(2014, 9 /* Oct */, 6, 15),
        new Date(2014, 9 /* Oct */, 6, 14),
        new Date(2014, 9 /* Oct */, 6, 13),
        new Date(2014, 9 /* Oct */, 6, 12),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachHourOfInterval(
        {
          start: new Date(2014, 9 /* Oct */, 6, 15),
          end: new Date(2014, 9 /* Oct */, 6, 12),
        },
        { step: -1 },
      );
      expect(result).toEqual([
        new Date(2014, 9 /* Oct */, 6, 12),
        new Date(2014, 9 /* Oct */, 6, 13),
        new Date(2014, 9 /* Oct */, 6, 14),
        new Date(2014, 9 /* Oct */, 6, 15),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachHourOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachHourOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });
});
