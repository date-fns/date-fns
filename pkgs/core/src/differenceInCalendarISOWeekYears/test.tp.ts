import { vi } from "vitest";
import { tpyDifferenceInCalendarISOWeekYears } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInCalendarISOWeekYears: tpyDifferenceInCalendarISOWeekYears,
}));

await import("./test.ts");
