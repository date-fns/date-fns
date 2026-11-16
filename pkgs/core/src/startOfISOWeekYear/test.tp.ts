import { vi } from "vitest";
import { tpyStartOfISOWeekYear } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  startOfISOWeekYear: tpyStartOfISOWeekYear,
}));

await import("./test.ts");
