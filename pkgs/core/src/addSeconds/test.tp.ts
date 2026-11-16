import { vi } from "vitest";
import { tpyAddSeconds } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ addSeconds: tpyAddSeconds }));

await import("./test.ts");
