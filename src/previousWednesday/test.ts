import { describe, expect, it } from "vitest";
import { previousWednesday } from "./index.js";

describe("previousWednesday", () => {
  it("returns the previous Wednesday given various dates after the same", () => {
    expect(previousWednesday(new Date(2021, 5 /* Jun */, 5))).toEqual(new Date(2021, 5 /* Jun */, 2));

    expect(previousWednesday(new Date(2021, 5 /* Jun */, 6))).toEqual(new Date(2021, 5 /* Jun */, 2));

    expect(previousWednesday(new Date(2021, 5 /* Jun */, 9))).toEqual(new Date(2021, 5 /* Jun */, 2));

    expect(previousWednesday(new Date(2021, 5 /* Jun */, 17))).toEqual(new Date(2021, 5 /* Jun */, 16));

    expect(previousWednesday(new Date(2021, 5 /* Jun */, 18))).toEqual(new Date(2021, 5 /* Jun */, 16));

    expect(previousWednesday(new Date(2021, 5 /* Jun */, 25))).toEqual(new Date(2021, 5 /* Jun */, 23));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousWednesday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
