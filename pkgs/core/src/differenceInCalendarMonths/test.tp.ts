import { vi } from "vitest";
import { tpyDifferenceInCalendarMonths } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInCalendarMonths: tpyDifferenceInCalendarMonths,
}));

await import("./test.ts");
