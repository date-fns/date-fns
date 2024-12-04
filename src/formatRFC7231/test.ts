import { describe, expect, it } from "vitest";
import { formatRFC7231 } from "./index.js";

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
});
