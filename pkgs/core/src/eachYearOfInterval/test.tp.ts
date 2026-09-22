import { vi } from "vitest";
import { tpyEachYearOfInterval } from "./index.tp.ts";

vi.mock(import("./index.ts"), () => ({
  eachYearOfInterval: tpyEachYearOfInterval,
}));

await import("./test.ts");
