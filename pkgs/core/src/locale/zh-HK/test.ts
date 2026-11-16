import { describe, expect, it } from "vitest";
import { parse } from "../../parse/index.ts";
import { zhHK } from "./index.ts";

describe("zh-HK locale", () => {
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
