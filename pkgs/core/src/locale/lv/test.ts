import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { lv } from "./index.ts";

describe("lv locale", () => {
  it.each(["d MMM yyyy", "d LLL yyyy"])(
    "round-trips a March date with %s",
    (pattern) => {
      const date = new Date(2024, 2 /* Mar */, 15);
      const text = format(date, pattern, { locale: lv });
      const result = parse(text, pattern, new Date(2000, 0, 1), { locale: lv });
      expect(result).toEqual(date);
    },
  );
});
