import { describe, expect, it } from "vitest";
import { enUS } from "./index.ts";
import { zhCN } from "../zh-CN/index.ts";

describe("en-US locale", () => {
  describe("formatLong", () => {
    it("returns the default width format when no width is given", () => {
      expect(enUS.formatLong.date({})).toBe("EEEE, MMMM do, y");
      expect(enUS.formatLong.time({})).toBe("h:mm:ss a zzzz");
    });
  });

  describe("localize", () => {
    it("returns the default width value when no width is given", () => {
      expect(enUS.localize.month(0)).toBe("January");
    });

    it("falls back to the default width for an unknown width", () => {
      expect(enUS.localize.month(0, { width: "short" })).toBe("January");
    });

    it("returns the default formatting width value when no width is given", () => {
      expect(zhCN.localize.dayPeriod("am", { context: "formatting" })).toBe(
        "上午",
      );
    });

    it("falls back to the default formatting width for an unknown width", () => {
      expect(
        zhCN.localize.dayPeriod("am", {
          context: "formatting",
          width: "short",
        }),
      ).toBe("上午");
    });
  });

  describe("match", () => {
    it("applies the value callback from the options", () => {
      const result = enUS.match.ordinalNumber("2nd", {
        unit: "date",
        valueCallback: (value) => Number(value) * 2,
      });
      expect(result?.value).toBe(4);
    });

    it("applies the value callback from the options to match functions", () => {
      const result = enUS.match.era("AD", {
        width: "abbreviated",
        valueCallback: (value) => (Number(value) === 1 ? 0 : 1),
      });
      expect(result?.value).toBe(0);
    });
  });
});
