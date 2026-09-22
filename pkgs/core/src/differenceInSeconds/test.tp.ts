import { vi } from "vitest";
import { tpyDifferenceInSeconds } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInSeconds: tpyDifferenceInSeconds,
}));

await import("./test.ts");
