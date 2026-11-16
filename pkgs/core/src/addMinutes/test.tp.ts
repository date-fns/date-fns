import { vi } from "vitest";
import { tpyAddMinutes } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ addMinutes: tpyAddMinutes }));

await import("./test.ts");
