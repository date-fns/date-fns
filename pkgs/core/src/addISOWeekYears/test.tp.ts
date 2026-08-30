import { vi } from "vitest";
import { tpyAddISOWeekYears } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  addISOWeekYears: tpyAddISOWeekYears,
}));

await import("./test.ts");
