import assert from "node:assert/strict";
import { access, constants, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { $ } from "zx";

interface Runtime {
  name: "node" | "bun" | "deno";
  major?: number;
  binary: string;
  args: string[];
  versions: Record<string, string>;
  label: string;
  git: boolean;
  build?: unknown;
}

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
  const runtimes: Runtime[] = await Promise.all(
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
        name: "node" as const,
        major,
        binary,
        args: [],
        versions,
        label: `Node ${versions.node}`,
        git: false,
        build: undefined as unknown,
      };
    }),
  );

  runtimes.push(
    ...(await Promise.all(
      (["bun", "deno"] as const).map(async (name): Promise<Runtime> => {
        const binary = (
          await $({ quiet: true })`mise x ${`${name}@latest`} -- which ${name}`
        ).stdout.trim();
        assert(binary, `mise did not resolve ${name}`);

        const versions = await $({
          quiet: true,
          env: { ...process.env, NODE_OPTIONS: "" },
        })`${binary} ${name === "deno" ? ["eval", "console.log(JSON.stringify(Deno.version))"] : ["-p", "JSON.stringify(process.versions)"]}`.json<
          Record<string, string>
        >();
        assert(versions[name], `Missing ${name} version`);

        return {
          name,
          binary,
          args:
            name === "deno"
              ? ["run", "--allow-all", "--node-modules-dir=manual"]
              : [],
          versions,
          label: `${name === "bun" ? "Bun" : "Deno"} ${versions[name]}`,
          git: false,
        };
      }),
    )),
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
    name: "node",
    major: Number(versions.node.split(".")[0]),
    binary,
    args: [],
    versions,
    label: `Node ${versions.node} (Git)`,
    git: true,
    build,
  });

  return runtimes;
}
