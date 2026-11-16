import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/tests.ts", "test/**/*.test.ts"],

    // Speed up tests
    isolate: false,
    pool: "threads",
    sequence: { concurrent: true },
  },
});
