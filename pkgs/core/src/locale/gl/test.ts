import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { gl } from "./index.ts";

describe("gl locale", () => {
  describe.each(["EEEE", "cccc"])("%s weekdays", (token) => {
    it.each([0, 1, 2, 3, 4, 5, 6])("round-trips weekday %i", (day) => {
      const date = new Date(2024, 0, 7 + day);
      const formatted = format(date, token, { locale: gl });
      expect(parse(formatted, token, date, { locale: gl })).toEqual(date);
    });
  });

  it.each(["mércores", "mercores", "MÉRCORES"])(
    "consumes the complete weekday %s",
    (text) => {
      expect(gl.match.day(`${text} rest`, { width: "wide" })).toEqual({
        value: 3,
        rest: " rest",
      });
    },
  );

  it("rejects an unknown weekday", () => {
    expect(gl.match.day("unknown", { width: "wide" })).toBeNull();
  });
});
