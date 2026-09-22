import { vi } from "vitest";
import { tpyEndOfSecond } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ endOfSecond: tpyEndOfSecond }));

await import("./test.ts");
