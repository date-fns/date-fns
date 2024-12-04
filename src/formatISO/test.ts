import { describe, expect, it } from "vitest";
import sinon from "sinon";
import { formatISO } from "./index.js";
import { generateOffset } from "../_lib/test/index.js";

describe("formatISO", () => {
  it("formats ISO-8601 extended format", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    const tzOffsetExtended = generateOffset(date);
    expect(formatISO(date)).toBe(`2019-03-03T19:00:52${tzOffsetExtended}`);

    const getTimezoneOffsetStub = sinon.stub(
      Date.prototype,
      "getTimezoneOffset",
    );

    getTimezoneOffsetStub.returns(480);
    const tzNegativeOffsetExtended = generateOffset(date);
    expect(formatISO(date)).toBe(`2019-03-03T19:00:52${tzNegativeOffsetExtended}`);

    getTimezoneOffsetStub.returns(0);
    const tzZOffsetExtended = generateOffset(date);
    expect(formatISO(date)).toBe(`2019-03-03T19:00:52${tzZOffsetExtended}`);

    getTimezoneOffsetStub.restore();
  });

  it("accepts a timestamp", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123).getTime();
    const tzOffsetExtended = generateOffset(new Date(date));
    expect(formatISO(date)).toBe(`2019-03-03T19:00:52${tzOffsetExtended}`);
  });

  it("formats ISO-8601 basic format", () => {
    const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
    const tzOffsetBasic = generateOffset(date);
    expect(formatISO(date, { format: "basic" })).toBe(`20191004T123013${tzOffsetBasic}`);
  });

  it("formats only date", () => {
    const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789);

    expect(formatISO(date, { representation: "date", format: "extended" })).toBe("2019-12-11");
    expect(formatISO(date, { representation: "date", format: "basic" })).toBe("20191211");
  });

  it("formats only time", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    const tzOffset = generateOffset(date);

    expect(formatISO(date, { representation: "time", format: "extended" })).toBe(`19:00:52${tzOffset}`);
    expect(formatISO(date, { representation: "time", format: "basic" })).toBe(`190052${tzOffset}`);
  });

  it("throws RangeError if the time value is invalid", () => {
    expect(formatISO.bind(null, new Date(NaN))).toThrow(RangeError);
  });
});
