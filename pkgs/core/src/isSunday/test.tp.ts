import { vi } from "vitest";
import { tpyIsSunday } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ isSunday: tpyIsSunday }));

await import("./test.ts");
