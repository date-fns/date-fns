import { vi } from "vitest";
import { tpyDifferenceInMilliseconds } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInMilliseconds: tpyDifferenceInMilliseconds,
}));

await import("./test.ts");
