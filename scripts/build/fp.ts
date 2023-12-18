#!/usr/bin/env npx tsx

/**
 * @file
 * The script generates the FP functions using the docs JSON file.
 *
 * It's a part of the build process.
 */

import { joinTag, readRefsFromJSON } from "@date-fns/docs";
import { mkdir, stat, writeFile } from "fs/promises";
import path from "path";
import { config } from "../../docs/config.js";

async function main() {
  const fns = await readRefsFromJSON(
    config,
    path.resolve(__dirname, "../../docs/"),
  );

  await Promise.all(
    fns.map(async (ref) => {
      if (ref.kind !== "function") return;

      const name = ref.ref.name;
      const hasOptions = !!ref.fn.signatures?.find(
        (singature: any) =>
          singature.parameters?.find((p: any) => p.name === "options"),
      );
      const fnArity =
        ref.fn.signatures?.reduce<number>(
          (acc: number, signature: any) =>
            Math.max(acc, signature.parameters?.length || 0),
          0,
        ) || 0;

      // Skip non-pure functions, i.e. startOfToday as they can't
      // be safely curried.
      const pure = ref.fn.signatures?.every(
        (signature: any) =>
          !signature.comment.blockTags.some(
            (tag: any) => tag.tag === "@pure" && joinTag(tag) === "false",
          ),
      );
      if (!pure) return;

      async function writeFn(
        arity: number,
        sourceName: string,
        fnName = sourceName,
      ) {
        const source = getFPFn(sourceName, fnName, arity);
        const dir = `./src/fp/${fnName}`;

        if (!(await exists(dir))) await mkdir(dir);
        return writeFile(`${dir}/index.ts`, source);
      }

      return Promise.all([
        writeFn(hasOptions ? fnArity - 1 : fnArity, name),
        hasOptions && writeFn(fnArity, name, name + "WithOptions"),
      ]);
    }),
  );
}

async function exists(filePath: string) {
  try {
    await stat(filePath);
  } catch (err) {
    return false;
  }
  return true;
}

main();

function getFPFn(sourceName: string, fnName: string, arity: number): string {
  return `// This file is generated automatically by \`scripts/build/fp.ts\`. Please, don't change it.

import { ${sourceName} as fn } from "../../${sourceName}/index.js";
import { convertToFP } from "../_lib/convertToFP/index.js";

export const ${fnName} = convertToFP(fn, ${arity});
`;
}
