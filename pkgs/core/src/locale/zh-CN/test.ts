import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { formatDistance } from "../../formatDistance/index.ts";
import { formatRelative } from "../../formatRelative/index.ts";
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
    it("returns the singular form for one unit", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4, 10, 33),
        new Date(1986, 3 /* Apr */, 4, 10, 32),
        { locale: zhCN },
      );
      expect(result).toBe("1 分钟");
    });

    it("returns the plural form with the count for multiple units", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4, 10, 32, 3),
        new Date(1986, 3 /* Apr */, 4, 10, 32, 0),
        { locale: zhCN, includeSeconds: true },
      );
      expect(result).toBe("不到 5 秒");
    });

    it("returns the invariable form for half a minute", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4, 10, 32, 25),
        new Date(1986, 3 /* Apr */, 4, 10, 32, 0),
        { locale: zhCN, includeSeconds: true },
      );
      expect(result).toBe("半分钟");
    });

    it("adds the future suffix when `addSuffix` is true", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 19),
        new Date(1986, 3 /* Apr */, 4),
        { locale: zhCN, addSuffix: true },
      );
      expect(result).toBe("15 天内");
    });

    it("adds the past suffix when `addSuffix` is true", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4),
        new Date(1986, 3 /* Apr */, 19),
        { locale: zhCN, addSuffix: true },
      );
      expect(result).toBe("15 天前");
    });
  });

  describe("formatRelative", () => {
    // In these tests the base date is Friday, April 4, 1986, and the week
    // starts on Monday (see `zhCN.options.weekStartsOn`).
    const baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32);

    it("uses no qualifier for a date within the same week", () => {
      const result = formatRelative(
        new Date(1986, 3 /* Apr */, 2, 10, 32),
        baseDate,
        { locale: zhCN },
      );
      expect(result).toBe("星期三 上午 10:32");
    });

    it("uses the last week qualifier for a date in the previous week", () => {
      const result = formatRelative(
        new Date(1986, 2 /* Mar */, 30, 10, 32),
        baseDate,
        { locale: zhCN },
      );
      expect(result).toBe("上个星期日 上午 10:32");
    });

    it("uses the next week qualifier for a date in the following week", () => {
      const result = formatRelative(
        new Date(1986, 3 /* Apr */, 7, 10, 32),
        baseDate,
        { locale: zhCN },
      );
      expect(result).toBe("下个星期一 上午 10:32");
    });

    it("uses no qualifier for a later date within the same week", () => {
      const result = formatRelative(
        new Date(1986, 3 /* Apr */, 6, 10, 32),
        baseDate,
        { locale: zhCN },
      );
      expect(result).toBe("星期日 上午 10:32");
    });

    it("formats tomorrow", () => {
      const result = formatRelative(
        new Date(1986, 3 /* Apr */, 5, 10, 32),
        baseDate,
        { locale: zhCN },
      );
      expect(result).toBe("明天 上午 10:32");
    });
  });

  describe("ordinalNumber", () => {
    it("formats ordinal date, hour, minute and second", () => {
      const date = new Date(2014, 3 /* Apr */, 7, 5, 9, 3);
      expect(format(date, "do", { locale: zhCN })).toBe("7日");
      expect(format(date, "ho", { locale: zhCN })).toBe("5时");
      expect(format(date, "mo", { locale: zhCN })).toBe("9分");
      expect(format(date, "so", { locale: zhCN })).toBe("3秒");
    });

    it("formats other ordinal units with the generic prefix", () => {
      const result = format(new Date(2014, 3 /* Apr */, 7), "wo", {
        locale: zhCN,
      });
      expect(result).toBe("第 15");
    });

    it("parses an ordinal date", () => {
      const result = parse("7日", "do", new Date(1986, 3 /* Apr */, 4), {
        locale: zhCN,
      });
      expect(result).toEqual(new Date(1986, 3 /* Apr */, 7));
    });
  });

  describe("quarter", () => {
    it("formats an abbreviated and a wide quarter", () => {
      const date = new Date(2014, 3 /* Apr */, 7);
      expect(format(date, "QQQ", { locale: zhCN })).toBe("第二季");
      expect(format(date, "QQQQ", { locale: zhCN })).toBe("第二季度");
    });

    it("parses an ordinal quarter", () => {
      const result = parse("第 3", "Qo", new Date(1986, 3 /* Apr */, 4), {
        locale: zhCN,
      });
      expect(result).toEqual(new Date(1986, 6 /* Jul */, 1));
    });
  });

  describe("era", () => {
    it("parses the narrow B.C. era when the abbreviated one doesn't match", () => {
      const result = parse("前", "G", new Date(1986, 3 /* Apr */, 4), {
        locale: zhCN,
      });
      const expectedResult = new Date(0);
      expectedResult.setFullYear(0, 0 /* Jan */, 1);
      expectedResult.setHours(0, 0, 0, 0);
      expect(result).toEqual(expectedResult);
    });

    it("parses the narrow B.C. era with the wide token", () => {
      const result = parse("前", "GGGG", new Date(1986, 3 /* Apr */, 4), {
        locale: zhCN,
      });
      const expectedResult = new Date(0);
      expectedResult.setFullYear(0, 0 /* Jan */, 1);
      expectedResult.setHours(0, 0, 0, 0);
      expect(result).toEqual(expectedResult);
    });
  });
});
