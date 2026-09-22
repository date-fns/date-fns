import { vi } from "vitest";
import { tpyDifferenceInDays } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInDays: tpyDifferenceInDays,
}));

await import("./test.ts");
