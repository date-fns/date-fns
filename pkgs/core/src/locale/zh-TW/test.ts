import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { formatDistance } from "../../formatDistance/index.ts";
import { formatRelative } from "../../formatRelative/index.ts";
import { parse } from "../../parse/index.ts";
import { zhTW } from "./index.ts";

describe("zh-TW locale", () => {
  it("parses October with localized month tokens", () => {
    expect(
      parse("2022年10月27日", "yyyy年MMMdd日", new Date(), {
        locale: zhTW,
      }),
    ).toEqual(new Date(2022, 9 /* Oct */, 27));

    expect(
      parse("2022年十月27日", "yyyy年MMMMdd日", new Date(), {
        locale: zhTW,
      }),
    ).toEqual(new Date(2022, 9 /* Oct */, 27));
  });

  it("parses November and December as distinct months", () => {
    expect(
      parse("2022年11月27日", "yyyy年MMMdd日", new Date(), {
        locale: zhTW,
      }),
    ).toEqual(new Date(2022, 10 /* Nov */, 27));

    expect(
      parse("2022年12月27日", "yyyy年MMMdd日", new Date(), {
        locale: zhTW,
      }),
    ).toEqual(new Date(2022, 11 /* Dec */, 27));
  });

  describe("formatDistance", () => {
    it("returns the singular form for one unit", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4, 10, 33),
        new Date(1986, 3 /* Apr */, 4, 10, 32),
        { locale: zhTW },
      );
      expect(result).toBe("1 分鐘");
    });

    it("returns the plural form with the count for multiple units", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4, 10, 32, 3),
        new Date(1986, 3 /* Apr */, 4, 10, 32, 0),
        { locale: zhTW, includeSeconds: true },
      );
      expect(result).toBe("少於 5 秒");
    });

    it("returns the invariable form for half a minute", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4, 10, 32, 25),
        new Date(1986, 3 /* Apr */, 4, 10, 32, 0),
        { locale: zhTW, includeSeconds: true },
      );
      expect(result).toBe("半分鐘");
    });

    it("adds the future suffix when `addSuffix` is true", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 19),
        new Date(1986, 3 /* Apr */, 4),
        { locale: zhTW, addSuffix: true },
      );
      expect(result).toBe("15 天內");
    });

    it("adds the past suffix when `addSuffix` is true", () => {
      const result = formatDistance(
        new Date(1986, 3 /* Apr */, 4),
        new Date(1986, 3 /* Apr */, 19),
        { locale: zhTW, addSuffix: true },
      );
      expect(result).toBe("15 天前");
    });
  });

  describe("formatRelative", () => {
    it("formats yesterday", () => {
      const result = formatRelative(
        new Date(1986, 3 /* Apr */, 3, 10, 32),
        new Date(1986, 3 /* Apr */, 4, 10, 32),
        { locale: zhTW },
      );
      expect(result).toBe("昨天 上午 10:32");
    });
  });

  describe("ordinalNumber", () => {
    it("formats ordinal date, hour, minute and second", () => {
      const date = new Date(2014, 3 /* Apr */, 7, 5, 9, 3);
      expect(format(date, "do", { locale: zhTW })).toBe("7日");
      expect(format(date, "ho", { locale: zhTW })).toBe("5時");
      expect(format(date, "mo", { locale: zhTW })).toBe("9分");
      expect(format(date, "so", { locale: zhTW })).toBe("3秒");
    });

    it("formats other ordinal units with the generic prefix", () => {
      const result = format(new Date(2014, 3 /* Apr */, 7), "wo", {
        locale: zhTW,
      });
      expect(result).toBe("第 15");
    });

    it("parses an ordinal date", () => {
      const result = parse("7日", "do", new Date(1986, 3 /* Apr */, 4), {
        locale: zhTW,
      });
      expect(result).toEqual(new Date(1986, 3 /* Apr */, 7));
    });
  });

  describe("quarter", () => {
    it("formats an abbreviated and a wide quarter", () => {
      const date = new Date(2014, 3 /* Apr */, 7);
      expect(format(date, "QQQ", { locale: zhTW })).toBe("第二刻");
      expect(format(date, "QQQQ", { locale: zhTW })).toBe("第二刻鐘");
    });

    it("parses an ordinal quarter", () => {
      const result = parse("第 3", "Qo", new Date(1986, 3 /* Apr */, 4), {
        locale: zhTW,
      });
      expect(result).toEqual(new Date(1986, 6 /* Jul */, 1));
    });

    it("parses an abbreviated quarter", () => {
      const result = parse("第三刻", "QQQ", new Date(1986, 3 /* Apr */, 4), {
        locale: zhTW,
      });
      expect(result).toEqual(new Date(1986, 6 /* Jul */, 1));
    });
  });
});
