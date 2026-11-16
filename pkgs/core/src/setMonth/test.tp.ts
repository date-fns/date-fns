import { vi } from "vitest";
import { tpySetMonth } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ setMonth: tpySetMonth }));

await import("./test.ts");
