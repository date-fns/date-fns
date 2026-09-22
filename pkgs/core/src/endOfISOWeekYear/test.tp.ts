import { vi } from "vitest";
import { tpyEndOfISOWeekYear } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  endOfISOWeekYear: tpyEndOfISOWeekYear,
}));

await import("./test.ts");
