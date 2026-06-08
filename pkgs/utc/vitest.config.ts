import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/tests.ts"],

    // Speed up tests
    isolate: true,
    pool: "threads",
    sequence: { concurrent: true },
  },
});
