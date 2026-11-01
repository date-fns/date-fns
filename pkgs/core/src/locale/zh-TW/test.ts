import { describe, expect, it } from "vitest";
import { parse } from "../../parse/index.ts";
import { startOfWeek } from "../../startOfWeek/index.ts";
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
});

describe("zh-TW locale week options", () => {
  it("weeks start on Sunday", () => {
    // 2026-10-31 is a Saturday; per CLDR week data, weeks in Taiwan start on Sunday
    const weekStart = startOfWeek(new Date(2026, 9, 31), { locale: zhTW });
    expect(weekStart.getDay()).toBe(0); // Sunday
    expect(weekStart.getDate()).toBe(25); // 2026-10-25
  });
});
