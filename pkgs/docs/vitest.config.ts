import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/tests.ts"],
    // Speed up tests
    isolate: false,
  },
});
