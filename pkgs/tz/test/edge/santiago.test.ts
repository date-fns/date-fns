import { describe, expect, it } from "vitest";
import { TZDate } from "../../src/index.ts";

describe("Santiago DST", () => {
  it("does not shift target midnight by a system time zone DST gap", () => {
    const date = new TZDate(2024, 8, 8, 0, 0, 0, 0, "Asia/Singapore");

    expect(date.toString()).toBe(
      "Sun Sep 08 2024 00:00:00 GMT+0800 (Singapore Standard Time)",
    );
  });
});
