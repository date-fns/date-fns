import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { zhCN } from "./index.ts";

describe("zh-CN locale", () => {
  it.each(["B", "BBBB", "BBBBB"])(
    "parses the morning and night labels formatted by %s",
    (token) => {
      const reference = new Date(2025, 0, 15);
      const pattern = token + " h:mm";
      for (const hour of [2, 9]) {
        const date = new Date(2025, 0, 15, hour, 30);
        const text = format(date, pattern, { locale: zhCN });
        expect(parse(text, pattern, reference, { locale: zhCN })).toEqual(date);
      }
    },
  );

  it("recognizes the narrow morning label as morning", () => {
    expect(zhCN.match.dayPeriod("早")).toEqual({ value: "morning", rest: "" });
  });

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
});
