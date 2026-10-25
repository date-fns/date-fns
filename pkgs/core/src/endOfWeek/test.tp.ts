import { vi } from "vitest";
import { tpyEndOfWeek } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ endOfWeek: tpyEndOfWeek }));

await import("./test.ts");
