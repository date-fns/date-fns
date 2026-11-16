#!/usr/bin/env node

import { readFile, readdir, rmdir, stat, unlink, writeFile } from "fs/promises";
import { dirname, join, relative, resolve } from "path";

const dirsToRemove = new Set<string>();
const outputPath = process.argv[2];
if (!outputPath) throw new Error("Output path is not set");

const root = resolve(outputPath);
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

function flattenImportPath(
  relativeRoot: string,
  filePath: string,
  relImportPath: string,
): string {
  const importPath = join(dirname(filePath), relImportPath);

  const newFilePath = flattenPath(relativeRoot, filePath);
  const newFullImportPath = flattenPath(relativeRoot, importPath);

  // Determine the relative path between newFilePath and newFullImportPath
  const newImportPath = relative(dirname(newFilePath), newFullImportPath);

  return newImportPath.startsWith(".") ? newImportPath : "./" + newImportPath;
}

function flattenPath(relativeRoot: string, oldPath: string) {
  const ignoreMove = [new RegExp(`^${relativeRoot}/index`)];

  if (ignoreMove.some((r) => r.test(oldPath))) return oldPath;
  return oldPath
    .replace(/([^/]+)\/index\.(.+)$/, "$1.$2")
    .replace(/([^/]+)\/index$/, "$1");
}
