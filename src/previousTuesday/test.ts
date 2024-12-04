import { describe, expect, it } from "vitest";
import { previousTuesday } from "./index.js";

describe("previousTuesday", () => {
  it("returns the previous Tuesday given various dates after the same", () => {
    expect(previousTuesday(new Date(2021, 5 /* Jun */, 5))).toEqual(new Date(2021, 5 /* Jun */, 1));

    expect(previousTuesday(new Date(2021, 5 /* Jun */, 6))).toEqual(new Date(2021, 5 /* Jun */, 1));

    expect(previousTuesday(new Date(2021, 5 /* Jun */, 8))).toEqual(new Date(2021, 5 /* Jun */, 1));

    expect(previousTuesday(new Date(2021, 5 /* Jun */, 15))).toEqual(new Date(2021, 5 /* Jun */, 8));

    expect(previousTuesday(new Date(2021, 5 /* Jun */, 17))).toEqual(new Date(2021, 5 /* Jun */, 15));

    expect(previousTuesday(new Date(2021, 5 /* Jun */, 18))).toEqual(new Date(2021, 5 /* Jun */, 15));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousTuesday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
