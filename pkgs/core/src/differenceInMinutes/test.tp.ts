import { vi } from "vitest";
import { tpyDifferenceInMinutes } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInMinutes: tpyDifferenceInMinutes,
}));

await import("./test.ts");
