import { describe, it, expect } from "vitest";
import { format } from "../../format/index.ts";
import { formatDistance } from "../../formatDistance/index.ts";
import { formatRelative } from "../../formatRelative/index.ts";
import { parse } from "../../parse/index.ts";
import { mg } from "./index.ts";

describe("mg locale", () => {
  it("formats date with long tokens", () => {
    const date = new Date(2026, 5 /* June */, 26, 12, 0, 0);
    const formatted = format(date, "PPPP", { locale: mg });
    expect(formatted).toBe("Zoma 26 Jona 2026");
  });

  it("formats distance with includeSeconds", () => {
    const d1 = new Date(2026, 0, 1);
    const d2 = new Date(2026, 0, 1, 0, 0, 30);
    expect(formatDistance(d1, d2, { locale: mg, includeSeconds: true })).toBe("antsasaky ny minitra");
  });

  it("formats relative", () => {
    const baseDate = new Date(2026, 0, 1, 12, 0);
    const yesterday = new Date(2025, 11, 31, 12, 0);
    expect(formatRelative(yesterday, baseDate, { locale: mg })).toBe("omaly tamin'ny 12:00");
  });

  it("parses formatted date", () => {
    const date = parse("Zoma 26 Jona 2026", "PPPP", new Date(2026, 0, 1), { locale: mg });
    expect(date.getFullYear()).toBe(2026);
    expect(date.getMonth()).toBe(5);
    expect(date.getDate()).toBe(26);
  });
});
