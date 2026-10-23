import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "core",

    projects: [
      {
        test: {
          name: "main",

          include: ["src/**/test.ts"],
          includeSource: [
            // Currently unused, uncomment to enable in-source tests:
            // "src/**/*.ts",
            "scripts/**/*.ts",
          ],

          // Speed up tests
          isolate: false,
          pool: "forks",
          sequence: { concurrent: true },
        },
      },

      {
        test: {
          name: "browser",

          include: ["src/**/test.ts"],

          // Speed up tests
          isolate: false,

          browser: {
            enabled: true,
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
