import { describe, expect, it } from "vitest";
import { parse } from "../../parse/index.ts";
import { ms } from "./index.ts";

describe("ms locale", () => {
  it.each(["p.m.", "p. m.", "PM"])("parses 3 %s as 15:00", (dayPeriod) => {
    const date = new Date(2024, 0, 1);
    const result = parse(`3 ${dayPeriod}`, "h aaaa", date, { locale: ms });
    expect(result).toEqual(new Date(2024, 0, 1, 15));
  });
});
