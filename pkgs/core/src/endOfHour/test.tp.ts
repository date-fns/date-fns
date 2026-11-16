import { vi } from "vitest";
import { tpyEndOfHour } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ endOfHour: tpyEndOfHour }));

await import("./test.ts");
