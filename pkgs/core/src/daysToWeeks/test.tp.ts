import { vi } from "vitest";
import { tpyDaysToWeeks } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ daysToWeeks: tpyDaysToWeeks }));

await import("./test.ts");
