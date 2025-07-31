#!/usr/bin/env npx tsx

/**
 * @file
 * The script generates .d.cts files for CommonJS imports.
 *
 * It's a part of the build process.
 */

import { readdir, readFile, writeFile } from "fs/promises";
import { join, resolve } from "path";

const root = resolve(process.env.PACKAGE_OUTPUT_PATH || "lib");

createCTSFiles(resolve(root));

async function createCTSFiles(dir: string): Promise<void> {
  try {
    const files = await readdir(dir, { withFileTypes: true });
    const promises: Promise<void>[] = [];

    for (const file of files) {
      const fullPath = join(dir, file.name);

      if (file.isDirectory()) {
        promises.push(createCTSFiles(fullPath));
      } else if (file.isFile() && file.name.endsWith(".d.ts")) {
        const newFilePath = fullPath.replace(".d.ts", ".d.cts");
        promises.push(
          (async () => {
            const contents = await readFile(fullPath, "utf8");
            // Replace `.js` with `.cjs` in imports
            const updatedContents = contents.replace(/\.js/g, ".cjs");
            await writeFile(newFilePath, updatedContents);
          })(),
        );
      }
    }

    await Promise.all(promises); // Wait for all promises to resolve
  } catch (error) {
    console.error("Error processing directory:", error);
    process.exit(1);
  }
}
