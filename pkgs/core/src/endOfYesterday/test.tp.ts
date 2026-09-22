import { vi } from "vitest";
import { tpyEndOfYesterday } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ endOfYesterday: tpyEndOfYesterday }));

await import("./test.ts");
