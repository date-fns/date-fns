import { describe, expect, it } from "vitest";
import { formatDistanceStrict } from "../../formatDistanceStrict/index.ts";
import { formatDuration } from "../../formatDuration/index.ts";
import { lt } from "./index.ts";

describe("lt locale", () => {
  it.each([
    [2, "sekundės", "sekundžių", "sekundes"],
    [11, "sekundžių", "sekundžių", "sekundžių"],
    [19, "sekundžių", "sekundžių", "sekundžių"],
    [21, "sekundė", "sekundės", "sekundę"],
    [22, "sekundės", "sekundžių", "sekundes"],
    [111, "sekundžių", "sekundžių", "sekundžių"],
    [121, "sekundė", "sekundės", "sekundę"],
  ] as const)("inflects %i seconds", (seconds, standalone, future, past) => {
    expect(formatDuration({ seconds }, { locale: lt })).toBe(
      `${seconds} ${standalone}`,
    );
    const options = { locale: lt, unit: "second", addSuffix: true } as const;
    expect(formatDistanceStrict(seconds * 1000, 0, options)).toBe(
      `po ${seconds} ${future}`,
    );
    expect(formatDistanceStrict(0, seconds * 1000, options)).toBe(
      `prieš ${seconds} ${past}`,
    );
  });
});
