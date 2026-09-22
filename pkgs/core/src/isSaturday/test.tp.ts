import { vi } from "vitest";
import { tpyIsSaturday } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ isSaturday: tpyIsSaturday }));

await import("./test.ts");
