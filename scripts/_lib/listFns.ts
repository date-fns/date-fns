import { readdir } from "fs/promises";
import path from "path";

const ignorePattern = /^_|\./; // can't start with `_` or have a `.` in it
const ignoredDirs = ["locale", "esm", "fp", "constants"];

export interface FnFile {
  name: string;
  path: string;
  fullPath: string;
}

export async function listFns(): Promise<FnFile[]> {
  const srcPath = path.join(process.cwd(), "src");
  const files = await readdir(srcPath);

  return Promise.all(
    files
      .filter(
        (file) => !ignorePattern.test(file) && !ignoredDirs.includes(file),
      )
      .map((file) => ({
        name: file,
        path: `./${file}`,
        fullPath: `./src/${file}/index.ts`,
      })),
  );
}
