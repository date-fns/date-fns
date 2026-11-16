import { vi } from "vitest";
import { tpyEachQuarterOfInterval } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  eachQuarterOfInterval: tpyEachQuarterOfInterval,
}));

await import("./test.ts");
