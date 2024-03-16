import { describe, expect, it } from "vitest";
import { previousFriday } from "./index.js";

describe("previousFriday", () => {
  it("returns the previous Friday given various dates after the same", () => {
    expect(previousFriday(new Date(2021, 5 /* Jun */, 5))).toEqual(new Date(2021, 5 /* Jun */, 4));

    expect(previousFriday(new Date(2021, 5 /* Jun */, 6))).toEqual(new Date(2021, 5 /* Jun */, 4));

    expect(previousFriday(new Date(2021, 5 /* Jun */, 11))).toEqual(new Date(2021, 5 /* Jun */, 4));

    expect(previousFriday(new Date(2021, 5 /* Jun */, 14))).toEqual(new Date(2021, 5 /* Jun */, 11));

    expect(previousFriday(new Date(2021, 5 /* Jun */, 15))).toEqual(new Date(2021, 5 /* Jun */, 11));

    expect(previousFriday(new Date(2021, 5 /* Jun */, 24))).toEqual(new Date(2021, 5 /* Jun */, 18));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousFriday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
