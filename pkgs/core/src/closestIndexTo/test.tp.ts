import { vi } from "vitest";
import { tpyClosestIndexTo } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ closestIndexTo: tpyClosestIndexTo }));

await import("./test.ts");
