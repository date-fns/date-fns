import { tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { type DateFns } from "../types.js";
import { isTomorrow } from "./index.js";

describe("isTomorrow", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date is tomorrow", () => {
    const result = isTomorrow(new Date(2014, 8 /* Sep */, 26));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not tomorrow", () => {
    const result = isTomorrow(new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isTomorrow(new Date(2014, 8 /* Sep */, 26).getTime());
    expect(result).toBe(true);
  });

  it("respects date extensions", () => {
    expect(isTomorrow(new UTCDate(+new Date(2014, 8 /* Aug */, 26)))).toBe(
      true,
    );
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      clock = sinon.useFakeTimers(+new Date("2024-08-18T15:00:00Z"));
      expect(
        isTomorrow("2024-08-19T04:00:00Z", { in: tz("America/New_York") }),
      ).toBe(true);
      expect(
        isTomorrow("2024-08-19T03:00:00Z", { in: tz("America/New_York") }),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateType | number | string,
        options?: DateFns.ContextOptions<ResultDate>,
      ) {
        isTomorrow(arg, { in: options?.in });
      }
    });
  });
});
