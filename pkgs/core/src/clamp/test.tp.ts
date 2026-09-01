import { vi } from "vitest";
import { tpyClamp } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ clamp: tpyClamp }));

await import("./test.ts");
