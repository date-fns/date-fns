import type { DocNode, DocNodeModuleDoc } from "@deno/doc";
import { relative } from "path";
import { fileURLToPath } from "url";

export function isExportNode(
  node: DocNode,
): node is DocNode & { declarationKind: "export" } {
  return node.declarationKind == "export" && !isModuleDocNode(node);
}

export function isModuleDocNode(node: DocNode): node is DocNodeModuleDoc {
  return node.kind === "moduleDoc";
}

export function repoPath(root: string, node: DocNode): string {
  const file = fileURLToPath(node.location.filename);
  return relative(root, file);
}
