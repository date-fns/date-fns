import { describe, expect, it } from "vitest";
import { formatRFC7231 } from "./index.ts";

describe("formatRFC7231", () => {
  it("formats RFC-7231 date string", () => {
    const date = new Date(Date.UTC(2019, 2, 3, 19, 0, 52));
    expect(formatRFC7231(date)).toBe("Sun, 03 Mar 2019 19:00:52 GMT");
  });

  it("accepts a timestamp", () => {
    const date = Date.UTC(2019, 9, 4, 12, 30, 13);
    expect(formatRFC7231(date)).toBe("Fri, 04 Oct 2019 12:30:13 GMT");
  });

  it("throws RangeError if the time value is invalid", () => {
    expect(formatRFC7231.bind(null, new Date(NaN))).toThrow(RangeError);
  });

  it("pads years below 1000 to four digits", () => {
    // RFC 7231 defines the HTTP-date year as `4DIGIT`, so a year below 1000 has
    // to be zero padded rather than emitted at its natural width.
    const date = new Date(Date.UTC(2019, 0 /* Jan */, 1, 12, 0, 0));

    date.setUTCFullYear(999);
    expect(formatRFC7231(date)).toBe("Tue, 01 Jan 0999 12:00:00 GMT");

    date.setUTCFullYear(99);
    expect(formatRFC7231(date)).toBe("Thu, 01 Jan 0099 12:00:00 GMT");

    date.setUTCFullYear(1);
    expect(formatRFC7231(date)).toBe("Mon, 01 Jan 0001 12:00:00 GMT");
  });
});
