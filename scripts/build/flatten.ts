#!/usr/bin/env npx tsx

import assert from "assert";
import { readFile, readdir, rmdir, stat, unlink, writeFile } from "fs/promises";
import { dirname, join, relative, resolve } from "path";

const dirsToRemove = new Set<string>();
const root = resolve(process.env.PACKAGE_OUTPUT_PATH || "lib");
const relativeRoot = relative(process.cwd(), root);

async function main() {
  return getFiles(relativeRoot)
    .then((files) =>
      Promise.all(
        files.map(async (filePath) => {
          const content = await readFile(filePath, "utf-8");
          const newFilePath = getNewPath(filePath);
          const isCJS = /\.js$/.test(filePath);
          const replaceRE = isCJS ? /require\("([^"]+)"\)/g : /from "([^"]+)"/g;

          let newContent = content.replace(replaceRE, (_str, relImportPath) => {
            const newRelImportPath = getNewImportPath(filePath, relImportPath);
            return isCJS
              ? `require("${newRelImportPath}")`
              : `from "${newRelImportPath}"`;
          });

          if (!isCJS)
            newContent = newContent.replace(
              /import\("([^"]+)"\)/g,
              (_str, relImportPath) =>
                `import("${getNewImportPath(filePath, relImportPath)}")`
            );

          // Non-empty dirs won't delete, so we can add all dirs
          dirsToRemove.add(dirname(filePath));

          if (newFilePath !== filePath)
            return Promise.all([
              writeFile(newFilePath, newContent),
              unlink(filePath),
            ]);
          else return writeFile(filePath, newContent);
        })
      )
    )
    .then(() =>
      Promise.all([...dirsToRemove].map((dir) => rmdir(dir).catch(() => {})))
    )
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

function getNewImportPath(filePath: string, relImportPath: string): string {
  const importPath = resolvePath(filePath, relImportPath);

  const newFilePath = getNewPath(filePath);
  const newFullImportPath = getNewPath(importPath);

  // Determine the relative path between newFilePath and newFullImportPath
  const newImportPath = relative(dirname(newFilePath), newFullImportPath);

  return newImportPath.startsWith(".") ? newImportPath : "./" + newImportPath;
}

const ignoreMove = [new RegExp(`^${relativeRoot}/index`)];

function getNewPath(oldPath: string) {
  if (ignoreMove.some((r) => r.test(oldPath))) return oldPath;
  return oldPath
    .replace(/([^/]+)\/index\.(.+)$/, "$1.$2")
    .replace(/([^/]+)\/index$/, "$1");
}

function resolvePath(base: string, relativePath: string) {
  const baseDir = dirname(base);
  return join(baseDir, relativePath);
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
      /\.(d\.ts|js|mjs)$/.test(file) &&
      !ignoreProcess.some((r) => r.test(fullPath))
    ) {
      allFiles.push(fullPath);
    }
  }

  return allFiles;
}

async function test() {
  // getNewPath

  // Moves files
  assert.strictEqual(getNewPath("lib/addDays/index.js"), "lib/addDays.js");
  assert.strictEqual(
    getNewPath("lib/fp/addDays/index.js"),
    "lib/fp/addDays.js"
  );
  assert.strictEqual(
    getNewPath("lib/locale/en-US/index.js"),
    "lib/locale/en-US.js"
  );
  assert.strictEqual(getNewPath("lib/transpose/index.js"), "lib/transpose.js");
  assert.strictEqual(getNewPath("lib/fp/index.js"), "lib/fp.js");
  assert.strictEqual(getNewPath("lib/locale/index.js"), "lib/locale.js");
  // Ignores the index file
  assert.strictEqual(getNewPath("lib/index.js"), "lib/index.js");
  // Ignores non-index files
  assert.strictEqual(
    getNewPath("lib/parse/_lib/Setter.js"),
    "lib/parse/_lib/Setter.js"
  );
  assert.strictEqual(getNewPath("./setWeek/index"), "./setWeek");
  assert.strictEqual(getNewPath("./add/index.d.ts"), "./add.d.ts");

  // resolvePath

  // Resolves relative paths
  assert.strictEqual(
    resolvePath("lib/addDays/index.js", "./_lib/utils.js"),
    "lib/addDays/_lib/utils.js"
  );
  assert.strictEqual(
    resolvePath("lib/parse/_lib/Setter.js", "../../transpose/index.js"),
    "lib/transpose/index.js"
  );

  // getNewImportPath

  assert.strictEqual(
    getNewImportPath("lib/addDays/index.js", "./_lib/utils.js"),
    "./addDays/_lib/utils.js"
  );
  assert.strictEqual(
    getNewImportPath("lib/index.js", "./add/index.js"),
    "./add.js"
  );
  assert.strictEqual(
    getNewImportPath("lib/index.js", "./locale/en-US/index.js"),
    "./locale/en-US.js"
  );
  assert.strictEqual(
    getNewImportPath("lib/locale/en-US/index.js", "../_lib/utils.js"),
    "./_lib/utils.js"
  );
  assert.strictEqual(
    getNewImportPath("lib/parse/_lib/Setter.js", "../../transpose/index.js"),
    "../../transpose.js"
  );
  assert.strictEqual(
    getNewImportPath("lib/add/index.d.ts", "../types.js"),
    "./types.js"
  );
}

process.env.TEST ? test() : main();
