import { fileURLToPath } from "node:url";

export default [false, true].map((lazyBarrel) => ({
  name: lazyBarrel ? "enabled" : "disabled",
  context: import.meta.dirname,
  entry: "./example.js",
  mode: "production",
  target: "node",
  cache: false,
  devtool: false,
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
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "builtin:swc-loader",
          options: { jsc: { parser: { syntax: "typescript" } } },
        },
      },
    ],
  },
  experiments: { lazyBarrel },
  optimization: { minimize: false },
  output: {
    path: fileURLToPath(new URL("./dist", import.meta.url)),
    filename: `${lazyBarrel ? "enabled" : "disabled"}.cjs`,
  },
}));
