import { vi } from "vitest";
import { tpyEndOfDay } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ endOfDay: tpyEndOfDay }));

await import("./test.ts");
