import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { eo } from "./index.ts";

describe("eo locale", () => {
  describe("formatDistance", () => {
    it("works with a token without forms", () => {
      expect(eo.formatDistance("halfAMinute", 30)).toBe("duonminuto");
    });

    it("works with the one form", () => {
      expect(eo.formatDistance("xSeconds", 1)).toBe("1 sekundo");
    });

    it("works with the other form", () => {
      expect(eo.formatDistance("xSeconds", 30)).toBe("30 sekundoj");
    });

    it("adds a suffix for the future", () => {
      expect(
        eo.formatDistance("xSeconds", 30, { addSuffix: true, comparison: 1 }),
      ).toBe("post 30 sekundoj");
    });

    it("adds a suffix for the past", () => {
      expect(
        eo.formatDistance("xSeconds", 30, { addSuffix: true, comparison: -1 }),
      ).toBe("antaŭ 30 sekundoj");
    });
  });

  describe("ordinalNumber", () => {
    it("adds the -a suffix", () => {
      const result = format(new Date(2017, 0 /* Jan */, 4), "do", {
        locale: eo,
      });
      expect(result).toBe("4-a");
    });
  });

  describe("quarter", () => {
    it("formats a quarter", () => {
      expect(
        format(new Date(2017, 0 /* Jan */, 1), "QQQ", { locale: eo }),
      ).toBe("K1");
    });

    it("parses a narrow quarter", () => {
      const result = parse("3", "QQQQQ", new Date(2017, 0 /* Jan */, 1), {
        locale: eo,
      });
      expect(result).toEqual(new Date(2017, 6 /* Jul */, 1));
    });
  });
});
