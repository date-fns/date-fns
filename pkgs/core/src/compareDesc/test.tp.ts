import { vi } from "vitest";
import { tpyCompareDesc } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ compareDesc: tpyCompareDesc }));

await import("./test.ts");
