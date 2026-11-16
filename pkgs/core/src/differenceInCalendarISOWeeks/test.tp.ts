import { vi } from "vitest";
import { tpyDifferenceInCalendarISOWeeks } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInCalendarISOWeeks: tpyDifferenceInCalendarISOWeeks,
}));

await import("./test.ts");
