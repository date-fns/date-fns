import { describe, expect, it } from "vitest";
import { Date } from "./index.ts";

describe("Date", () => {
  it("creates a date using day, month, year order", () => {
    const date = new Date(24, 12, 2025);

    expect(date.getFullYear()).toBe(2025);
    expect(date.getMonth()).toBe(11);
    expect(date.getDate()).toBe(24);
  });

  it("supports optional time arguments", () => {
    const date = new Date(24, 12, 2025, 13, 14, 15, 16);

    expect(date.getHours()).toBe(13);
    expect(date.getMinutes()).toBe(14);
    expect(date.getSeconds()).toBe(15);
    expect(date.getMilliseconds()).toBe(16);
  });

  it("creates the current date with no arguments", () => {
    const before = globalThis.Date.now();
    const date = new Date();
    const after = globalThis.Date.now();

    expect(date.getTime()).toBeGreaterThanOrEqual(before);
    expect(date.getTime()).toBeLessThanOrEqual(after);
  });

  it("supports a date string", () => {
    const date = new Date("2025-12-24T12:00:00");

    expect(date.getFullYear()).toBe(2025);
    expect(date.getMonth()).toBe(11);
    expect(date.getDate()).toBe(24);
  });

  it("supports a timestamp", () => {
    const date = new Date(0);

    expect(date.getTime()).toBe(0);
  });

  it("supports a native Date instance", () => {
    const nativeDate = new globalThis.Date("2025-12-24T12:00:00Z");
    const date = new Date(nativeDate);

    expect(date.getTime()).toBe(nativeDate.getTime());
  });

  it("is an instance of the native Date", () => {
    const date = new Date(24, 12, 2025);

    expect(date).toBeInstanceOf(globalThis.Date);
  });
});