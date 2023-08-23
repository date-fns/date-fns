#!/bin/bash

# The script generates the package in the given directory.
#
# It's addition to the build process. The script is used in examples.
# It also could be used to build date-fns from a git checkout.

set -e

# cd to the root dir
root="$(pwd)/$(dirname "$0")/../.."
cd "$root" || exit 1

# PATH="$(npm bin):$PATH"
# XXX: $PACKAGE_OUTPUT_PATH must be an absolute path!
dir=${PACKAGE_OUTPUT_PATH:-"$root/lib"}

# Clean up output dir
rm -rf "$dir"
mkdir -p "$dir"

# Transpile CommonJS versions of files
env BABEL_ENV=cjs yarn babel src --config-file ./babel.config.js --source-root src --out-dir "$dir" --ignore "**/test.ts" --extensions .mjs,.ts --out-file-extension .js --quiet

# Transpile ESM versions of files
env BABEL_ENV=esm yarn babel src --config-file ./babel.config.js --source-root src --out-dir "$dir" --ignore "**/test.ts" --extensions .mjs,.ts --out-file-extension .mjs --quiet

# --ignore test.js,snapshot.md,package.json

# Generate TypeScript
yarn tsc --project tsconfig.lib.json --outDir "$dir"

# Copy basic files
for pattern in CHANGELOG.md \
  package.json \
  docs \
  LICENSE.md \
  README.md
do
  cp -r "$pattern" "$dir"
done