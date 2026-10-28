import { addDays, set } from "date-fns";
import { describe, expect, it } from "vitest";
import { TZDate, tz } from "../../src/index.ts";

describe("Los Angeles DST", () => {
  describe("valid target time in the system time zone DST gap", () => {
    it("constructs the date", () => {
      const date = new TZDate(2026, 2, 8, 2, 30, "America/Phoenix");

      expect(date.toISOString()).toBe("2026-03-08T02:30:00.000-07:00");
    });

    it("sets hours", () => {
      const date = new TZDate(Date.UTC(2026, 2, 8, 15), "America/Phoenix");
      date.setHours(2, 30);

      expect(date.toISOString()).toBe("2026-03-08T02:30:00.000-07:00");
    });

    it("sets minutes", () => {
      const date = new TZDate(Date.UTC(2026, 2, 8, 9), "America/Phoenix");
      date.setMinutes(30);

      expect(date.toISOString()).toBe("2026-03-08T02:30:00.000-07:00");
    });

    it("sets date", () => {
      const date = new TZDate(Date.UTC(2026, 2, 7, 9, 30), "America/Phoenix");
      date.setDate(8);

      expect(date.toISOString()).toBe("2026-03-08T02:30:00.000-07:00");
    });

    it("sets month", () => {
      const date = new TZDate(Date.UTC(2026, 1, 8, 9, 30), "America/Phoenix");
      date.setMonth(2);

      expect(date.toISOString()).toBe("2026-03-08T02:30:00.000-07:00");
    });

    it("sets full year", () => {
      const date = new TZDate(Date.UTC(2025, 2, 8, 9, 30), "America/Phoenix");
      date.setFullYear(2026);

      expect(date.toISOString()).toBe("2026-03-08T02:30:00.000-07:00");
    });

    it("works with date-fns", () => {
      const options = { in: tz("America/Phoenix") };

      expect(
        set(
          Date.UTC(2026, 2, 8, 15),
          { hours: 2, minutes: 30 },
          options,
        ).toISOString(),
      ).toBe("2026-03-08T02:30:00.000-07:00");
      expect(
        addDays(Date.UTC(2026, 2, 7, 9, 30), 1, options).toISOString(),
      ).toBe("2026-03-08T02:30:00.000-07:00");
    });
  });

  describe("target time zone DST gap", () => {
    it("constructs the date", () => {
      const date = new TZDate(2026, 2, 8, 2, 30, "America/Los_Angeles");

      expect(date.toISOString()).toBe("2026-03-08T03:30:00.000-07:00");
    });

    it("sets hours", () => {
      const date = new TZDate(Date.UTC(2026, 2, 8, 20), "America/Los_Angeles");
      date.setHours(2, 30);

      expect(date.toISOString()).toBe("2026-03-08T03:30:00.000-07:00");
    });
  });

  describe("target time zone DST end", () => {
    it("constructs the date as the earlier moment", () => {
      expect(
        new TZDate(2026, 10, 1, 1, 30, "America/New_York").toISOString(),
      ).toBe("2026-11-01T01:30:00.000-04:00");
      expect(
        new TZDate(2026, 9, 25, 1, 30, "Europe/London").toISOString(),
      ).toBe("2026-10-25T01:30:00.000+01:00");
    });

    it("sets hours to the earlier moment", () => {
      const date = new TZDate(Date.UTC(2026, 10, 1, 17), "America/New_York");
      date.setHours(1, 30);

      expect(date.toISOString()).toBe("2026-11-01T01:30:00.000-04:00");
    });

    it("works with date-fns", () => {
      expect(
        addDays(Date.UTC(2026, 9, 31, 5, 30), 1, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe("2026-11-01T01:30:00.000-04:00");
    });
  });
});
