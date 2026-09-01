import { vi } from "vitest";
import { tpyAddYears } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ addYears: tpyAddYears }));

await import("./test.ts");
