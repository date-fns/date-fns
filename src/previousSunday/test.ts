import { describe, expect, it } from "vitest";
import { previousSunday } from "./index.js";

describe("previousSunday", () => {
  it("returns the previous Sunday given various dates after the same", () => {
    expect(previousSunday(new Date(2021, 5 /* Jun */, 7))).toEqual(new Date(2021, 5 /* Jun */, 6));

    expect(previousSunday(new Date(2021, 5 /* Jun */, 8))).toEqual(new Date(2021, 5 /* Jun */, 6));

    expect(previousSunday(new Date(2021, 5 /* Jun */, 13))).toEqual(new Date(2021, 5 /* Jun */, 6));

    expect(previousSunday(new Date(2021, 5 /* Jun */, 16))).toEqual(new Date(2021, 5 /* Jun */, 13));

    expect(previousSunday(new Date(2021, 5 /* Jun */, 17))).toEqual(new Date(2021, 5 /* Jun */, 13));

    expect(previousSunday(new Date(2021, 5 /* Jun */, 24))).toEqual(new Date(2021, 5 /* Jun */, 20));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousSunday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
