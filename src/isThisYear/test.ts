import { tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { type DateFns } from "../types.js";
import { isThisYear } from "./index.js";

describe("isThisYear", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 0 /* Jan */, 1).getTime());
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date and the current date have the same year", () => {
    const date = new Date(2014, 6 /* Jul */, 2);
    expect(isThisYear(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different years", () => {
    const date = new Date(2015, 6 /* Jul */, 2);
    expect(isThisYear(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 6 /* Jul */, 2).getTime();
    expect(isThisYear(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(isThisYear(new UTCDate(+new Date(2014, 0 /* Jan */, 1)))).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      clock = sinon.useFakeTimers(new Date("2024-01-02T00:00:00Z").getTime());
      expect(
        isThisYear("2024-01-01T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
      expect(
        isThisYear("2024-01-01T05:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateType | number | string,
        options?: DateFns.ContextOptions<ResultDate>,
      ) {
        isThisYear(arg, { in: options?.in });
      }
    });
  });
});
