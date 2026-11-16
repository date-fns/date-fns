import { vi } from "vitest";
import { tpyEndOfQuarter } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ endOfQuarter: tpyEndOfQuarter }));

await import("./test.ts");
