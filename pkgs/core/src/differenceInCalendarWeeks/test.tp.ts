import { vi } from "vitest";
import { tpyDifferenceInCalendarWeeks } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInCalendarWeeks: tpyDifferenceInCalendarWeeks,
}));

await import("./test.ts");
