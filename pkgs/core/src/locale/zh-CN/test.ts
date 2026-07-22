import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { zhCN } from "./index.ts";

describe("zh-CN locale", () => {
  it("parses October with localized month tokens", () => {
    expect(
      parse("2022年10月27日", "yyyy年MMMdd日", new Date(), {
        locale: zhCN,
      }),
    ).toEqual(new Date(2022, 9 /* Oct */, 27));

    expect(
      parse("2022年十月27日", "yyyy年MMMMdd日", new Date(), {
        locale: zhCN,
      }),
    ).toEqual(new Date(2022, 9 /* Oct */, 27));
  });

  it("parses November and December as distinct months", () => {
    expect(
      parse("2022年11月27日", "yyyy年MMMdd日", new Date(), {
        locale: zhCN,
      }),
    ).toEqual(new Date(2022, 10 /* Nov */, 27));

    expect(
      parse("2022年12月27日", "yyyy年MMMdd日", new Date(), {
        locale: zhCN,
      }),
    ).toEqual(new Date(2022, 11 /* Dec */, 27));
  });

  describe("formatDistance", () => {
    it("works with a token without forms", () => {
      expect(zhCN.formatDistance("halfAMinute", 30)).toBe("半分钟");
    });

    it("works with the one form", () => {
      expect(zhCN.formatDistance("xSeconds", 1)).toBe("1 秒");
    });

    it("works with the other form", () => {
      expect(zhCN.formatDistance("xSeconds", 30)).toBe("30 秒");
    });

    it("adds a suffix for the future", () => {
      expect(
        zhCN.formatDistance("xDays", 2, { addSuffix: true, comparison: 1 }),
      ).toBe("2 天内");
    });

    it("adds a suffix for the past", () => {
      expect(
        zhCN.formatDistance("xDays", 2, { addSuffix: true, comparison: -1 }),
      ).toBe("2 天前");
    });
  });

  describe("formatRelative", () => {
    const baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32);

    it("uses the plain format for dates in the same week", () => {
      expect(
        zhCN.formatRelative(
          "lastWeek",
          new Date(1986, 3 /* Apr */, 1),
          baseDate,
        ),
      ).toBe("eeee p");
    });

    it("prefixes the format for dates in the last week", () => {
      expect(
        zhCN.formatRelative(
          "lastWeek",
          new Date(1986, 2 /* Mar */, 26),
          baseDate,
        ),
      ).toBe("'上个'eeee p");
    });

    it("prefixes the format for dates in the next week", () => {
      expect(
        zhCN.formatRelative(
          "nextWeek",
          new Date(1986, 3 /* Apr */, 7),
          baseDate,
        ),
      ).toBe("'下个'eeee p");
    });

    it("returns the format for other tokens", () => {
      expect(zhCN.formatRelative("today", baseDate, baseDate)).toBe("'今天' p");
    });
  });

  describe("ordinalNumber", () => {
    const date = new Date(2017, 0 /* Jan */, 4, 10, 32, 5);

    it("suffixes dates", () => {
      expect(format(date, "do", { locale: zhCN })).toBe("4日");
    });

    it("suffixes hours", () => {
      expect(format(date, "ho", { locale: zhCN })).toBe("10时");
    });

    it("suffixes minutes", () => {
      expect(format(date, "mo", { locale: zhCN })).toBe("32分");
    });

    it("suffixes seconds", () => {
      expect(format(date, "so", { locale: zhCN })).toBe("5秒");
    });

    it("prefixes other units", () => {
      expect(format(date, "Qo", { locale: zhCN })).toBe("第 1");
    });
  });

  describe("quarter", () => {
    it("formats a quarter", () => {
      expect(
        format(new Date(2017, 0 /* Jan */, 1), "QQQ", { locale: zhCN }),
      ).toBe("第一季");
    });

    it("parses an ordinal quarter", () => {
      const result = parse("第 3", "Qo", new Date(2017, 0 /* Jan */, 1), {
        locale: zhCN,
      });
      expect(result).toEqual(new Date(2017, 6 /* Jul */, 1));
    });

    it("parses a narrow quarter", () => {
      const result = parse("3", "QQQQQ", new Date(2017, 0 /* Jan */, 1), {
        locale: zhCN,
      });
      expect(result).toEqual(new Date(2017, 6 /* Jul */, 1));
    });
  });
});
