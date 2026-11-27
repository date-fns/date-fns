import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { parse } from "../../parse/index.ts";
import { fi } from "./index.ts";

describe("fi locale", () => {
  it("round-trips the full date with a weekday", () => {
    const date = new Date(1987, 0, 11);
    const text = format(date, "PPPP", { locale: fi });

    expect(text).toBe("sunnuntaina 11. tammikuuta 1987");
    expect(parse(text, "PPPP", new Date(2000, 0, 1), { locale: fi })).toEqual(
      date,
    );
  });
});
