import { describe, expect, it } from "vitest";
import { parse } from "../../parse/index.ts";
import { jaHira } from "./index.ts";

describe("ja-Hira locale", () => {
  it("parses narrow months 1, 10, 11 and 12", () => {
    for (const token of ["MMMMM", "LLLLL"]) {
      for (const month of [1, 10, 11, 12]) {
        expect(
          parse(String(month), token, new Date(2019, 0, 1), { locale: jaHira }),
        ).toEqual(new Date(2019, month - 1, 1));
      }
    }
  });

  it("parses a narrow month followed by more input", () => {
    expect(
      parse("1-20", "MMMMM-dd", new Date(2019, 0, 1), { locale: jaHira }),
    ).toEqual(new Date(2019, 0 /* Jan */, 20));

    expect(
      parse("12-20", "MMMMM-dd", new Date(2019, 0, 1), { locale: jaHira }),
    ).toEqual(new Date(2019, 11 /* Dec */, 20));
  });

  it("parses months 1, 10, 11 and 12 with the がつ suffix", () => {
    for (const month of [1, 10, 11, 12]) {
      expect(
        parse(`${month}がつ`, "MMM", new Date(2019, 0, 1), { locale: jaHira }),
      ).toEqual(new Date(2019, month - 1, 1));
    }
  });
});
