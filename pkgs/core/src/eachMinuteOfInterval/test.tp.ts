import { vi } from "vitest";
import { tpyEachMinuteOfInterval } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  eachMinuteOfInterval: tpyEachMinuteOfInterval,
}));

await import("./test.ts");
