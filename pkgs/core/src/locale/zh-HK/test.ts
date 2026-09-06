import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { zhHK } from "./index.ts";

describe("zh-HK locale", () => {
  it.each(["G", "GG", "GGG", "GGGG", "GGGGG"])(
    "round-trips both eras with %s",
    (token) => {
      for (const year of [-2025, 0, 1, 2026]) {
        const date = new Date(2000, 0, 1);
        date.setFullYear(year);
        const pattern = `${token} y`;
        const text = format(date, pattern, { locale: zhHK });

        expect(
          parse(text, pattern, new Date(2000, 0, 1), { locale: zhHK }),
        ).toEqual(date);
      }
    },
  );

  it("distinguishes the full BCE era from the CE prefix", () => {
    expect(zhHK.match.era("公元前 2026", { width: "wide" })).toEqual({
      value: 0,
      rest: " 2026",
    });
    expect(zhHK.match.era("公元 2026", { width: "wide" })).toEqual({
      value: 1,
      rest: " 2026",
    });
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
