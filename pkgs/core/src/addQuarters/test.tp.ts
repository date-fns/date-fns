import { vi } from "vitest";
import { tpyAddQuarters } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ addQuarters: tpyAddQuarters }));

await import("./test.ts");
