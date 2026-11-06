import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { fy } from "./index.ts";
import type { Day } from "../../types.ts";

describe("fy weekday parsing", () => {
  it.each(["short", "abbreviated", "wide"] as const)(
    "matches every localized %s weekday without consuming trailing text",
    (width) => {
      for (let day = 0; day < 7; day++) {
        const label = fy.localize.day(day as Day, { width });
        expect(fy.match.day(`${label}!`, { width })).toEqual({
          value: day,
          rest: "!",
        });
      }
    },
  );

  it.each(["EEE", "EEEE", "EEEEEE", "ccc", "cccc", "cccccc"])(
    "round-trips Saturday and Sunday with %s",
    (token) => {
      for (const day of [6, 7]) {
        const date = new Date(2026, 5, day);
        const text = format(date, token, { locale: fy });
        expect(parse(text, token, date, { locale: fy })).toEqual(date);
      }
    },
  );
});
