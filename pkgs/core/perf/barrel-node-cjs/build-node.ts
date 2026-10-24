import assert from "node:assert/strict";
import { access, rm, writeFile } from "node:fs/promises";
import { availableParallelism } from "node:os";
import { fileURLToPath } from "node:url";
import { $ } from "zx";

const directory = fileURLToPath(new URL("./.node", import.meta.url));
const binary = fileURLToPath(
  new URL("./.node/out/Release/node", import.meta.url),
);

const jobs = Number(process.env.JOBS ?? availableParallelism());
assert(Number.isInteger(jobs) && jobs > 0, "JOBS must be a positive integer");

const exists = await access(directory).then(
  () => true,
  () => false,
);
if (!exists) await $`gh repo clone nodejs/node ${directory} -- --depth=1`;

const git = $({ cwd: directory });
assert.equal(
  (await git`git status --porcelain`).stdout.trim(),
  "",
  "The Node checkout has uncommitted changes. Resolve them before updating it.",
);

await git`gh pr checkout 65812 --repo nodejs/node --detach`;
const commit = (await git`git rev-parse HEAD`).stdout.trim();

// Never leave an old executable looking like a successful build of the new head.
await rm(binary, { force: true });
await rm(new URL("./.node/.git/benchmark-build.json", import.meta.url), {
  force: true,
});

try {
  await git`./configure`;
  await git`make -j ${jobs}`;

  const version = (await $`${binary} --version`).stdout.trim();

  await writeFile(
    new URL("./.node/.git/benchmark-build.json", import.meta.url),
    JSON.stringify(
      { pr: "https://github.com/nodejs/node/pull/65812", commit, version },
      null,
      2,
    ) + "\n",
  );

  console.log(`Built ${version} (Git), commit ${commit}: ${binary}`);
} catch (error) {
  await rm(binary, { force: true });

  console.error(
    "Node build failed. Build dependencies and instructions for macOS, Ubuntu and Fedora: https://github.com/nodejs/node/blob/main/BUILDING.md#building-nodejs-on-supported-platforms",
  );

  throw error;
}
