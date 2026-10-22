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

  it("round-trips localized quarter tokens (QQQ/QQQQ)", () => {
    const date = new Date(2024, 6 /* Jul */, 1);
    const ref = new Date(2024, 0 /* Jan */, 1);

    expect(format(date, "QQQ", { locale: zhCN })).toBe("第三季");
    expect(parse("第三季", "QQQ", ref, { locale: zhCN })).toEqual(
      new Date(2024, 6 /* Jul */, 1),
    );

    expect(format(date, "QQQQ", { locale: zhCN })).toBe("第三季度");
    expect(parse("第三季度", "QQQQ", ref, { locale: zhCN })).toEqual(
      new Date(2024, 6 /* Jul */, 1),
    );
  });

  it("still parses legacy 刻 quarter forms", () => {
    const ref = new Date(2024, 0 /* Jan */, 1);

    expect(parse("第三刻", "QQQ", ref, { locale: zhCN })).toEqual(
      new Date(2024, 6 /* Jul */, 1),
    );
    expect(parse("第三刻钟", "QQQQ", ref, { locale: zhCN })).toEqual(
      new Date(2024, 6 /* Jul */, 1),
    );
  });
});
