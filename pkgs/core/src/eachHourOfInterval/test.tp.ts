import { vi } from "vitest";
import { tpyEachHourOfInterval } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  eachHourOfInterval: tpyEachHourOfInterval,
}));

await import("./test.ts");
