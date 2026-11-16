import { vi } from "vitest";
import { tpyEachWeekendOfMonth } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  eachWeekendOfMonth: tpyEachWeekendOfMonth,
}));

await import("./test.ts");
