import { vi } from "vitest";
import { tpyAddBusinessDays } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ addBusinessDays: tpyAddBusinessDays }));

await import("./test.ts");
