import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts"],
    isolate: false,
    browser: {
      name: "chromium",
      provider: "playwright",
      headless: true,
    },
  },
});
