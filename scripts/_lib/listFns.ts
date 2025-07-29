import { readdir, readFile } from "fs/promises";
import path from "path";
import findExports from "./findExports/index.js";

const ignorePattern = /^_|\./; // can't start with `_` or have a `.` in it
const ignoredDirs = ["locale", "esm", "fp", "constants"];

export interface FnFile {
  name: string;
  path: string;
  fullPath: string;
  exports: string[];
}

export async function listFns(): Promise<FnFile[]> {
  const srcPath = path.join(process.cwd(), "src");
  const files = await readdir(srcPath);

  return Promise.all(
    files
      .filter(
        (file) => !ignorePattern.test(file) && !ignoredDirs.includes(file),
      )
      .map(async (file) => {
        const fullPath = `./src/${file}/index.ts`;
        const source = await readFile(
          path.join(process.cwd(), fullPath),
          "utf-8",
        );
        const exports = findExports(source);

        return {
          name: file,
          path: `./${file}`,
          fullPath,
          exports,
        };
      }),
  );
}
