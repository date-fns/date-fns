/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import sinon from "sinon";
import { formatISO } from "./index.js";
import { generateOffset } from "../_lib/test/index.js";

describe("formatISO", () => {
  it("formats ISO-8601 extended format", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    const tzOffsetExtended = generateOffset(date);
    assert(formatISO(date) === `2019-03-03T19:00:52${tzOffsetExtended}`);

    const getTimezoneOffsetStub = sinon.stub(
      Date.prototype,
      "getTimezoneOffset",
    );

    getTimezoneOffsetStub.returns(480);
    const tzNegativeOffsetExtended = generateOffset(date);
    assert(
      formatISO(date) === `2019-03-03T19:00:52${tzNegativeOffsetExtended}`,
    );

    getTimezoneOffsetStub.returns(0);
    const tzZOffsetExtended = generateOffset(date);
    assert(formatISO(date) === `2019-03-03T19:00:52${tzZOffsetExtended}`);

    getTimezoneOffsetStub.restore();
  });

  it("accepts a timestamp", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123).getTime();
    const tzOffsetExtended = generateOffset(new Date(date));
    assert(formatISO(date) === `2019-03-03T19:00:52${tzOffsetExtended}`);
  });

  it("formats ISO-8601 basic format", () => {
    const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
    const tzOffsetBasic = generateOffset(date);
    assert(
      formatISO(date, { format: "basic" }) ===
        `20191004T123013${tzOffsetBasic}`,
    );
  });

  it("formats only date", () => {
    const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789);

    assert(
      formatISO(date, { representation: "date", format: "extended" }) ===
        "2019-12-11",
    );
    assert(
      formatISO(date, { representation: "date", format: "basic" }) ===
        "20191211",
    );
  });

  it("formats only time", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    const tzOffset = generateOffset(date);

    assert(
      formatISO(date, { representation: "time", format: "extended" }) ===
        `19:00:52${tzOffset}`,
    );
    assert(
      formatISO(date, { representation: "time", format: "basic" }) ===
        `190052${tzOffset}`,
    );
  });

  it("throws RangeError if the time value is invalid", () => {
    assert.throws(formatISO.bind(null, new Date(NaN)), RangeError);
  });
});
