import { vi } from "vitest";
import { tpyEachWeekOfInterval } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  eachWeekOfInterval: tpyEachWeekOfInterval,
}));

await import("./test.ts");
