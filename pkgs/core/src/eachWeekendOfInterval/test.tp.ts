import { vi } from "vitest";
import { tpyEachWeekendOfInterval } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  eachWeekendOfInterval: tpyEachWeekendOfInterval,
}));

await import("./test.ts");
