import { describe, expect, it } from "vitest";
import { tz } from "./index.ts";

describe("tz", () => {
  const dateStr = "2020-01-01T00:00:00.000Z";
  it("creates a function that converts a date to a specific time zone date", () => {
    expect(tz("Asia/Singapore")(dateStr).toISOString()).toBe(
      "2020-01-01T08:00:00.000+08:00",
    );
    expect(tz("America/New_York")(dateStr).toISOString()).toBe(
      "2019-12-31T19:00:00.000-05:00",
    );
    expect(tz("Asia/Singapore")(+new Date(dateStr)).toISOString()).toBe(
      "2020-01-01T08:00:00.000+08:00",
    );
    expect(tz("America/New_York")(+new Date(dateStr)).toISOString()).toBe(
      "2019-12-31T19:00:00.000-05:00",
    );
    expect(tz("Asia/Singapore")(new Date(dateStr)).toISOString()).toBe(
      "2020-01-01T08:00:00.000+08:00",
    );
    expect(tz("America/New_York")(new Date(dateStr)).toISOString()).toBe(
      "2019-12-31T19:00:00.000-05:00",
    );
    expect(
      tz("America/New_York")(
        new Date("1880-01-01T00:00:00.000Z"),
      ).toISOString(),
    ).toBe("1879-12-31T19:03:58.000-04:56");
  });
});
