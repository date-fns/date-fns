import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { km } from "./index.ts";

describe("km locale", () => {
  const tokens = [
    "EEEE",
    "EEE",
    "EEEEEE",
    "EEEEE",
    "cccc",
    "ccc",
    "cccccc",
    "ccccc",
    "eeee",
    "eee",
    "eeeeee",
    "eeeee",
    "iiii",
    "iii",
    "iiiiii",
    "iiiii",
  ];

  describe.each(tokens)("weekday round trips with %s", (token) => {
    it.each([0, 1, 2, 3, 4, 5, 6])("preserves weekday %i", (day) => {
      const date = new Date(2024, 0, 7 + day, 14, 30);
      const text = format(date, `${token} HH:mm`, { locale: km });
      const result = parse(text, `${token} HH:mm`, new Date(2024, 0, 7), {
        locale: km,
      });
      expect(result.getDay()).toBe(day);
      expect(result.getHours()).toBe(14);
      expect(result.getMinutes()).toBe(30);
    });
  });

  it.each(["narrow", "short", "abbreviated", "wide"] as const)(
    "consumes each complete %s weekday without consuming following text",
    (width) => {
      for (const day of [0, 1, 2, 3, 4, 5, 6] as const) {
        const text = km.localize.day(day, { width });
        expect(km.match.day(`${text} 14:30`, { width })).toEqual({
          value: day,
          rest: " 14:30",
        });
      }
    },
  );

  it.each(["narrow", "short", "abbreviated", "wide"] as const)(
    "rejects unrelated input at %s width",
    (width) => {
      expect(km.match.day("not a weekday", { width })).toBeNull();
    },
  );
});
