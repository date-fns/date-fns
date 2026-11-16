import { vi } from "vitest";
import { tpyDifferenceInBusinessDays } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInBusinessDays: tpyDifferenceInBusinessDays,
}));

await import("./test.ts");
