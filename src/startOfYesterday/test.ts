import { describe, expect, it } from "vitest";
import sinon from "sinon";
import { startOfYesterday } from "./index.js";

describe("startOfYesterday", () => {
  it("returns the start of yesterday", () => {
    const clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime(),
    );

    const result = startOfYesterday();
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 24));

    clock.restore();
  });

  it("handles dates before 100 AD", () => {
    const now = new Date(0);
    now.setFullYear(14, 8 /* Sep */, 25);
    now.setHours(0, 0, 0, 0);
    const clock = sinon.useFakeTimers(now.getTime());

    const expectedResult = new Date(0);
    expectedResult.setFullYear(14, 8 /* Sep */, 24);
    expectedResult.setHours(0, 0, 0, 0);
    const result = startOfYesterday();
    expect(result).toEqual(expectedResult);

    clock.restore();
  });
});
