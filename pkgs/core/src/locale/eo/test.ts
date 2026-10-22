import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { formatDistance } from "../../formatDistance/index.ts";
import { parse } from "../../parse/index.ts";
import { eo } from "./index.ts";

describe("eo locale", () => {
  describe("formatDistance", () => {
    it("returns the singular form for one unit", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4, 10, 33),
        new Date(1986, 3 /* Apr */, 4, 10, 32),
        { locale: eo },
      );
      expect(result).toBe("1 minuto");
    });

    it("returns the plural form with the count for multiple units", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 19),
        new Date(1986, 3 /* Apr */, 4),
        { locale: eo },
      );
      expect(result).toBe("15 tagoj");
    });

    it("returns the invariable form for half a minute", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4, 10, 32, 25),
        new Date(1986, 3 /* Apr */, 4, 10, 32, 0),
        { locale: eo, includeSeconds: true },
      );
      expect(result).toBe("duonminuto");
    });

    it("adds the future suffix when `addSuffix` is true", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 19),
        new Date(1986, 3 /* Apr */, 4),
        { locale: eo, addSuffix: true },
      );
      expect(result).toBe("post 15 tagoj");
    });

    it("adds the past suffix when `addSuffix` is true", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4),
        new Date(1986, 3 /* Apr */, 19),
        { locale: eo, addSuffix: true },
      );
      expect(result).toBe("antaŭ 15 tagoj");
    });
  });

  describe("ordinalNumber", () => {
    it("formats an ordinal number with the `-a` suffix", () => {
      const result = format(new Date(2014, 3 /* Apr */, 7), "do", {
        locale: eo,
      });
      expect(result).toBe("7-a");
    });
  });

  describe("quarter", () => {
    it("formats a wide quarter", () => {
      const result = format(new Date(2014, 3 /* Apr */, 7), "QQQQ", {
        locale: eo,
      });
      expect(result).toBe("2-a kvaronjaro");
    });

    it("parses a wide quarter", () => {
      const result = parse(
        "1-a kvaronjaro",
        "QQQQ",
        new Date(1986, 3 /* Apr */, 4),
        { locale: eo },
      );
      expect(result).toEqual(new Date(1986, 0 /* Jan */, 1));
    });
  });
});
