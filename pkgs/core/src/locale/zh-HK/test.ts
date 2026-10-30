import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { zhHK } from "./index.ts";

describe("zh-HK locale", () => {
  it("matches narrow morning and preserves the remaining input", () => {
    expect(zhHK.match.dayPeriod("早 rest", { width: "narrow" })).toEqual({
      value: "morning",
      rest: " rest",
    });
  });

  it.each([
    ["早上", 6],
    ["正午", 12],
    ["凌晨", 2],
    ["午夜", 0],
    ["上午", 9],
    ["下午", 15],
    ["晚上", 20],
  ])("retains the existing %s day period", (label, hour) => {
    const text = `${label} ${hour % 12 || 12}:30`;
    expect(
      parse(text, "B h:mm", new Date(2024, 0, 1), { locale: zhHK }),
    ).toEqual(new Date(2024, 0, 1, hour, 30));
  });

  it.each([
    ["B", 2, "夜晚"],
    ["BBBB", 2, "夜晚"],
    ["BBBBB", 2, "夜"],
    ["BBBBB", 15, "午"],
    ["bbbbb", 12, "晌"],
  ])("parses its formatted %s day period at hour %i", (token, hour, label) => {
    const date = new Date(2024, 3, 4, hour, 30);
    const pattern = `yyyy-MM-dd ${token} h:mm`;
    const text = format(date, pattern, { locale: zhHK });
    expect(text).toContain(` ${label} `);
    expect(
      parse(text, pattern, new Date(2024, 0, 1), { locale: zhHK }),
    ).toEqual(date);
  });

  it("parses October with localized month tokens", () => {
    expect(
      parse("2022年10月27日", "yyyy年MMMdd日", new Date(), {
        locale: zhHK,
      }),
    ).toEqual(new Date(2022, 9 /* Oct */, 27));

    expect(
      parse("2022年十月27日", "yyyy年MMMMdd日", new Date(), {
        locale: zhHK,
      }),
    ).toEqual(new Date(2022, 9 /* Oct */, 27));
  });

  it("parses November and December as distinct months", () => {
    expect(
      parse("2022年11月27日", "yyyy年MMMdd日", new Date(), {
        locale: zhHK,
      }),
    ).toEqual(new Date(2022, 10 /* Nov */, 27));

    expect(
      parse("2022年12月27日", "yyyy年MMMdd日", new Date(), {
        locale: zhHK,
      }),
    ).toEqual(new Date(2022, 11 /* Dec */, 27));
  });
});
