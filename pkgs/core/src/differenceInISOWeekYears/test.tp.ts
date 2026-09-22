import { vi } from "vitest";
import { tpyDifferenceInISOWeekYears } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInISOWeekYears: tpyDifferenceInISOWeekYears,
}));

await import("./test.ts");
