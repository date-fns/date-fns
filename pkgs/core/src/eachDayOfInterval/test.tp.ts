import { vi } from "vitest";
import { tpyEachDayOfInterval } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  eachDayOfInterval: tpyEachDayOfInterval,
}));

await import("./test.ts");
