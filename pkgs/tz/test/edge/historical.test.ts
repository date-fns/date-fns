import { describe, expect, it } from "vitest";
import { TZDate } from "../../src/index.ts";

describe("historical offset seconds", () => {
  it("formats historical Singapore offsets with seconds using minute precision", () => {
    const date = new TZDate(1900, 0, 1, "Asia/Singapore");
    date.setSeconds(56);

    expect(date.toISOString()).toBe("1900-01-01T00:00:31.000+06:55");
  });

  it("does not leak system-zone offset seconds into constructors", () => {
    expect(new TZDate(1880, 0, 1, "America/New_York").toISOString()).toBe(
      "1880-01-01T00:00:00.000-04:56",
    );

    expect(new TZDate(1880, 0, 1, "Asia/Pyongyang").toISOString()).toBe(
      "1880-01-01T00:00:00.000+08:23",
    );
  });

  it("does not leak system-zone offset seconds into setters", () => {
    const date = new TZDate(1880, 0, 1, "Asia/Singapore");
    date.setSeconds(56);

    expect(date.toISOString()).toBe("1880-01-01T00:00:31.000+06:55");
  });
});
