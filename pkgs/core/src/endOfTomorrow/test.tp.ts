import { vi } from "vitest";
import { tpyEndOfTomorrow } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({ endOfTomorrow: tpyEndOfTomorrow }));

await import("./test.ts");
