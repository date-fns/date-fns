import { vi } from "vitest";
import { tpyEndOfMonth } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ endOfMonth: tpyEndOfMonth }));

await import("./test.ts");
