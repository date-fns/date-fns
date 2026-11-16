import { vi } from "vitest";
import { tpyAddDays } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ addDays: tpyAddDays }));

await import("./test.ts");
