import { expect, assert, describe, it } from "vitest";
import { eachWeekendOfYear } from "./index.js";
import { isWeekend } from "../isWeekend/index.js";

describe("eachWeekendOfYear", () => {
  it("returns all weekends of the given year", () => {
    const result = eachWeekendOfYear(new Date(2020, 0, 1));
    assert(result.length === 104);
    assert(result.every(isWeekend));
    expect(result[0]).toEqual(new Date(2020, 0, 4));
    expect(result[103]).toEqual(new Date(2020, 11, 27));
  });

  it("returns an empty asrray when the expected year is an Invalid Date", () => {
    const result = eachWeekendOfYear(new Date(NaN));
    expect(result).toEqual([]);
  });
});
