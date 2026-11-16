import { vi } from "vitest";
import { tpyDifferenceInCalendarDays } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInCalendarDays: tpyDifferenceInCalendarDays,
}));

await import("./test.ts");
