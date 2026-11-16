import { vi } from "vitest";
import { tpyDifferenceInQuarters } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInQuarters: tpyDifferenceInQuarters,
}));

await import("./test.ts");
