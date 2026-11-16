#!/usr/bin/env node

import { mkdir, readFile, rm, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { build } from "rolldown";
import { listLocales } from "../_lib/listLocales.ts";

const out = process.argv[2];
if (!out) throw new Error("Output path is not set");

const polyfillPath = "src/_lib/cdnPolyfill.js";

const source = await readFile(polyfillPath, "utf-8");
const minPath = join(out, "_cdn.min.js");
await build({
  input: polyfillPath,
  output: {
    file: minPath,
    format: "esm",
    minify: true,
    sourcemap: false,
  },
});
const minified = await readFile(minPath, "utf-8");
await rm(minPath);
const localeCodes = (await listLocales()).map((locale) => locale.code);

const paths = [
  "cdn.js",
  "cdn.min.js",
  "fp/cdn.js",
  "fp/cdn.min.js",
  "locale/cdn.js",
  "locale/cdn.min.js",
  ...localeCodes.flatMap((code) => [
    `locale/${code}/cdn.js`,
    `locale/${code}/cdn.min.js`,
  ]),
];

await Promise.all(
  paths.map(async (path) => {
    const filePath = join(out, path);
    await mkdir(dirname(filePath), { recursive: true });
    await writeFile(filePath, path.endsWith(".min.js") ? minified : source);
  }),
);
