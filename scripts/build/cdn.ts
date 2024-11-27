/**
 * The script builds the CDN version of the library.
 */

import { $, type BuildOutput, type ShellOutput } from "bun";
import { readFile, writeFile } from "fs/promises";
import { availableParallelism } from "node:os";
import { dirname, join, relative } from "path";
import { listLocales, type LocaleFile } from "../_lib/listLocales.js";
import { promiseQueue } from "../test/_lib/queue.js";

if (!process.env.PACKAGE_OUTPUT_PATH)
  throw new Error("PACKAGE_OUTPUT_PATH is not set");

const out = relative(process.cwd(), process.env.PACKAGE_OUTPUT_PATH);

const indexPath = join(out, "cdn.js");
const fpIndexPath = join(out, "fp", "cdn.js");
const localesIndexPath = join(out, "locale", "cdn.js");

Promise.all([
  listLocales().then((locales) =>
    Promise.all(
      locales.map(async (locale) => {
        const localePath = join(out, "locale", locale.code, "cdn.js");
        await $`mkdir -p ${dirname(localePath)}`;
        await writeFile(localePath, localeTemplate(locale));
        return localePath;
      }),
    ),
  ),

  writeFile(indexPath, indexTemplate()).then(() => indexPath),

  writeFile(fpIndexPath, fpIndexTemplate()).then(() => fpIndexPath),

  writeFile(localesIndexPath, localesIndexTemplate()).then(
    () => localesIndexPath,
  ),
])
  .then(([localePaths, ...indexPaths]) => localePaths.concat(indexPaths))
  .then(async (paths) => {
    const buildOptions = {
      entrypoints: paths,
      outdir: ".",
      sourcemap: "external" as const,
      root: ".",
    };

    // First bundle code
    assertBunBuild(await Bun.build(buildOptions));

    // Make it compatible with older browser
    await promiseQueue(
      paths.map((path) => async () => {
        // Use Babel to transpile
        assertShellOutput(
          await $`env BABEL_ENV=cdn npx babel ${path} --out-file ${path} --source-maps`,
        );

        // Wrap into IIFE, to avoid polluting global scope
        const content = await readFile(path, "utf-8");
        await writeFile(path, `(() => {\n${content}\n})();`);
      }),
      availableParallelism(),
    );

    // Now generate min versions
    assertBunBuild(
      await Bun.build({
        ...buildOptions,
        minify: true,
        naming: "/[dir]/[name].min.[ext]",
      }),
    );
  });

function indexTemplate() {
  return `import * as dateFns from "./index.js";
window.dateFns = {
  ...window.dateFns,
  ...dateFns
};`;
}

function fpIndexTemplate() {
  return `import * as fp from "../fp.js";
window.dateFns = {
  ...window.dateFns,
  fp
};`;
}

function localesIndexTemplate() {
  return `import * as locales from "../locale.js";
window.dateFns = {
  ...window.dateFns,
  locale: {
    ...window.dateFns?.locale,
    ...locales
  }
};`;
}

function localeTemplate({ name, code }: LocaleFile) {
  return `import { ${name} } from "../${code}.js";
window.dateFns = {
  ...window.dateFns,
  locale: {
    ...window.dateFns?.locale,
    ${name}
  }
};`;
}

function assertBunBuild(output: BuildOutput) {
  if (!output.success) {
    console.log(...output.logs);
    process.exit(1);
  }
}

function assertShellOutput(output: ShellOutput) {
  if (output.exitCode !== 0) {
    console.log(output.stderr);
    process.exit(1);
  }
}
