import { vi } from "vitest";
import { tpyAddWeeks } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ addWeeks: tpyAddWeeks }));

await import("./test.ts");
