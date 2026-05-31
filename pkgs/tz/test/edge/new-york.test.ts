import { describe, expect, it } from "vitest";
import { TZDate } from "../../src/index.ts";

describe("New York DST", () => {
  it("constructs the date before DST starts", () => {
    const date = new TZDate(2023, 2, 12, 1, 0, 0, 0, "America/New_York");

    expect(date.toString()).toBe(
      "Sun Mar 12 2023 01:00:00 GMT-0500 (Eastern Standard Time)",
    );
  });

  it("constructs the DST gap date", () => {
    const date = new TZDate(2023, 2, 12, 2, 0, 0, 0, "America/New_York");

    expect(date.toString()).toBe(
      "Sun Mar 12 2023 03:00:00 GMT-0400 (Eastern Daylight Time)",
    );
  });

  it("constructs the date after DST starts", () => {
    const date = new TZDate(2023, 2, 12, 3, 0, 0, 0, "America/New_York");

    expect(date.toString()).toBe(
      "Sun Mar 12 2023 03:00:00 GMT-0400 (Eastern Daylight Time)",
    );
  });

  it("syncs internal wall-clock time when setters land on the DST gap", () => {
    const date = new TZDate(0, "America/New_York");
    date.setFullYear(2023, 2, 12);
    date.setHours(2, 0, 0, 0);

    expect(date.toString()).toBe(
      "Sun Mar 12 2023 03:00:00 GMT-0400 (Eastern Daylight Time)",
    );
  });
});
