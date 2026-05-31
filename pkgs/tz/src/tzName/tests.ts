import { describe, expect, it } from "vitest";
import { tzName } from "./index.ts";

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
});
