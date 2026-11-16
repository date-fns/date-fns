import { vi } from "vitest";
import { tpyDifferenceInCalendarYears } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInCalendarYears: tpyDifferenceInCalendarYears,
}));

await import("./test.ts");
