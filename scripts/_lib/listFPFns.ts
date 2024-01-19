import { readdir } from "fs/promises";
import path from "path";

const ignorePattern = /^_|\./; // can't start with `_` or have a `.` in it

export interface FPFnFile {
  name: string;
  path: string;
  fullPath: string;
}

export async function listFPFns(): Promise<FPFnFile[]> {
  const files = await readdir(path.join(process.cwd(), "src", "fp"));

  return files
    .filter((file) => !ignorePattern.test(file))
    .map((file) => ({
      name: file,
      path: `./${file}`,
      fullPath: `./src/fp/${file}/index.js`,
    }));
}
