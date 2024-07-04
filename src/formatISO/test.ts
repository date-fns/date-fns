import { describe, expect, it } from "vitest";
import sinon from "sinon";
import { formatISO } from "./index.js";
import { generateOffset } from "../_lib/test/index.js";

describe("formatISO", () => {
  it("formats ISO-8601 extended format excluding milliseconds", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 0);
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

  it("formats ISO-8601 extended format including milliseconds", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    const tzOffsetExtended = generateOffset(date);
    expect(formatISO(date)).toBe(`2019-03-03T19:00:52.123${tzOffsetExtended}`);

    const getTimezoneOffsetStub = sinon.stub(
      Date.prototype,
      "getTimezoneOffset",
    );

    getTimezoneOffsetStub.returns(480);
    const tzNegativeOffsetExtended = generateOffset(date);
    expect(formatISO(date)).toBe(`2019-03-03T19:00:52.123${tzNegativeOffsetExtended}`);

    getTimezoneOffsetStub.returns(0);
    const tzZOffsetExtended = generateOffset(date);
    expect(formatISO(date)).toBe(`2019-03-03T19:00:52.123${tzZOffsetExtended}`);

    getTimezoneOffsetStub.restore();
  });

  it("accepts a timestamp", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123).getTime();
    const tzOffsetExtended = generateOffset(new Date(date));
    expect(formatISO(date)).toBe(`2019-03-03T19:00:52.123${tzOffsetExtended}`);
  });

  it("formats ISO-8601 basic format without milliseconds", () => {
    const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 0);
    const tzOffsetBasic = generateOffset(date);
    expect(formatISO(date, { format: "basic" })).toBe(`20191004T123013${tzOffsetBasic}`);
  });

  it("formats ISO-8601 basic format with milliseconds", () => {
    const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
    const tzOffsetBasic = generateOffset(date);
    expect(formatISO(date, { format: "basic" })).toBe(`20191004T123013456${tzOffsetBasic}`);
  });

  it("formats only date", () => {
    const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789);

    expect(formatISO(date, { representation: "date", format: "extended" })).toBe("2019-12-11");
    expect(formatISO(date, { representation: "date", format: "basic" })).toBe("20191211");
  });

  it("formats only time without milliseconds", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 0);
    const tzOffset = generateOffset(date);

    expect(formatISO(date, { representation: "time", format: "extended" })).toBe(`19:00:52${tzOffset}`);
    expect(formatISO(date, { representation: "time", format: "basic" })).toBe(`190052${tzOffset}`);
  });

  it("formats only time with milliseconds", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    const tzOffset = generateOffset(date);

    expect(formatISO(date, { representation: "time", format: "extended" })).toBe(`19:00:52.123${tzOffset}`);
    expect(formatISO(date, { representation: "time", format: "basic" })).toBe(`190052123${tzOffset}`);
  });

  it('can yield an ISO string parsable by Date to the same value as the Date provided', () => {
    const dateStr = '2015-11-21T12:14:43+04:00';
    const date = new Date(dateStr);
    const isoString = formatISO(date);
    expect(new Date(isoString).getTime()).toBe(date.getTime());

    const shortDateString = '20151121T121443' + generateOffset(date);
    console.log(shortDateString);
    const shortDate = new Date(shortDateString);
    console.log(shortDate.getTime());
    const shortISOString = formatISO(shortDate, {format: 'basic'});
    expect(new Date(shortISOString).getTime()).toBe(shortDate.getTime());
  })

  it("can yield an ISO string parsable to the same time value as the date provided, lossless to 1 millisecond", () => {
    const dateStr = '9999-07-27T06:11:15.001Z'
    const date = new Date(dateStr);
    const isoString = formatISO(date);
    expect(new Date(isoString).getTime()).toBe(date.getTime())
  })

  it("throws RangeError if the time value is invalid", () => {
    expect(formatISO.bind(null, new Date(NaN))).toThrow(RangeError);
  });
});
