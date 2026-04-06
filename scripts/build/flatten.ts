#!/usr/bin/env pnpm tsx

import { readFile, readdir, rmdir, stat, unlink, writeFile } from "fs/promises";
import { dirname, join, relative, resolve } from "path";
import { flattenImportPath, flattenPath } from "@date-fns/build";

const dirsToRemove = new Set<string>();
const root = resolve(process.env.PACKAGE_OUTPUT_PATH || "lib");
const relativeRoot = relative(process.cwd(), root);

async function main() {
  return getFiles(relativeRoot)
    .then((files) =>
      Promise.all(
        files.map(async (filePath) => {
          const content = await readFile(filePath, "utf-8");
          const newFilePath = flattenPath(relativeRoot, filePath);
          const isCJS = /\.cjs$/.test(filePath);
          const replaceRE = isCJS ? /require\("([^"]+)"\)/g : /from "([^"]+)"/g;

          let newContent = content.replace(replaceRE, (_str, relImportPath) => {
            const newRelImportPath = flattenImportPath(
              relativeRoot,
              filePath,
              relImportPath,
            );
            return isCJS
              ? `require("${newRelImportPath}")`
              : `from "${newRelImportPath}"`;
          });

          if (!isCJS)
            newContent = newContent.replace(
              /import\("([^"]+)"\)/g,
              (_str, relImportPath) =>
                `import("${flattenImportPath(relativeRoot, filePath, relImportPath)}")`,
            );

          // Non-empty dirs won't delete, so we can add all dirs
          dirsToRemove.add(dirname(filePath));

          if (newFilePath !== filePath)
            return Promise.all([
              writeFile(newFilePath, newContent),
              unlink(filePath),
            ]);
          else return writeFile(filePath, newContent);
        }),
      ),
    )
    .then(() =>
      Promise.all([...dirsToRemove].map((dir) => rmdir(dir).catch(() => {}))),
    )
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

const ignoreProcess = [new RegExp(`^${relativeRoot}/docs`)];

async function getFiles(dir: string): Promise<string[]> {
  const files = await readdir(dir);
  let allFiles: string[] = [];

  for (const file of files) {
    const fullPath = join(dir, file);
    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      const subFiles = await getFiles(fullPath);
      allFiles = allFiles.concat(subFiles);
    } else if (
      stats.isFile() &&
      /\.(d\.ts|js|cjs)$/.test(file) &&
      !ignoreProcess.some((r) => r.test(fullPath))
    ) {
      allFiles.push(fullPath);
    }
  }

  return allFiles;
}

main();
