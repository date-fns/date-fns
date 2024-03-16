import { describe, expect, it } from "vitest";
import { previousSaturday } from "./index.js";

describe("previousSaturday", () => {
  it("returns the previous Saturday given various dates after the same", () => {
    expect(previousSaturday(new Date(2021, 5 /* Jun */, 7))).toEqual(new Date(2021, 5 /* Jun */, 5));

    expect(previousSaturday(new Date(2021, 5 /* Jun */, 8))).toEqual(new Date(2021, 5 /* Jun */, 5));

    expect(previousSaturday(new Date(2021, 5 /* Jun */, 12))).toEqual(new Date(2021, 5 /* Jun */, 5));

    expect(previousSaturday(new Date(2021, 5 /* Jun */, 16))).toEqual(new Date(2021, 5 /* Jun */, 12));

    expect(previousSaturday(new Date(2021, 5 /* Jun */, 17))).toEqual(new Date(2021, 5 /* Jun */, 12));

    expect(previousSaturday(new Date(2021, 5 /* Jun */, 24))).toEqual(new Date(2021, 5 /* Jun */, 19));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousSaturday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
