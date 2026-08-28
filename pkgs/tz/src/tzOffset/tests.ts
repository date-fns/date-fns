import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { tzOffset } from "./index.ts";

describe("tzOffset", () => {
  it("returns the timezone offset for the given date", () => {
    const date = new Date("2020-01-15T00:00:00Z");
    expect(tzOffset("America/New_York", date)).toBe(-5 * 60);
    expect(tzOffset("Asia/Pyongyang", date)).toBe(9 * 60);
    expect(tzOffset("Asia/Kathmandu", date)).toBe(345);
    expect(tzOffset("America/New_York", new Date("1880-01-15T00:00:00Z"))).toBe(
      -296.03333333333336,
    );
  });

  it("works at the end of the day", () => {
    const date = new Date("2020-01-15T23:59:59Z");
    expect(tzOffset("America/New_York", date)).toBe(-5 * 60);
    expect(tzOffset("Asia/Pyongyang", date)).toBe(9 * 60);
    expect(tzOffset("Asia/Kathmandu", date)).toBe(345);
    expect(tzOffset("America/New_York", new Date("1880-01-15T23:59:59Z"))).toBe(
      -296.03333333333336,
    );
  });

  it("works at the end of a month", () => {
    const date = new Date("2020-01-31T23:59:59Z");
    expect(tzOffset("America/New_York", date)).toBe(-5 * 60);
    expect(tzOffset("Asia/Pyongyang", date)).toBe(9 * 60);
    expect(tzOffset("Asia/Kathmandu", date)).toBe(345);
    expect(tzOffset("America/New_York", new Date("1880-01-31T23:59:59Z"))).toBe(
      -296.03333333333336,
    );
  });

  it("works at midnight", () => {
    expect(tzOffset("America/New_York", new Date("2020-01-15T05:00:00Z"))).toBe(
      -5 * 60,
    );
    expect(tzOffset("America/New_York", new Date("1880-01-15T05:00:00Z"))).toBe(
      -296.03333333333336,
    );
  });

  it("returns the local timezone offset when the timezone is undefined", () => {
    const date = new Date("2020-01-15T05:00:00Z");
    expect(tzOffset(undefined, date)).toBe(-date.getTimezoneOffset() || 0);
  });

  it("returns 0 if the offset is 0", () => {
    const date = new Date("2020-01-15T00:00:00Z");
    expect(tzOffset("Europe/London", date)).toBe(0);
  });

  it("returns NaN if the offset the date or time zone are invalid", () => {
    expect(tzOffset("Etc/Invalid", new Date("2020-01-15T00:00:00Z"))).toBe(NaN);
    expect(tzOffset("America/New_York", new Date(NaN))).toBe(NaN);
  });

  describe("time zone name formats", () => {
    const date = new Date("2020-01-15T00:00:00Z");

    it("works with IANA time zone names", () => {
      expect(tzOffset("America/New_York", date)).toBe(-300);
      expect(tzOffset("Asia/Pyongyang", date)).toBe(540);
    });

    it("works with ±HH:MM", () => {
      expect(tzOffset("-05:00", date)).toBe(-300);
      expect(tzOffset("-02:30", date)).toBe(-150);
      expect(tzOffset("+05:00", date)).toBe(300);
      expect(tzOffset("+02:30", date)).toBe(150);
      expect(tzOffset("+05:00", new Date("1880-01-15T00:00:00Z"))).toBe(300);
    });

    it("works with ±HHMM", () => {
      expect(tzOffset("-0500", date)).toBe(-300);
      expect(tzOffset("-0230", date)).toBe(-150);
      expect(tzOffset("+0500", date)).toBe(300);
      expect(tzOffset("+0230", date)).toBe(150);
      expect(tzOffset("+0230", new Date("1880-01-15T00:00:00Z"))).toBe(150);
    });

    it("works with ±HH", () => {
      expect(tzOffset("-05", date)).toBe(-300);
      expect(tzOffset("+05", date)).toBe(300);
      expect(tzOffset("+05", new Date("1880-01-15T00:00:00Z"))).toBe(300);
    });
  });

  describe("fractional time zones", () => {
    it("works negative fractional time zones", () => {
      const dst = new Date("2023-03-15T18:00:00.000Z");
      const date = new Date("2023-03-03T18:00:00.000Z");
      expect(tzOffset("America/St_Johns", dst)).toBe(-150);
      expect(tzOffset("America/St_Johns", date)).toBe(-210);
    });

    it("works positive fractional time zones", () => {
      const dst = new Date("2024-04-06T16:00:00.000Z");
      const date = new Date("2024-04-06T16:30:00.000Z");
      expect(tzOffset("Australia/Adelaide", dst)).toBe(630);
      expect(tzOffset("Australia/Adelaide", date)).toBe(570);
    });
  });

  describe("Intl.DateTimeFormat format", { concurrent: false }, () => {
    let mockFormat = vi.fn();
    beforeEach(() => {
      mockFormat = vi.fn(() => "5 GMT+08:00");
      const dtf = new Intl.DateTimeFormat();
      vi.spyOn(Intl, "DateTimeFormat").mockImplementation(function () {
        return { ...dtf, format: mockFormat };
      });
    });

    afterEach(() => {
      vi.mocked(Intl.DateTimeFormat).mockRestore();
    });

    it("reads offset from expected format", () => {
      mockFormat.mockReturnValue("5 GMT+08:00");
      const date = new Date("2020-01-15T00:00:00Z");
      expect(tzOffset("Asia/Manila", date)).toBe(480);
    });

    it("reads offset from polyfill", () => {
      mockFormat.mockReturnValue("5:53 PM GMT-9:30");
      const date = new Date("2020-01-15T00:00:00Z");
      expect(tzOffset("Pacific/Marquesas", date)).toBe(-570);
    });

    it("reads offset from polyfill (without offset)", () => {
      mockFormat.mockReturnValue("5:53 PM GMT");
      const date = new Date("2020-01-15T00:00:00Z");
      expect(tzOffset("UTC", date)).toBe(0);
    });
  });
});
