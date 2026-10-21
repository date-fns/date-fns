import { fileURLToPath } from "node:url";

export default [false, true].map((lazyBarrel) => ({
  input: fileURLToPath(new URL("./example.js", import.meta.url)),
  platform: "node",
  // Preserve the explicit re-export syntax introduced by f9bd51d51.
  resolve: {
    alias: {
      "date-fns$": fileURLToPath(
        new URL("../../src/index.ts", import.meta.url),
      ),
      "date-fns/locale$": fileURLToPath(
        new URL("../../src/locale/index.ts", import.meta.url),
      ),
    },
  },
  experimental: { lazyBarrel },
  output: {
    file: fileURLToPath(
      new URL(
        `./dist/${lazyBarrel ? "enabled" : "disabled"}.js`,
        import.meta.url,
      ),
    ),
    format: "esm",
    minify: false,
  },
}));
