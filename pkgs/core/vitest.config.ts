import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "main",

          dir: "src", // Limit glob scope
          include: ["**/test.ts"],

          // Speed up tests
          isolate: false,
          pool: "threads",
          sequence: { concurrent: true },

          browser: {
            // Enable it via --browser
            // enabled: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
        },
      },
      {
        test: {
          name: "temporarily",

          dir: "src", // Limit glob scope
          include: ["**/test.tp.ts"],

          // Speed up tests
          isolate: false,
          pool: "threads",
          sequence: { concurrent: true },

          browser: {
            // Enable it via --browser
            // enabled: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],

    experimental: {
      fsModuleCache: true,
    },
  },
});
