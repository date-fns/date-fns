import { describe, expect, it } from "vitest";
import { TZDate } from "../../src/index.ts";

describe("Casey DST", () => {
  it("does not shift target midnight by a system time zone DST gap", () => {
    const date = new TZDate(2020, 2, 8, 1, "America/New_York");
    date.setHours(date.getHours() + 1);

    expect(date.toString()).toBe(
      "Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)",
    );
  });
});
