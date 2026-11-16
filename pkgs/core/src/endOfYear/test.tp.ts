import { vi } from "vitest";
import { tpyEndOfYear } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ endOfYear: tpyEndOfYear }));

await import("./test.ts");
