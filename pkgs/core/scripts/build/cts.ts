#!/usr/bin/env node

/**
 * @file
 * The script generates .d.cts files for CommonJS imports.
 *
 * It's a part of the build process.
 */

import { readdir, readFile, writeFile } from "fs/promises";
import { join, resolve } from "path";

const outputPath = process.argv[2];
if (!outputPath) throw new Error("Output path is not set");

const root = resolve(outputPath);

createCTSFiles(resolve(root));

async function createCTSFiles(dir: string): Promise<void> {
  try {
    const files = await readdir(dir, { withFileTypes: true });

    for (const file of files) {
      const fullPath = join(dir, file.name);

      if (file.isDirectory()) {
        await createCTSFiles(fullPath);
      } else if (file.isFile() && file.name.endsWith(".d.ts")) {
        const newFilePath = fullPath.replace(/\.d\.ts$/, ".d.cts");
        const content = await readFile(fullPath, "utf-8");
        const newContent = content.replace(
          /(from\s*["']|import\(\s*["']|require\(\s*["'])(\.{1,2}\/[^"']+?)\.js(["'])/g,
          "$1$2.cjs$3",
        );
        await writeFile(newFilePath, newContent);
      }
    }
  } catch (error) {
    console.error("Error processing directory:", error);
    process.exit(1);
  }
}
