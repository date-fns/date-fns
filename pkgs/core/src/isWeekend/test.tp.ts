import { vi } from "vitest";
import { tpyIsWeekend } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ isWeekend: tpyIsWeekend }));

await import("./test.ts");
