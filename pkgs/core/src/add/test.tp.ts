import { vi } from "vitest";
import { tpyAdd } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ add: tpyAdd }));

await import("./test.ts");
