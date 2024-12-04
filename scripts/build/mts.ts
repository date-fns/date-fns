#!/usr/bin/env npx tsx

/**
 * @file
 * The script generates .d.mts files for ESM imports.
 *
 * It's a part of the build process.
 */

import { readdir, copyFile } from "fs/promises";
import { join, resolve } from "path";

const root = resolve(process.env.PACKAGE_OUTPUT_PATH || "lib");

createMTSFiles(resolve(root));

async function createMTSFiles(dir: string): Promise<void> {
  try {
    const files = await readdir(dir, { withFileTypes: true });
    const promises: Promise<void>[] = [];

    for (const file of files) {
      const fullPath = join(dir, file.name);

      if (file.isDirectory()) {
        promises.push(createMTSFiles(fullPath));
      } else if (file.isFile() && file.name.endsWith(".d.ts")) {
        const newFilePath = fullPath.replace(".d.ts", ".d.mts");
        promises.push(copyFile(fullPath, newFilePath));
      }
    }

    await Promise.all(promises); // Wait for all promises to resolve
  } catch (error) {
    console.error("Error processing directory:", error);
    process.exit(1);
  }
}
