import { describe, expect, it } from "vitest";
import { format } from "../../../../format/index.ts";
import { parse } from "../../../../parse/index.ts";
import { tr } from "../../index.ts";

describe("tr weekday parsing", () => {
  it.each(["EEE", "EEEE", "EEEEEE", "ccc", "cccc", "cccccc"])(
    "round-trips all weekdays with %s",
    (token) => {
      for (let day = 0; day < 7; day++) {
        const date = new Date(2026, 10, 1 + day);
        const text = format(date, token, { locale: tr });
        const result = parse(text, token, date, { locale: tr });
        expect(result.getDay(), text).toBe(day);
      }
    },
  );
});
