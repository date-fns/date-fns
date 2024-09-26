import { describe, expect, it } from "vitest";
import sinon from "sinon";
import { formatRFC822 } from "./index.js";
import { generateOffset } from "../_lib/test/index.js";

describe("formatRFC822", () => {
  it("formats RFC-822 date string", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    expect(formatRFC822(date)).toBe(`04 Mar 19 00:00:52 ${generateOffset(date)}`);

    const getTimezoneOffsetStub = sinon.stub(
      Date.prototype,
      "getTimezoneOffset",
    );

    getTimezoneOffsetStub.returns(0);
    expect(formatRFC822(date)).toBe("04 Mar 19 00:00:52 Z");

    getTimezoneOffsetStub.returns(480);
    expect(formatRFC822(date)).toBe("04 Mar 19 00:00:52 -08:00");

    getTimezoneOffsetStub.restore();
  });

  it("accepts a timestamp", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    const time = date.getTime();
    expect(formatRFC822(time)).toBe(`04 Mar 19 00:00:52 ${generateOffset(date)}`);
  });

  it("allows to include day", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    expect(formatRFC822(date, { includeDay: true })).toBe(`Mon, 04 Mar 19 00:00:52 ${generateOffset(date)}`);
  });

  it("throws RangeError if the time value is invalid", () => {
    expect(formatRFC822.bind(null, new Date(NaN))).toThrow(RangeError);
  });
});
