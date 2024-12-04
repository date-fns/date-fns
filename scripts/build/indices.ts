#!/usr/bin/env npx tsx

/**
 * @file
 * The script generates index files for submodules.
 *
 * It's a part of the build process.
 */

import { writeFile, readFile } from "fs/promises";
import { listFns } from "../_lib/listFns.js";
import { listFPFns } from "../_lib/listFPFns.js";
import { listLocales } from "../_lib/listLocales.js";

interface File {
  name: string;
  path: string;
  fullPath: string;
}

(async () => {
  const locales = await listLocales();
  const fns = await listFns();
  const fpFns = await listFPFns();

  await Promise.all([
    generatePackageJSON({ fns, fpFns, locales }).then((json) =>
      writeFile("package.json", json)
    ),

    writeFile("src/index.ts", generateIndex({ files: fns })),

    writeFile("src/fp/index.ts", generateIndex({ files: fpFns, isFP: true })),

    writeFile("src/locale/index.ts", generateIndex({ files: locales })),

    writeFile("typedoc.json", generateTypeDoc(fns)),
  ]);
})();

interface GeneratePackageJSONProps {
  fns: File[];
  fpFns: File[];
  locales: File[];
}

async function generatePackageJSON({
  fns,
  fpFns,
  locales,
}: GeneratePackageJSONProps) {
  const packageJSON = JSON.parse(await readFile("package.json", "utf-8"));
  packageJSON.exports = Object.fromEntries(
    [
      ["./package.json", "./package.json"],
      [
        ".",
        {
          require: {
            types: "./index.d.ts",
            default: "./index.js",
          },
          import: {
            types: "./index.d.mts",
            default: "./index.mjs",
          },
        },
      ],
    ]
      .concat(mapExports(["./constants", "./locale", "./fp"], "."))
      .concat(mapExports(mapFiles(fns)))
      .concat(mapExports(mapFiles(fpFns), "./fp"))
      .concat(mapExports(mapFiles(locales), "./locale"))
  );
  return JSON.stringify(packageJSON, null, 2);
}

function mapFiles(files: File[]) {
  return files.map((file) => file.path);
}

function mapExports(paths: string[], prefix = ".") {
  return paths.map((path) => {
    const pth = `${prefix}${path.slice(1)}`;
    return [
      pth,
      {
        require: {
          types: `${pth}.d.ts`,
          default: `${pth}.js`,
        },
        import: {
          types: `${pth}.d.mts`,
          default: `${pth}.mjs`,
        },
      },
    ];
  });
}

interface GenerateIndexProps {
  files: File[];
  isFP?: boolean;
}

function generateIndex({ files, isFP }: GenerateIndexProps): string {
  const lines = files
    .map((file) => `export * from "${file.path}/index.js";`)
    .concat(`export type * from "${isFP ? ".." : "."}/types.js";`);

  return `// This file is generated automatically by \`scripts/build/indices.ts\`. Please, don't change it.

${lines.join("\n")}
`;
}

function generateTypeDoc(fns: Awaited<ReturnType<typeof listFns>>) {
  return (
    "// This file is generated automatically by `scripts/build/indices.ts`. Please, don't change it.\n" +
    JSON.stringify(
      {
        name: "date-fns",
        entryPoints: fns
          .map((fn) => fn.fullPath)
          .concat("./src/constants/index.ts"),
        json: "./tmp/docs.json",
        plugin: ["typedoc-plugin-missing-exports"],
      },
      null,
      2
    )
  );
}
