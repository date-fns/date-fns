import { expect, it, vi } from "vitest";
import { tpySetDate } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ setDate: tpySetDate }));

await import("./test.ts");
