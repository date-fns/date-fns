import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { formatDistance } from "../../formatDistance/index.ts";
import { formatDistanceStrict } from "../../formatDistanceStrict/index.ts";
import { formatRelative } from "../../formatRelative/index.ts";
import { parse } from "../../parse/index.ts";
import { mg as mgExport } from "../index.ts";
import { mg } from "./index.ts";

describe("mg locale", () => {
  describe("locale metadata and public export", () => {
    it("has the expected code and calendar options", () => {
      expect(mg.code).toBe("mg");
      expect(mg.options?.weekStartsOn).toBe(1);
      expect(mg.options?.firstWeekContainsDate).toBe(1);
    });

    it("is re-exported from the locale index", () => {
      expect(mgExport).toBe(mg);
    });
  });

  describe("format (Issue #4229)", () => {
    it("formats full date with PPPP correctly without distorted calendar days", () => {
      // 2026-06-25 is Thursday
      const thursday = new Date(2026, 5, 25);
      expect(format(thursday, "PPPP", { locale: mg })).toBe(
        "Alakamisy 25 Jona 2026",
      );

      // 2026-06-26 is Friday
      const friday = new Date(2026, 5, 26);
      expect(format(friday, "PPPP", { locale: mg })).toBe("Zoma 26 Jona 2026");
    });

    it("formats all weekday widths correctly", () => {
      // 2024-01-07 is Sunday
      const weekdaysWide = [
        "Alahady",
        "Alatsinainy",
        "Talata",
        "Alarobia",
        "Alakamisy",
        "Zoma",
        "Asabotsy",
      ];
      const weekdaysShort = [
        "Alah",
        "Alats",
        "Tal",
        "Alar",
        "Alak",
        "Zom",
        "Asab",
      ];
      const weekdaysNarrow = ["A", "A", "T", "A", "A", "Z", "A"];

      weekdaysWide.forEach((expected, i) => {
        const date = new Date(2024, 0, 7 + i);
        expect(format(date, "EEEE", { locale: mg })).toBe(expected);
        expect(format(date, "EEE", { locale: mg })).toBe(weekdaysShort[i]);
        expect(format(date, "EEEEE", { locale: mg })).toBe(weekdaysNarrow[i]);
      });
    });

    it("formats all month widths correctly", () => {
      const monthsWide = [
        "Janoary",
        "Febroary",
        "Martsa",
        "Aprily",
        "Mey",
        "Jona",
        "Jolay",
        "Aogositra",
        "Septambra",
        "Oktobra",
        "Novambra",
        "Desambra",
      ];
      const monthsShort = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mey",
        "Jon",
        "Jol",
        "Aog",
        "Sep",
        "Okt",
        "Nov",
        "Des",
      ];
      const monthsNarrow = [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D",
      ];

      monthsWide.forEach((expected, i) => {
        const date = new Date(2024, i, 1);
        expect(format(date, "MMMM", { locale: mg })).toBe(expected);
        expect(format(date, "MMM", { locale: mg })).toBe(monthsShort[i]);
        expect(format(date, "MMMMM", { locale: mg })).toBe(monthsNarrow[i]);
      });
    });

    it("formats long date patterns (P, PP, PPP, PPPP)", () => {
      const date = new Date(2026, 5, 25, 14, 30, 45);
      expect(format(date, "P", { locale: mg })).toBe("2026-06-25");
      expect(format(date, "PP", { locale: mg })).toBe("2026 Jon 25");
      expect(format(date, "PPP", { locale: mg })).toBe("25 Jona 2026");
      expect(format(date, "PPPP", { locale: mg })).toBe(
        "Alakamisy 25 Jona 2026",
      );
    });
  });

  describe("parse and round-trip", () => {
    it("round-trips all full month names", () => {
      const monthsWide = [
        "Janoary",
        "Febroary",
        "Martsa",
        "Aprily",
        "Mey",
        "Jona",
        "Jolay",
        "Aogositra",
        "Septambra",
        "Oktobra",
        "Novambra",
        "Desambra",
      ];

      monthsWide.forEach((monthName, i) => {
        const formatted = `15 ${monthName} 2024`;
        const parsed = parse(formatted, "d MMMM y", new Date(2024, 0, 1), {
          locale: mg,
        });
        expect(parsed.getFullYear()).toBe(2024);
        expect(parsed.getMonth()).toBe(i);
        expect(parsed.getDate()).toBe(15);
      });
    });

    it("round-trips all abbreviated month names including with trailing periods", () => {
      const monthsShort = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mey",
        "Jon",
        "Jol",
        "Aog",
        "Sep",
        "Okt",
        "Nov",
        "Des",
      ];

      monthsShort.forEach((monthName, i) => {
        const parsed = parse(`15 ${monthName} 2024`, "d MMM y", new Date(), {
          locale: mg,
        });
        expect(parsed.getMonth()).toBe(i);

        const parsedDot = parse(
          `15 ${monthName}. 2024`,
          "d MMM y",
          new Date(),
          { locale: mg },
        );
        expect(parsedDot.getMonth()).toBe(i);
      });
    });

    it("round-trips all weekday names", () => {
      const baseSunday = new Date(2024, 0, 7); // 2024-01-07 Sunday
      const weekdaysWide = [
        "Alahady",
        "Alatsinainy",
        "Talata",
        "Alarobia",
        "Alakamisy",
        "Zoma",
        "Asabotsy",
      ];

      weekdaysWide.forEach((dayName, i) => {
        const parsed = parse(
          dayName,
          "EEEE",
          new Date(baseSunday.getTime() + i * 86400000),
          { locale: mg },
        );
        expect(parsed.getDay()).toBe(i);
      });
    });
  });

  describe("formatRelative", () => {
    const baseDate = new Date(2024, 5, 25, 10, 30); // 2024-06-25 10:30 (Tuesday)

    it("formats relative dates with properly escaped apostrophes", () => {
      const yesterday = new Date(2024, 5, 24, 10, 30);
      expect(formatRelative(yesterday, baseDate, { locale: mg })).toBe(
        "Omaly tamin'ny 10:30",
      );

      const today = new Date(2024, 5, 25, 10, 30);
      expect(formatRelative(today, baseDate, { locale: mg })).toBe(
        "Anio amin'ny 10:30",
      );

      const tomorrow = new Date(2024, 5, 26, 10, 30);
      expect(formatRelative(tomorrow, baseDate, { locale: mg })).toBe(
        "Rahampitso amin'ny 10:30",
      );

      const lastWeek = new Date(2024, 5, 21, 10, 30);
      expect(formatRelative(lastWeek, baseDate, { locale: mg })).toBe(
        "Tamin'ny Zoma tamin'ny 10:30",
      );

      const nextWeek = new Date(2024, 5, 29, 10, 30);
      expect(formatRelative(nextWeek, baseDate, { locale: mg })).toBe(
        "Asabotsy amin'ny 10:30",
      );
    });
  });

  describe("formatDistance", () => {
    it("formats distance without suffixes", () => {
      expect(
        formatDistance(new Date(2024, 0, 1), new Date(2024, 0, 1, 0, 1), {
          locale: mg,
        }),
      ).toBe("1 minitra");

      expect(
        formatDistance(new Date(2024, 0, 1), new Date(2024, 0, 1, 0, 5), {
          locale: mg,
        }),
      ).toBe("5 minitra");

      expect(
        formatDistance(new Date(2024, 0, 1), new Date(2024, 0, 1, 2), {
          locale: mg,
        }),
      ).toBe("eo ho eo amin'ny 2 ora");
    });

    it("formats distance with suffix for past and future", () => {
      // past
      expect(
        formatDistance(new Date(2024, 0, 1, 0, 0), new Date(2024, 0, 1, 0, 5), {
          addSuffix: true,
          locale: mg,
        }),
      ).toBe("5 minitra lasa izay");

      // future
      expect(
        formatDistance(new Date(2024, 0, 1, 0, 5), new Date(2024, 0, 1, 0, 0), {
          addSuffix: true,
          locale: mg,
        }),
      ).toBe("ao anatin'ny 5 minitra");
    });

    it("formats strict distance correctly", () => {
      expect(
        formatDistanceStrict(
          new Date(2024, 0, 1, 0, 0),
          new Date(2024, 0, 1, 0, 1),
          { locale: mg },
        ),
      ).toBe("1 minitra");

      expect(
        formatDistanceStrict(
          new Date(2024, 0, 1, 0, 1),
          new Date(2024, 0, 1, 0, 0),
          { addSuffix: true, locale: mg },
        ),
      ).toBe("ao anatin'ny 1 minitra");

      expect(
        formatDistanceStrict(
          new Date(2024, 0, 1, 0, 0),
          new Date(2024, 0, 1, 0, 1),
          { addSuffix: true, locale: mg },
        ),
      ).toBe("1 minitra lasa izay");
    });
  });
});
