import { describe, expect, it } from "vitest";
import { eachQuarterOfInterval } from "./index.js";

describe("eachQuarterOfInterval", () => {
  it("returns an array with starts of quarters from the quarter of the start date to the quarter of the end date", () => {
    const result = eachQuarterOfInterval({
      start: new Date(2014, 2 /* Mar */, 6),
      end: new Date(2014, 7 /* Aug */, 12),
    });
    expect(result).toEqual([
      new Date(2014, 0 /* Jan */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 6 /* Jul */, 1),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachQuarterOfInterval({
      start: new Date(2014, 2 /* Mar */, 6).getTime(),
      end: new Date(2014, 7 /* Aug */, 12).getTime(),
    });
    expect(result).toEqual([
      new Date(2014, 0 /* Jan */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 6 /* Jul */, 1),
    ]);
  });

  it("handles the dates that are not starts of days", () => {
    const result = eachQuarterOfInterval({
      start: new Date(2014, 2 /* Mar */, 6, 6, 35),
      end: new Date(2014, 7 /* Aug */, 12, 22, 15),
    });
    expect(result).toEqual([
      new Date(2014, 0 /* Jan */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 6 /* Jul */, 1),
    ]);
  });

  it("handles the dates that are not containing days", () => {
    const result = eachQuarterOfInterval({
      start: new Date(2014, 2 /* Mar */),
      end: new Date(2014, 7 /* Oct */),
    });
    expect(result).toEqual([
      new Date(2014, 0 /* Jan */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 6 /* Jul */, 1),
    ]);
  });

  it("returns one quarter if the both arguments are on the same quarter", () => {
    const result = eachQuarterOfInterval({
      start: new Date(2014, 0 /* Jan */, 6, 14),
      end: new Date(2014, 2 /* Feb */, 9, 15),
    });
    expect(result).toEqual([new Date(2014, 0 /* Jan */, 1)]);
  });

  it("returns one quarter if the both arguments are the same", () => {
    const result = eachQuarterOfInterval({
      start: new Date(2014, 9 /* Oct */, 6, 14),
      end: new Date(2014, 9 /* Oct */, 6, 14),
    });
    expect(result).toEqual([new Date(2014, 9 /* Oct */, 1)]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachQuarterOfInterval({
      start: new Date(2014, 7 /* Aug */, 12),
      end: new Date(2014, 2 /* Mar */, 6),
    });
    expect(result).toEqual([
      new Date(2014, 6 /* Jul */, 1),
      new Date(2014, 3 /* Apr */, 1),
      new Date(2014, 0 /* Jan */, 1),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachQuarterOfInterval({
      start: new Date(NaN),
      end: new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachQuarterOfInterval({
      start: new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachQuarterOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  describe("options.step", () => {
    const interval = {
      start: new Date(2014, 2 /* Mar */, 6),
      end: new Date(2014, 7 /* Aug */, 12),
    };

    it("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
      const result = eachQuarterOfInterval(interval, { step: 2 });
      expect(result).toEqual([
        new Date(2014, 0 /* Jan */, 1),
        new Date(2014, 6 /* Jul */, 1),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachQuarterOfInterval(interval, { step: -2 });
      expect(result).toEqual([
        new Date(2014, 6 /* Jul */, 1),
        new Date(2014, 0 /* Jan */, 1),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachQuarterOfInterval(
        { start: interval.end, end: interval.start },
        { step: -2 },
      );
      expect(result).toEqual([
        new Date(2014, 0 /* Jan */, 1),
        new Date(2014, 6 /* Jul */, 1),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachQuarterOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachQuarterOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });
});
