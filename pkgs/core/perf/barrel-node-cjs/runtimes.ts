import assert from "node:assert/strict";
import { access, constants, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { $ } from "zx";

export const gitBuildCommand =
  "mise //pkgs/core/perf/barrel-node-cjs:node/build";

export const gitMissingReport = [
  "## Local PR runtime",
  "",
  "This run includes released runtimes only. To include [Node PR #65812](https://github.com/nodejs/node/pull/65812), build it from the repository root:",
  "",
  "```sh",
  gitBuildCommand,
  "```",
  "",
];

export async function resolveRuntimes() {
  const runtimes = await Promise.all(
    [22, 24, 25, 26].map(async (major) => {
      const binary = (
        await $({ quiet: true })`mise x ${`node@${major}`} -- which node`
      ).stdout.trim();
      assert(binary, `mise did not resolve Node ${major}`);

      const versions = await $({
        quiet: true,
        env: { ...process.env, NODE_OPTIONS: "" },
      })`${binary} -p ${"JSON.stringify(process.versions)"}`.json<
        Record<string, string>
      >();
      assert.equal(Number(versions.node.split(".")[0]), major);

      return {
        major,
        binary,
        versions,
        label: `Node ${versions.node}`,
        git: false,
        build: undefined as unknown,
      };
    }),
  );

  const binary = fileURLToPath(
    new URL("./.node/out/Release/node", import.meta.url),
  );
  try {
    await access(binary, constants.X_OK);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return runtimes;

    throw error;
  }

  const versions = await $({
    quiet: true,
    env: { ...process.env, NODE_OPTIONS: "" },
  })`${binary} -p ${"JSON.stringify(process.versions)"}`.json<
    Record<string, string>
  >();

  const build = await readFile(
    new URL("./.node/.git/benchmark-build.json", import.meta.url),
    "utf8",
  ).then(JSON.parse, (error: NodeJS.ErrnoException) => {
    if (error.code === "ENOENT") return undefined;

    throw error;
  });

  runtimes.push({
    major: Number(versions.node.split(".")[0]),
    binary,
    versions,
    label: `Node ${versions.node} (Git)`,
    git: true,
    build,
  });

  return runtimes;
}
