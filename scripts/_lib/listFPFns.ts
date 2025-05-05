import { readdir, readFile } from "fs/promises";
import path from "path";
import findExports from "./findExports/index.js";

const ignorePattern = /^_|\./; // can't start with `_` or have a `.` in it

export interface FPFnFile {
  name: string;
  path: string;
  fullPath: string;
  exports: string[];
}

export async function listFPFns(): Promise<FPFnFile[]> {
  const files = await readdir(path.join(process.cwd(), "src", "fp"));

  return Promise.all(
    files
      .filter((file) => !ignorePattern.test(file))
      .map(async (file) => {
        const fullPath = `./src/fp/${file}/index.ts`;
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
