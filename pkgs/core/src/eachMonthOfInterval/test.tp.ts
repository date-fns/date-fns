import { vi } from "vitest";
import { tpyEachMonthOfInterval } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  eachMonthOfInterval: tpyEachMonthOfInterval,
}));

await import("./test.ts");
