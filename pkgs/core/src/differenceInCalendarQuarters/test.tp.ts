import { vi } from "vitest";
import { tpyDifferenceInCalendarQuarters } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInCalendarQuarters: tpyDifferenceInCalendarQuarters,
}));

await import("./test.ts");
