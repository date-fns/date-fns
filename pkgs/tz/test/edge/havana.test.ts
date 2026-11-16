import { describe, expect, it } from "vitest";
import { TZDate } from "../../src/index.ts";

describe("Havana DST", () => {
  it("does not shift a valid target time by a system time zone DST gap", () => {
    const date = new TZDate(2023, 2, 12, 1, 0, 0, 0, "America/New_York");

    expect(date.toString()).toBe(
      "Sun Mar 12 2023 01:00:00 GMT-0500 (Eastern Standard Time)",
    );
  });
});
