import { readdir, readFile } from "fs/promises";
import path from "path";
import findExports from "./findExports/index.js";

const ignorePattern = /^_|\./; // can't start with `_` or have a `.` in it

export interface LocaleFile {
  name: string;
  code: string;
  path: string;
  fullPath: string;
  exports: string[] | undefined;
}

export async function listLocales(
  includeExports: boolean = false,
): Promise<LocaleFile[]> {
  const localesPath: string = path.resolve(process.cwd(), "src/locale");
  const locales: string[] = await readdir(localesPath);

  return Promise.all(
    locales
      .filter((file: string) => !ignorePattern.test(file))
      .map(async (locale: string) => {
        const fullPath = `./src/locale/${locale}/index.ts`;
        let exports = undefined;
        if (includeExports) {
          const source = await readFile(
            path.join(process.cwd(), fullPath),
            "utf-8",
          );
          exports = findExports(source);
        }
        return {
          name: locale
            .split("-")
            .map((word, index) =>
              index === 0 ? word : word[0].toUpperCase() + word.slice(1),
            )
            .join(""),
          code: locale,
          path: `./${locale}`,
          fullPath,
          exports,
        };
      }),
  );
}
