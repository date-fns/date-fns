import { describe, expect, it } from "vitest";
import { type TZNameFormat, tzName } from "./index.ts";

describe("tzName", () => {
  const dateStr = "2020-01-01T00:00:00.000Z";

  it("returns time zone name", () => {
    expect(tzName("Asia/Singapore", new Date(dateStr))).toBe(
      "Singapore Standard Time",
    );
    expect(tzName("America/New_York", new Date(dateStr))).toBe(
      "Eastern Standard Time",
    );
  });

  describe("with format", () => {
    it("short", () => {
      expect(tzName("Asia/Singapore", new Date(dateStr), "short")).toBe(
        "GMT+8",
      );
      expect(tzName("America/New_York", new Date(dateStr), "short")).toBe(
        "EST",
      );
    });

    it("long", () => {
      expect(tzName("Asia/Singapore", new Date(dateStr), "long")).toBe(
        "Singapore Standard Time",
      );
      expect(tzName("America/New_York", new Date(dateStr), "long")).toBe(
        "Eastern Standard Time",
      );
    });

    it("shortGeneric", () => {
      expect(tzName("Asia/Singapore", new Date(dateStr), "shortGeneric")).toBe(
        "Singapore Time",
      );
      expect(
        tzName("America/New_York", new Date(dateStr), "shortGeneric"),
      ).toBe("ET");
    });

    it("longGeneric", () => {
      expect(tzName("Asia/Singapore", new Date(dateStr), "longGeneric")).toBe(
        "Singapore Standard Time",
      );
      expect(tzName("America/New_York", new Date(dateStr), "longGeneric")).toBe(
        "Eastern Time",
      );
    });
  });

  describe("formatter reuse", () => {
    const winter = new Date("2020-01-01T00:00:00.000Z");
    const summer = new Date("2020-07-01T00:00:00.000Z");

    it("returns correct names when calls are interleaved", () => {
      const cases: Array<[string, Date, TZNameFormat | undefined, string]> = [
        ["America/New_York", winter, undefined, "Eastern Standard Time"],
        ["America/New_York", summer, undefined, "Eastern Daylight Time"],
        ["America/New_York", winter, "short", "EST"],
        ["America/New_York", summer, "short", "EDT"],
        ["America/New_York", summer, "longGeneric", "Eastern Time"],
        ["Asia/Singapore", winter, "short", "GMT+8"],
        ["asia/singapore", winter, undefined, "Singapore Standard Time"],
      ];
      for (let pass = 0; pass < 2; pass++) {
        for (const [timeZone, date, format, expected] of cases) {
          expect(tzName(timeZone, date, format)).toBe(expected);
        }
      }
    });

    it("throws on invalid arguments every time", () => {
      tzName("America/New_York", winter);
      for (let pass = 0; pass < 2; pass++) {
        expect(() => tzName("Mars/Phobos", winter)).toThrow(RangeError);
        expect(() =>
          tzName("America/New_York", winter, "tiny" as TZNameFormat),
        ).toThrow(RangeError);
      }
    });
  });
});
