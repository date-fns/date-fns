import { vi } from "vitest";
import { tpyEndOfMinute } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ endOfMinute: tpyEndOfMinute }));

await import("./test.ts");
