import { vi } from "vitest";
import { tpyAreIntervalsOverlapping } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  areIntervalsOverlapping: tpyAreIntervalsOverlapping,
}));

await import("./test.ts");
