import { describe, expect, it } from "vitest";
import { formatISO9075 } from "./index.js";
import { tz } from "@date-fns/tz";

describe("formatISO9075", () => {
  it("formats ISO-9075 extended date format", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    expect(formatISO9075(date)).toBe("2019-03-03 19:00:52");
  });

  it("accepts a timestamp", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123).getTime();
    expect(formatISO9075(date)).toBe("2019-03-03 19:00:52");
  });

  it("formats ISO-8601 basic date format", () => {
    const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
    expect(formatISO9075(date, { format: "basic" })).toBe("20191004 123013");
  });

  it("formats only date", () => {
    const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789);
    expect(
      formatISO9075(date, { representation: "date", format: "extended" }),
    ).toBe("2019-12-11");
    expect(
      formatISO9075(date, { representation: "date", format: "basic" }),
    ).toBe("20191211");
  });

  it("formats only time", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    expect(
      formatISO9075(date, { representation: "time", format: "extended" }),
    ).toBe("19:00:52");
    expect(
      formatISO9075(date, { representation: "time", format: "basic" }),
    ).toBe("190052");
  });

  it("throws RangeError if the time value is invalid", () => {
    expect(formatISO9075.bind(null, new Date(NaN))).toThrow(RangeError);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const date = "2024-09-17T10:00:00Z";
      expect(
        formatISO9075(date, {
          in: tz("Pacific/Midway"), // UTC-11:00
        }),
      ).toBe("2024-09-16 23:00:00");
      expect(
        formatISO9075(date, {
          in: tz("Pacific/Kiritimati"), // UTC+14:00
        }),
      ).toBe("2024-09-18 00:00:00");
    });
  });
});
