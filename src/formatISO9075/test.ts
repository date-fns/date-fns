/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { formatISO9075 } from "./index.js";

describe("formatISO9075", () => {
  it("formats ISO-9075 extended date format", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    assert(formatISO9075(date) === "2019-03-03 19:00:52");
  });

  it("accepts a timestamp", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123).getTime();
    assert(formatISO9075(date) === "2019-03-03 19:00:52");
  });

  it("formats ISO-8601 basic date format", () => {
    const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
    assert(formatISO9075(date, { format: "basic" }) === "20191004 123013");
  });

  it("formats only date", () => {
    const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789);
    assert(
      formatISO9075(date, { representation: "date", format: "extended" }) ===
        "2019-12-11",
    );
    assert(
      formatISO9075(date, { representation: "date", format: "basic" }) ===
        "20191211",
    );
  });

  it("formats only time", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    assert(
      formatISO9075(date, { representation: "time", format: "extended" }) ===
        "19:00:52",
    );
    assert(
      formatISO9075(date, { representation: "time", format: "basic" }) ===
        "190052",
    );
  });

  it("throws RangeError if the time value is invalid", () => {
    assert.throws(formatISO9075.bind(null, new Date(NaN)), RangeError);
  });
});
