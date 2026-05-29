/**
 * The script builds the CDN version of the library.
 */

import { execFile } from "child_process";
import { cp, mkdir, readFile, rm, writeFile } from "fs/promises";
import { availableParallelism } from "node:os";
import { dirname, join, relative } from "path";
import { promisify } from "util";
import { build } from "rolldown";
import { listLocales, type LocaleFile } from "../_lib/listLocales.ts";
import { promiseQueue } from "../test/_lib/queue.ts";

if (!process.env.DATE_FNS_PACKAGE_OUTPUT_PATH)
  throw new Error("DATE_FNS_PACKAGE_OUTPUT_PATH is not set");

if (!process.env.DATE_FNS_CDN_OUTPUT_PATH)
  throw new Error("DATE_FNS_CDN_OUTPUT_PATH is not set");

const execFileAsync = promisify(execFile);
const packageOut = relative(
  process.cwd(),
  process.env.DATE_FNS_PACKAGE_OUTPUT_PATH,
);
const out = relative(process.cwd(), process.env.DATE_FNS_CDN_OUTPUT_PATH);
const entriesOut = join(out, "_entries");
const cdnPackage = process.env.DATE_FNS_CDN_PACKAGE === "true";
const sourceMaps = process.env.DATE_FNS_CDN_SOURCE_MAPS === "true";
const warn = process.env.DATE_FNS_CDN_WARN === "true";
const warning =
  'console.log("date-fns CDN files have moved to @date-fns/cdn. Please update your URLs. See: https://date-fns.org/docs/CDN");';

const indexPath = join(out, "cdn.js");
const fpIndexPath = join(out, "fp", "cdn.js");
const localesIndexPath = join(out, "locale", "cdn.js");
const locales = await listLocales();
const outPaths = [
  indexPath,
  fpIndexPath,
  localesIndexPath,
  ...locales.map((locale) => join(out, "locale", locale.code, "cdn.js")),
];

if (cdnPackage) {
  await rm(out, { recursive: true, force: true });
} else {
  await Promise.all(
    outPaths
      .flatMap((path) => [
        path,
        `${path}.map`,
        minPath(path),
        `${minPath(path)}.map`,
      ])
      .map((path) => rm(path, { force: true })),
  );
}

await mkdir(entriesOut, { recursive: true });

if (cdnPackage) {
  await Promise.all([
    cp("LICENSE.md", join(out, "LICENSE.md")),
    writeFile(
      join(out, "README.md"),
      "# @date-fns/cdn\n\nSee the date-fns CDN documentation: https://date-fns.org/docs/CDN\n",
    ),
    writePackageJSON(),
  ]);
}

const entryPairs = await Promise.all([
  Promise.all(
    locales.map(async (locale) => {
      const outPath = join(out, "locale", locale.code, "cdn.js");
      const entryPath = join(entriesOut, "locale", locale.code, "cdn.js");
      await mkdir(dirname(entryPath), { recursive: true });
      await writeFile(entryPath, localeTemplate(locale, entryPath));
      return [entryPath, outPath] as const;
    }),
  ),

  writeEntry(indexPath, indexTemplate(entryPathFor(indexPath))),

  writeEntry(fpIndexPath, fpIndexTemplate(entryPathFor(fpIndexPath))),

  writeEntry(
    localesIndexPath,
    localesIndexTemplate(entryPathFor(localesIndexPath)),
  ),
]).then(([localePaths, ...indexPaths]) => localePaths.concat(indexPaths));

await promiseQueue(
  entryPairs.map(([entryPath, outPath]) => async () => {
    await bundle(entryPath, outPath);

    await execFileAsync(
      "pnpm",
      [
        "babel",
        outPath,
        "--out-file",
        outPath,
        ...(sourceMaps ? ["--source-maps"] : []),
      ],
      { env: { ...process.env, BABEL_ENV: "cdn" } },
    );

    // Wrap into IIFE, to avoid polluting global scope.
    const content = await readFile(outPath, "utf-8");
    await writeFile(
      outPath,
      `(() => {\n${content}\n${warn ? warning : ""}\n})();`,
    );

    await bundle(outPath, minPath(outPath), { minify: true });
  }),
  availableParallelism(),
);

await rm(entriesOut, { recursive: true, force: true });

async function writeEntry(outPath: string, content: string) {
  const entryPath = entryPathFor(outPath);
  await mkdir(dirname(entryPath), { recursive: true });
  await writeFile(entryPath, content);
  return [entryPath, outPath] as const;
}

function entryPathFor(outPath: string) {
  return join(entriesOut, relative(out, outPath));
}

async function bundle(entryPath: string, outPath: string, options = {}) {
  await mkdir(dirname(outPath), { recursive: true });
  await build({
    input: entryPath,
    output: {
      file: outPath,
      format: "esm",
      sourcemap: sourceMaps,
      ...options,
    },
  });
}

function minPath(path: string) {
  return path.replace(/\.js$/, ".min.js");
}

function packageImport(fromPath: string, packagePath: string) {
  const importPath = relative(dirname(fromPath), join(packageOut, packagePath));
  return importPath.startsWith(".") ? importPath : `./${importPath}`;
}

function indexTemplate(fromPath: string) {
  return `import * as dateFns from "${packageImport(fromPath, "index.js")}";
window.dateFns = {
  ...window.dateFns,
  ...dateFns
};`;
}

function fpIndexTemplate(fromPath: string) {
  return `import * as fp from "${packageImport(fromPath, "fp.js")}";
window.dateFns = {
  ...window.dateFns,
  fp
};`;
}

function localesIndexTemplate(fromPath: string) {
  return `import * as locales from "${packageImport(fromPath, "locale.js")}";
window.dateFns = {
  ...window.dateFns,
  locale: {
    ...window.dateFns?.locale,
    ...locales
  }
};`;
}

function localeTemplate({ name, code }: LocaleFile, fromPath: string) {
  return `import { ${name} } from "${packageImport(fromPath, `locale/${code}.js`)}";
window.dateFns = {
  ...window.dateFns,
  locale: {
    ...window.dateFns?.locale,
    ${name}
  }
};`;
}

async function writePackageJSON() {
  const packageJSON = JSON.parse(await readFile("package.json", "utf-8"));
  await writeFile(
    join(out, "package.json"),
    JSON.stringify(
      {
        name: "@date-fns/cdn",
        version: packageJSON.version,
        description: "CDN bundles for date-fns",
        license: packageJSON.license,
        contributors: packageJSON.contributors,
        repository: packageJSON.repository,
        type: "module",
        jsdelivr: "./cdn.min.js",
      },
      null,
      2,
    ) + "\n",
  );
}
