import { describe, expect, it } from "vitest";
import { utc } from "./index.ts";

describe("utc", () => {
  const dateStr = "2020-01-01T08:00:00.000+08:00";

  it("creates an UTCDate", () => {
    expect(utc(dateStr).toISOString()).toBe("2020-01-01T00:00:00.000Z");
    expect(utc(+new Date(dateStr)).toISOString()).toBe(
      "2020-01-01T00:00:00.000Z",
    );
    expect(utc(new Date(dateStr)).toISOString()).toBe(
      "2020-01-01T00:00:00.000Z",
    );
  });
});
