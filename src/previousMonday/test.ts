import { describe, expect, it } from "vitest";
import { previousMonday } from "./index.js";

describe("previousMonday", () => {
  it("returns the previous Monday given various dates after the same", () => {
    expect(previousMonday(new Date(2021, 5 /* Jun */, 5))).toEqual(new Date(2021, 4 /* May */, 31));

    expect(previousMonday(new Date(2021, 5 /* Jun */, 6))).toEqual(new Date(2021, 4 /* May */, 31));

    expect(previousMonday(new Date(2021, 5 /* Jun */, 7))).toEqual(new Date(2021, 4 /* May */, 31));

    expect(previousMonday(new Date(2021, 5 /* Jun */, 14))).toEqual(new Date(2021, 5 /* Jun */, 7));

    expect(previousMonday(new Date(2021, 5 /* Jun */, 15))).toEqual(new Date(2021, 5 /* Jun */, 14));

    expect(previousMonday(new Date(2021, 5 /* Jun */, 16))).toEqual(new Date(2021, 5 /* Jun */, 14));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousMonday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
