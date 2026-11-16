import type { DocNode, DocNodeModuleDoc } from "@deno/doc";
import { readFile } from "fs/promises";
import type { Root } from "mdast";
import { toMarkdown } from "mdast-util-to-markdown";
import path from "path";
import { canonize } from "smolcanon";
import { xxh32 } from "smolxxh";
import { isExportNode, isModuleDocNode } from "../src/data/index.ts";

//#region Package

const dateFnsDir = process.env.DATE_FNS_DIR;
if (!dateFnsDir) throw new Error("🔴 DATE_FNS_DIR is unset");

const packageJsonStr = await readFile(
  path.resolve(dateFnsDir, "package.json"),
  "utf-8",
);
const packageJson = JSON.parse(packageJsonStr);

const modules: Module[] = [];

Object.keys(packageJson.exports || {}).forEach((exportPath: string) => {
  if (
    exportPath === "./package.json" ||
    // TODO: Figure out where did indices go
    exportPath === "." ||
    exportPath === "./locale" ||
    exportPath === "./fp"
  )
    return;

  const name = exportPath.slice(2);
  const importPath = `date-fns/${name}`;
  const pathParts = ["src", "index.ts"];
  if (name) pathParts.splice(1, 0, name);
  const srcPath = pathParts.join("/");

  console.log(importPath);
  if (importPath !== "date-fns/constants") return;

  modules.push({ name, importPath, srcPath, moduleDocs: [], exports: [] });
});

//#endregion

//#region Docs

const docsJsonStr = await readFile("tmp/docs.json", "utf-8");
const docsJson: DocsJson = JSON.parse(docsJsonStr);

const srcMap: SrcMap = {};
const processedNodes = new Set<string>();
const hashesMap = new WeakMap<DocNode, string>();

docsJson.nodes.forEach((node) => {
  // NOTE: For whatever reason, deno_doc generates duplicate nodes, so we use
  // a hash to track them.
  const nodeCanon = canonize(node.location);
  const nodeHash = xxh32(Buffer.from(nodeCanon, "utf8")).toString(16);
  if (processedNodes.has(nodeHash)) return;
  processedNodes.add(nodeHash);
  hashesMap.set(node, nodeHash);

  if (
    node.kind === "function" &&
    node.declarationKind === "export" &&
    node.name === "add"
  ) {
    console.log("=================== export function add");
    console.log(node);
  }

  const srcPath = node.location.filename.split("date-fns/")[1];
  const src = (srcMap[srcPath] ||= { nodes: [] });
  src.nodes.push(node);
});

//#endregion

//#region Processing

modules.forEach((module) => {
  const moduleSrc = srcMap[module.srcPath];
  if (!moduleSrc)
    throw new Error(`Docs data for ${module.srcPath} is not found`);

  module.moduleDocs = moduleSrc.nodes.filter(isModuleDocNode);

  module.exports = moduleSrc.nodes.filter(isExportNode);
});

//#endregion

//#region Markdown

let i = 0;
const toDebug = -1;

const moduleMdRoots: Root[] = modules.map((module) => {
  const exportNames = module.exports.map((node) => node.name);

  if (i === toDebug) {
    console.log(JSON.stringify(module, null, 2));
  }
  i++;

  const mdRoot: Root = {
    type: "root",
    children: [
      {
        type: "heading",
        depth: 1,
        children: [{ type: "text", value: module.name }],
      },
    ],
  };

  module.moduleDocs.forEach((moduleDoc) => {
    // TODO: Render JSDoc
    mdRoot.children.push({
      type: "paragraph",
      children: [{ type: "text", value: JSON.stringify(moduleDoc.jsDoc) }],
    });
  });

  mdRoot.children.push({
    type: "code",
    lang: "ts",
    value: `import { ${exportNames.join(", ")} } from "${module.importPath}"`,
  });

  return mdRoot;
});

//#endregion

i = -1;

moduleMdRoots.forEach((moduleMdRoot) => {
  const md = toMarkdown(moduleMdRoot);

  if (i === toDebug) console.log(md);
  i++;

  console.log("\n" + md);
});

process.exit(0);

const declarations = docsJson.nodes.filter(
  (node) => node.declarationKind == "export",
);

declarations.forEach((declaration) => {
  console.log(`\n# ${declaration.name}\n`);
  const srcPath = declaration.location.filename.split("date-fns/src/")[1];
  always(srcPath);

  const module = srcPath.replace("/index.ts", "");
  const _modulePath = `./${module}`;

  console.log(`- file: ${srcPath}`);
  console.log(`- module: ${module}`);

  switch (declaration.kind) {
    case "function":
    case "interface":
    case "typeAlias":
    case "variable":
    case "moduleDoc":
      console.log(`- kind: ${declaration.kind}`);
      break;

    // @ts-expect-error: Deno doc types aren't accurate:
    // https://github.com/denoland/deno_doc/pull/737
    case "reference":
      console.log(`- kind: re-export`);
      break;

    default:
      throw new Error(`Unknown declaration kind: ${declaration.kind}`);
  }
});

interface Module {
  name: string;
  importPath: string;
  srcPath: string;
  moduleDocs: DocNodeModuleDoc[];
  exports: (DocNode & { declarationKind: "export" })[];
}

type SrcMap = Record<string, Src>;

interface Src {
  nodes: DocNode[];
}

interface DocsJson {
  version: 1;
  nodes: DocNode[];
}

function always(condition: unknown): asserts condition {
  if (!condition) throw new Error("Assertion failed");
}
