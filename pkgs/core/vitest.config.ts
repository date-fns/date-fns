import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "core",
    projects: [
      {
        test: {
          name: "main",

          dir: "src", // Limit glob scope
          include: ["**/test.ts"],

          // Speed up tests
          isolate: false,
          pool: "forks",
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
          pool: "forks",
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

    fsModuleCache: true,
  },
});
