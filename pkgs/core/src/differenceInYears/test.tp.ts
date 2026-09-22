import { vi } from "vitest";
import { tpyDifferenceInYears } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  differenceInYears: tpyDifferenceInYears,
}));

await import("./test.ts");
