import { vi } from "vitest";
import { tpyStartOfWeek } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ startOfWeek: tpyStartOfWeek }));

await import("./test.ts");
