import { vi } from "vitest";
import { tpyClosestTo } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ closestTo: tpyClosestTo }));

await import("./test.ts");
