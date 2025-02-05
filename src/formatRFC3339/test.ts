import { describe, expect, it } from "vitest";
import sinon from "sinon";
import { formatRFC3339 } from "./index.js";
import { generateOffset } from "../_lib/test/index.js";
import { tz } from "@date-fns/tz";

describe("formatRFC3339", () => {
  it("formats RFC-3339 date string", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    expect(formatRFC3339(date)).toBe(
      `2019-03-03T19:00:52${generateOffset(date)}`,
    );

    const getTimezoneOffsetStub = sinon.stub(
      Date.prototype,
      "getTimezoneOffset",
    );

    getTimezoneOffsetStub.returns(0);
    expect(formatRFC3339(date)).toBe("2019-03-03T19:00:52Z");

    getTimezoneOffsetStub.returns(480);
    expect(formatRFC3339(date)).toBe("2019-03-03T19:00:52-08:00");

    getTimezoneOffsetStub.restore();
  });

  it("accepts a timestamp", () => {
    const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
    const time = date.getTime();
    expect(formatRFC3339(time)).toBe(
      `2019-10-04T12:30:13${generateOffset(date)}`,
    );
  });

  it("allows to specify digits of second fractions", () => {
    const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789);
    expect(formatRFC3339(date, { fractionDigits: 3 })).toBe(
      `2019-12-11T01:00:00.789${generateOffset(date)}`,
    );
  });

  it("works when ms < 100", () => {
    const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 12);
    expect(formatRFC3339(date, { fractionDigits: 2 })).toBe(
      `2019-12-11T01:00:00.01${generateOffset(date)}`,
    );
  });

  it("throws RangeError if the time value is invalid", () => {
    expect(formatRFC3339.bind(null, new Date(NaN))).toThrow(RangeError);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const date = "2024-09-17T10:00:00Z";
      expect(
        formatRFC3339(date, {
          in: tz("Pacific/Midway"), // UTC-11:00
        }),
      ).toBe("2024-09-16T23:00:00-11:00");
      expect(
        formatRFC3339(date, {
          in: tz("Pacific/Kiritimati"), // UTC+14:00
        }),
      ).toBe("2024-09-18T00:00:00+14:00");
    });
  });
});
