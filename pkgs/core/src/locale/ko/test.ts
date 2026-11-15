import { describe, expect, it } from "vitest";
import { format } from "../../format/index.ts";
import { ko } from "./index.ts";

describe("ko locale", () => {
  describe("long and full time formats", () => {
    // 오전/오후 goes with the 12-hour clock: "오후 2:07:09", not "오후 14:07:09"

    it("pairs the day period with a 12-hour hour in the afternoon", () => {
      const date = new Date(2026, 10 /* Nov */, 15, 14, 7, 9);
      expect(format(date, "ppp", { locale: ko })).toMatch(/^오후 2:07:09 /);
      expect(format(date, "pppp", { locale: ko })).toMatch(
        /^오후 2시 07분 09초 /,
      );
    });

    it("writes midnight and noon as 12", () => {
      const midnight = new Date(2026, 10 /* Nov */, 15, 0, 7, 9);
      const noon = new Date(2026, 10 /* Nov */, 15, 12, 7, 9);
      expect(format(midnight, "ppp", { locale: ko })).toMatch(
        /^오전 12:07:09 /,
      );
      expect(format(noon, "ppp", { locale: ko })).toMatch(/^오후 12:07:09 /);
    });

    it("keeps the 24-hour clock where there is no day period", () => {
      const date = new Date(2026, 10 /* Nov */, 15, 14, 7, 9);
      expect(format(date, "p", { locale: ko })).toBe("14:07");
      expect(format(date, "pp", { locale: ko })).toBe("14:07:09");
    });
  });
});
