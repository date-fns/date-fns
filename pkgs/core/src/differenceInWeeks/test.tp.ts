import { vi } from "vitest";
import { tpyDifferenceInWeeks } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInWeeks: tpyDifferenceInWeeks,
}));

await import("./test.ts");
