import { vi } from "vitest";
import { tpyEndOfISOWeek } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ endOfISOWeek: tpyEndOfISOWeek }));

await import("./test.ts");
