#!/usr/bin/env node

/**
 * @file
 * The script generates index files for submodules.
 *
 * It's a part of the build process.
 */

import { readFile, writeFile } from "fs/promises";
import { listFPFns } from "../_lib/listFPFns.ts";
import { listFns } from "../_lib/listFns.ts";
import { listLocales } from "../_lib/listLocales.ts";
import { namedExports, namedExportsToStr } from "../_lib/namedExports.ts";
import path from "node:path";
import { format } from "oxfmt";

interface ModuleFile {
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
      formatWriteFile("package.json", json),
    ),

    generateIndex({ kind: "fns", files: fns }).then((index) =>
      formatWriteFile("src/index.ts", index),
    ),

    generateIndex({ kind: "fp", files: fpFns }).then((index) =>
      formatWriteFile("src/fp/index.ts", index),
    ),

    generateIndex({ kind: "locale", files: locales }).then((index) =>
      formatWriteFile("src/locale/index.ts", index),
    ),

    formatWriteFile("typedoc.json", generateTypeDoc(fns)),
  ]);
})();

interface GeneratePackageJSONProps {
  fns: ModuleFile[];
  fpFns: ModuleFile[];
  locales: ModuleFile[];
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
      [".", "./src/index.ts"],
    ]
      .concat(mapWrkspExports(["./constants", "./locale", "./fp"], "."))
      .concat(mapWrkspExports(mapFiles(fns)))
      .concat(mapWrkspExports(mapFiles(fpFns), "./fp"))
      .concat(mapWrkspExports(mapFiles(locales), "./locale")),
  );
  packageJSON.publishConfig ||= {};
  packageJSON.publishConfig.exports = Object.fromEntries(
    [
      ["./package.json", "./package.json"],
      [
        ".",
        {
          require: {
            types: "./index.d.cts",
            default: "./index.cjs",
          },
          import: {
            types: "./index.d.ts",
            default: "./index.js",
          },
        },
      ],
    ]
      .concat(mapPublishExports(["./constants", "./locale", "./fp"], "."))
      .concat(mapPublishExports(mapFiles(fns)))
      .concat(mapPublishExports(mapFiles(fpFns), "./fp"))
      .concat(mapPublishExports(mapFiles(locales), "./locale")),
  );
  return JSON.stringify(packageJSON, null, 2);
}

function mapFiles(files: ModuleFile[]) {
  return files.map((file) => file.path);
}

function mapWrkspExports(paths: string[], prefix = ".") {
  return paths.map((path) => {
    const subPth = path.slice(1);
    const pth = `${prefix}${subPth}`;
    return [pth, `${prefix}/src${subPth}/index.ts`];
  });
}

function mapPublishExports(paths: string[], prefix = ".") {
  return paths.map((path) => {
    const pth = `${prefix}${path.slice(1)}`;
    return [
      pth,
      {
        require: {
          types: `${pth}.d.cts`,
          default: `${pth}.cjs`,
        },
        import: {
          types: `${pth}.d.ts`,
          default: `${pth}.js`,
        },
      },
    ];
  });
}

namespace generateIndex {
  export interface Props {
    kind: Kind;
    files: ModuleFile[];
  }

  export type Kind = "fp" | "locale" | "fns";
}

async function generateIndex(props: generateIndex.Props): Promise<string> {
  const { kind, files } = props;
  const allExports = new Set<string>();

  function registerExports(fullPath: string, exports: string[]) {
    const duplicates = new Set(exports.filter((name) => allExports.has(name)));
    if (duplicates.size) {
      const duplicatesStr = [...duplicates].join(", ");
      throw new Error(
        `Duplicate exports found in ${fullPath}: ${duplicatesStr}`,
      );
    }
    exports.forEach((name) => allExports.add(name));
  }

  async function readAsExportLine(fullPath: string, exportPath: string) {
    const content = await readFile(fullPath, "utf8");
    const exportsArr = await namedExports(fullPath, content);
    registerExports(
      fullPath,
      exportsArr.map(({ name }) => name),
    );
    const exports = namedExportsToStr(exportsArr);

    return `export ${exports} from "${exportPath}";`;
  }

  function generateTypesExportLine() {
    const fullPath = path.join(
      process.cwd(),
      kind === "locale" ? "src/locale/types.ts" : "src/types.ts",
    );
    const relPath = `${kind === "fp" ? ".." : "."}/types.ts`;
    return readAsExportLine(fullPath, relPath);
  }

  const exportLines = await Promise.all(
    files
      .map((file) => readAsExportLine(file.fullPath, `${file.path}/index.ts`))
      .concat(generateTypesExportLine()),
  );

  return `// This file is generated automatically by \`scripts/build/indices.ts\`. Please, don't change it.

${exportLines.join("\n")}
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
          .concat(["./src/constants/index.ts"]),
        json: "./tmp/docs.json",
        plugin: ["typedoc-plugin-missing-exports"],
      },
      null,
      2,
    )
  );
}

async function formatWriteFile(filePath: string, content: string) {
  const formatted = await format(filePath, content, { printWidth: 80 });
  if (formatted.errors.length) {
    throw new Error(
      `Formatting failed: ${formatted.errors.map((e) => e.message).join(", ")}`,
    );
  }
  return writeFile(filePath, formatted.code, "utf8");
}
