import { vi } from "vitest";
import { tpyAddHours } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ addHours: tpyAddHours }));

await import("./test.ts");
