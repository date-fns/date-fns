import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { vi } from "./index.ts";

describe("vi wide month parsing", () => {
  it.each([
    ["Tháng Mười", 9],
    ["Tháng Mười Một", 10],
    ["Tháng Mười Hai", 11],
    ["tháng mườimột", 10],
    ["tháng mườihai", 11],
  ] as const)("matches the complete month %s", (text, value) => {
    expect(vi.match.month(`${text}!`, { width: "wide" })).toEqual({
      value,
      rest: "!",
    });
  });

  it.each(["d MMMM yyyy", "d LLLL yyyy"])(
    "round-trips all months with %s",
    (pattern) => {
      for (let month = 0; month < 12; month++) {
        const date = new Date(2026, month, 15);
        expect(
          parse(
            format(date, pattern, { locale: vi }),
            pattern,
            new Date(2026, 0, 1),
            { locale: vi },
          ),
        ).toEqual(date);
      }
    },
  );
});
