import { vi } from "vitest";
import { tpyDifferenceInHours } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInHours: tpyDifferenceInHours,
}));

await import("./test.ts");
