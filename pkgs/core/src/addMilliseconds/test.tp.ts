import { vi } from "vitest";
import { tpyAddMilliseconds } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  addMilliseconds: tpyAddMilliseconds,
}));

await import("./test.ts");
