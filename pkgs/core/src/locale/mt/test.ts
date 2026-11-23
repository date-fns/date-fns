import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { mt } from "./index.ts";

describe("mt locale", () => {
  describe.each(["EEE", "EEEE", "ccc", "cccc"])("%s weekdays", (token) => {
    it.each([0, 1, 2, 3, 4, 5, 6])("round-trips weekday %i", (day) => {
      const date = new Date(2024, 0, 7 + day);
      const formatted = format(date, token, { locale: mt });

      expect(parse(formatted, token, date, { locale: mt })).toEqual(date);
    });
  });
});
