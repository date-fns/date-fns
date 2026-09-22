import { vi } from "vitest";
import { tpyEndOfToday } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ endOfToday: tpyEndOfToday }));

await import("./test.ts");
