import { vi } from "vitest";
import { tpyEndOfDecade } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ endOfDecade: tpyEndOfDecade }));

await import("./test.ts");
