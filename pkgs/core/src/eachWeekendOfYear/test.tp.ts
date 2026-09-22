import { vi } from "vitest";
import { tpyEachWeekendOfYear } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  eachWeekendOfYear: tpyEachWeekendOfYear,
}));

await import("./test.ts");
