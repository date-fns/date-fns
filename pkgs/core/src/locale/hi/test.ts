import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { hi } from "./index.ts";

describe("hi locale quarter parsing", () => {
  const referenceDate = new Date(2024, 0, 1);
  const quarters = [1, 2, 3, 4] as const;

  for (const token of ["QQQ", "QQQQ", "qqq", "qqqq"]) {
    it.each(quarters)(`round-trips quarter %s with ${token}`, (quarter) => {
      const date = new Date(2024, (quarter - 1) * 3, 1);
      const text = format(date, token, { locale: hi });

      expect(parse(text, token, referenceDate, { locale: hi })).toEqual(date);
    });
  }

  it.each(quarters)(
    "matches wide quarter %s without consuming following text",
    (quarter) => {
      const text = hi.localize.quarter(quarter, { width: "wide" });

      expect(hi.match.quarter(`${text} remaining`, { width: "wide" })).toEqual({
        value: quarter,
        rest: " remaining",
      });
    },
  );

  it.each(quarters)("continues matching numeric wide quarter %s", (quarter) => {
    expect(hi.match.quarter(`${quarter} तिमाही`, { width: "wide" })).toEqual({
      value: quarter,
      rest: "",
    });
  });

  it.each(quarters)("continues matching narrow quarter %s", (quarter) => {
    expect(hi.match.quarter(String(quarter), { width: "narrow" })).toEqual({
      value: quarter,
      rest: "",
    });
  });

  it("rejects unknown quarter names", () => {
    expect(hi.match.quarter("पांचवीं तिमाही", { width: "wide" })).toBeNull();
  });
});
