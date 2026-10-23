import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { mk } from "./index.ts";

describe("mk locale", () => {
  it.each(["MMM", "MMMM", "LLL", "LLLL"])(
    "round-trips every month with %s",
    (token) => {
      for (let month = 0; month < 12; month++) {
        const text = format(new Date(2024, month, 15), token, { locale: mk });
        expect(
          parse(text, token, new Date(2024, 0, 1), { locale: mk }),
        ).toEqual(new Date(2024, month, 1));
      }
    },
  );

  it.each(["MMM", "LLL"])(
    "consumes the full September abbreviation with %s",
    (token) => {
      expect(
        parse("15 СЕПТ 2024", `d ${token} yyyy`, new Date(2000, 0, 1), {
          locale: mk,
        }),
      ).toEqual(new Date(2024, 8, 15));
    },
  );

  it.each(["MMM", "LLL"])(
    "still accepts the shorter September abbreviation with %s",
    (token) => {
      expect(
        parse("15 сеп 2024", `d ${token} yyyy`, new Date(2000, 0, 1), {
          locale: mk,
        }),
      ).toEqual(new Date(2024, 8, 15));
    },
  );
});
