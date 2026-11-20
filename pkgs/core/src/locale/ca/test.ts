import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { ca } from "./index.ts";

describe("ca locale", () => {
  const options = { locale: ca };
  const referenceDate = new Date(2024, 0, 3);

  it.each(["EEEE", "iiii", "eeee", "cccc"])(
    "parses the full name for Saturday with %s",
    (token) => {
      const saturday = new Date(2024, 0, 6);
      const formatted = format(saturday, token, options);
      expect(formatted).toBe("dissabte");
      expect(parse(formatted, token, referenceDate, options)).toEqual(saturday);
    },
  );

  it.each(["EEE", "EEEEE", "EEEEEE", "iiiiii", "eeeeee", "cccccc"])(
    "round-trips each weekday abbreviation with %s",
    (token) => {
      for (let day = 1; day <= 7; day++) {
        const date = new Date(2024, 0, day);
        const formatted = format(date, token, options);
        expect(parse(formatted, token, referenceDate, options)).toEqual(date);
      }
    },
  );
});
