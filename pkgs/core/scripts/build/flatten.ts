#!/usr/bin/env node

import { readFile, readdir, rmdir, stat, unlink, writeFile } from "fs/promises";
import { dirname, join, relative, resolve } from "path";

const dirsToRemove = new Set<string>();
const outputPath = process.argv[2];
if (!outputPath) throw new Error("Output path is not set");

const root = resolve(outputPath);
const relativeRoot = relative(process.cwd(), root);

async function main() {
  try {
    const files = await getFiles(relativeRoot);
    for (const filePath of files) {
      const content = await readFile(filePath, "utf-8");
      const newFilePath = flattenPath(relativeRoot, filePath);
      const isCJS = /\.cjs$/.test(filePath);
      const replaceRE = isCJS
        ? /require\((["'])([^"']+)\1\)/g
        : /from (["'])([^"']+)\1/g;

      let newContent = content.replace(
        replaceRE,
        (_str, quote, relImportPath) => {
          const newRelImportPath = flattenImportPath(
            relativeRoot,
            filePath,
            relImportPath,
          );
          return isCJS
            ? `require(${quote}${newRelImportPath}${quote})`
            : `from ${quote}${newRelImportPath}${quote}`;
        },
      );

      if (!isCJS)
        newContent = newContent.replace(
          /import\((["'])([^"']+)\1\)/g,
          (_str, quote, relImportPath) =>
            `import(${quote}${flattenImportPath(relativeRoot, filePath, relImportPath)}${quote})`,
        );

      dirsToRemove.add(dirname(filePath));

      if (resolve(newFilePath) !== resolve(filePath)) {
        await writeFile(newFilePath, newContent);
        await unlink(filePath);
      } else {
        await writeFile(filePath, newContent);
      }
    }

    for (const dir of dirsToRemove) {
      await rmdir(dir).catch(() => {});
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
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
  let newImportPath = relative(dirname(newFilePath), newFullImportPath).replace(
    /\\/g,
    "/",
  );

  const ext = /\.cjs$/.test(filePath) ? ".cjs" : ".js";
  newImportPath = newImportPath.replace(/\.[jt]s$/, ext);

  return newImportPath.startsWith(".") ? newImportPath : "./" + newImportPath;
}

function flattenPath(relativeRoot: string, oldPath: string) {
  const normalizedPath = oldPath.replace(/\\/g, "/");
  const normalizedRoot = relativeRoot.replace(/\\/g, "/");
  const ignoreMove = [new RegExp(`^${normalizedRoot}/index`)];

  if (ignoreMove.some((r) => r.test(normalizedPath))) return normalizedPath;
  return normalizedPath
    .replace(/([^/]+)\/index\.(.+)$/, "$1.$2")
    .replace(/([^/]+)\/index$/, "$1");
}
