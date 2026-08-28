#!/usr/bin/env node

import { readdir } from "node:fs/promises";
import { extname, join } from "node:path";
import { build, type OutputChunk } from "rolldown";
import { $ } from "zx";

const [, , srcDir = "src", outDir = "dist", format = "esm"] = process.argv;

if (format !== "esm" && format !== "cjs")
  throw new Error(`Unsupported format: ${format}`);

const entries = await listEntries(srcDir);
const extension = format === "esm" ? "js" : "cjs";

await build({
  input: entries,
  external: () => true,
  optimization: {
    inlineConst: false,
  },
  output: {
    dir: outDir,
    preserveModules: true,
    preserveModulesRoot: "src",
    entryFileNames: `[name].${extension}`,
    format,
    plugins: [rewriteImportExtensions(format)],
  },
});

await $`pnpm exec oxfmt ${outDir}`;

async function listEntries(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      if (isIgnoredPath(path)) continue;
      files.push(...(await listEntries(path)));
    } else if (entry.isFile() && isSourceEntry(path)) {
      files.push(path);
    }
  }

  return files;
}

function isSourceEntry(path: string) {
  return (
    (extname(path) === ".ts" || extname(path) === ".js") &&
    !path.endsWith(".d.ts") &&
    !isIgnoredPath(path)
  );
}

function isIgnoredPath(path: string) {
  return (
    /(^|\/)tp($|\/)/.test(path) ||
    /(^|\/)_lib\/tp($|\/)/.test(path) ||
    /(^|\/)tests($|\/)/.test(path) ||
    /(^|\/)tysts($|\/)/.test(path) ||
    /(^|\/)test\.tp\.ts$/.test(path) ||
    /(^|\/)test\.ts$/.test(path) ||
    /(^|\/)tests\.ts$/.test(path) ||
    /(^|\/)tysts\.ts$/.test(path) ||
    /(^|\/)index\.tp\.ts$/.test(path)
  );
}

function rewriteImportExtensions(format: "esm" | "cjs") {
  const ext = format === "esm" ? ".js" : ".cjs";
  return {
    name: "rewrite-import-extensions",
    renderChunk(code: string, chunk: OutputChunk) {
      const nextCode = code.replace(
        /(from\s*["']|import\(\s*["']|require\(\s*["'])(\.{1,2}\/[^"']+?)(\.[jt]s)(["'])/g,
        (_match, prefix, path, _ext, suffix) =>
          `${prefix}${path}${ext}${suffix}`,
      );

      return nextCode === code
        ? null
        : { code: nextCode, map: chunk.map ?? null };
    },
  };
}
