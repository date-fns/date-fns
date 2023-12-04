#!/usr/bin/env npx tsx

/**
 * @file
 * The script adds fallback for Next.js and others that modularize imports:
 * https://twitter.com/kossnocorp/status/1731181274579325260
 *
 * It's a part of the build process.
 */

import { readdir, writeFile, readFile } from "fs/promises";
import { dirname, join, resolve } from "path";
import { convertLocaleToConst } from "./localeSnapshots/_lib/locale.js";

const root = resolve(process.env.PACKAGE_OUTPUT_PATH || "lib");

addNextJSFallbacks(root);

async function addNextJSFallbacks(dir: string): Promise<void> {
  try {
    const files = await readdir(dir, { withFileTypes: true });
    const promises: Promise<void>[] = [];

    for (const file of files) {
      const fullPath = join(dir, file.name);
      const relateivePath = fullPath.replace(root + "/", "");

      if (file.isDirectory()) {
        promises.push(addNextJSFallbacks(fullPath));
      } else if (file.isFile() && isModule(relateivePath)) {
        promises.push(
          readFile(fullPath, "utf8").then((content) =>
            writeFile(
              fullPath,
              content +
                `

// Fallback for modularize imports:
export default ${constName(relateivePath)};`,
            ),
          ),
        );
      }
    }

    await Promise.all(promises);
  } catch (error) {
    console.error("Error processing directory:", error);
    process.exit(1);
  }
}

const fnRe = /^\w+\/index.mjs/;
const localeRe = /^locale\/[\w-]+\/index.mjs/;
const fpFn = /^fp\/\w+\/index.mjs/;

function isModule(relateivePath: string) {
  return (
    (fnRe.test(relateivePath) &&
      !["locale/index.mjs"].includes(relateivePath)) ||
    fpFn.test(relateivePath) ||
    localeRe.test(relateivePath)
  );
}

function constName(relateivePath: string) {
  if (localeRe.test(relateivePath)) {
    return convertLocaleToConst(dirname(relateivePath));
  } else {
    return dirname(relateivePath);
  }
}
