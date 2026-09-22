import { vi } from "vitest";
import { tpyDifferenceInMonths } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInMonths: tpyDifferenceInMonths,
}));

await import("./test.ts");
