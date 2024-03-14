import { describe, expect, it } from "vitest";
import { previousThursday } from "./index.js";

describe("previousThursday", () => {
  it("returns the previous Thursday given various dates after the same", () => {
    expect(previousThursday(new Date(2021, 5 /* Jun */, 5))).toEqual(new Date(2021, 5 /* Jun */, 3));

    expect(previousThursday(new Date(2021, 5 /* Jun */, 6))).toEqual(new Date(2021, 5 /* Jun */, 3));

    expect(previousThursday(new Date(2021, 5 /* Jun */, 10))).toEqual(new Date(2021, 5 /* Jun */, 3));

    expect(previousThursday(new Date(2021, 5 /* Jun */, 14))).toEqual(new Date(2021, 5 /* Jun */, 10));

    expect(previousThursday(new Date(2021, 5 /* Jun */, 15))).toEqual(new Date(2021, 5 /* Jun */, 10));

    expect(previousThursday(new Date(2021, 5 /* Jun */, 24))).toEqual(new Date(2021, 5 /* Jun */, 17));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousThursday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
