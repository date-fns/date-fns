import { vi } from "vitest";
import { tpyStartOfQuarter } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ startOfQuarter: tpyStartOfQuarter }));

await import("./test.ts");
