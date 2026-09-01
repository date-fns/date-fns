import { vi } from "vitest";
import { tpyCompareAsc } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ compareAsc: tpyCompareAsc }));

await import("./test.ts");
