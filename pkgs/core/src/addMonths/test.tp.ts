import { vi } from "vitest";
import { tpyAddMonths } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ addMonths: tpyAddMonths }));

await import("./test.ts");
