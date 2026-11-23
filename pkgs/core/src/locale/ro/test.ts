import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { ro } from "./index.ts";

describe("ro locale", () => {
  describe.each(["EEE", "EEEE", "EEEEEE", "ccc", "cccc", "cccccc"])(
    "%s weekdays",
    (token) => {
      it.each([0, 1, 2, 3, 4, 5, 6])("round-trips weekday %i", (day) => {
        const date = new Date(2024, 0, 7 + day);
        const formatted = format(date, token, { locale: ro });
        expect(parse(formatted, token, date, { locale: ro })).toEqual(date);
      });
    },
  );

  it.each([
    ["d", "short", 0],
    ["l", "short", 1],
    ["j", "short", 4],
    ["v", "short", 5],
    ["s", "short", 6],
    ["jo", "abbreviated", 4],
    ["vi", "abbreviated", 5],
    ["sâ", "abbreviated", 6],
    ["duminica", "wide", 0],
    ["marţi", "wide", 2],
  ] as const)("keeps accepting %s", (text, width, value) => {
    expect(ro.match.day(`${text} rest`, { width })).toEqual({
      value,
      rest: " rest",
    });
  });
});
