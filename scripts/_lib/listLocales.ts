import { readdir } from "fs/promises";
import path from "path";

const ignorePattern = /^_|\./; // can't start with `_` or have a `.` in it
const ignoredLocales = new Set(["buildLocalizeFn", "buildMatchFn"]);

export interface LocaleFile {
  name: string;
  code: string;
  path: string;
  fullPath: string;
}

export async function listLocales(): Promise<LocaleFile[]> {
  const localesPath: string = path.resolve(process.cwd(), "src/locale");
  const locales: string[] = await readdir(localesPath);

  return locales
    .filter(
      (file: string) => !ignorePattern.test(file) && !ignoredLocales.has(file),
    )
    .map((locale: string) => ({
      name: locale
        .split("-")
        .map((word, index) =>
          index === 0 ? word : word[0].toUpperCase() + word.slice(1),
        )
        .join(""),
      code: locale,
      path: `./${locale}`,
      fullPath: `./src/locale/${locale}/index.ts`,
    }));
}
