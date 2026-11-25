import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { hu } from "./index.ts";

describe.each(["MMMMM", "LLLLL"])(
  "Hungarian narrow months with %s",
  (token) => {
    it.each([3 /* Apr */, 7 /* Aug */, 8 /* Sep */])(
      "round-trips month index %i",
      (month) => {
        const date = new Date(2024, month, 1);
        const referenceDate = new Date(2024, 0, 1);
        const name = format(date, token, { locale: hu });
        expect(parse(name, token, referenceDate, { locale: hu })).toEqual(date);
      },
    );
  },
);
