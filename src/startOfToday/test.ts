import { afterEach, beforeEach, describe, expect, it } from "vitest";
import sinon from "sinon";
import { startOfToday } from "./index.js";

describe("startOfToday", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime(),
    );
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns the current date with the time setted to 00:00:00", () => {
    const result = startOfToday();
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 25));
  });
});
