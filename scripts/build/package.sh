#!/bin/bash

# The script generates the package in the given directory.
#
# It's addition to the build process. The script is used in examples.
# It also could be used to build date-fns from a git checkout.

set -e

# cd to the root dir
root="$(pwd)/$(dirname "$0")/../.."
cd "$root" || exit 1

# XXX: $PACKAGE_OUTPUT_PATH must be an absolute path!
dir=${PACKAGE_OUTPUT_PATH:-"$root/lib"}
export PACKAGE_OUTPUT_PATH="$dir"

# Clean up output dir
rm -rf "$dir"
mkdir -p "$dir"

# Transpile ESM versions of files
env BABEL_ENV=esm npx babel src \
  --config-file ./babel.config.json \
  --source-root src \
  --out-dir "$dir" \
  --extensions .js,.ts \
  --out-file-extension .js \
  --quiet

# Add fallback for Next.js and other tools that modularize imports:
npx tsx scripts/build/modularized.ts

# Transpile CommonJS versions of files
env BABEL_ENV=cjs npx babel src \
  --config-file ./babel.config.json \
  --source-root src \
  --out-dir "$dir" \
  --extensions .js,.ts \
  --out-file-extension .cjs \
  --quiet

# Generate TypeScript
npx tsc --project tsconfig.lib.json --outDir "$dir"

if [ -n "$TEST_FLATTEN" ]; then
  exit 0
fi

# Make it prettier
if [ -z "$PACKAGE_SKIP_BEAUTIFY" ]; then
  # Prettier won't format in node_modules, but when running the smoke tests, we
  # need to format the files in node_modules.
  cd $dir
  npx prettier . --write --ignore-path "" > /dev/null 2>&1 || exit 1
  cd -
fi

# Flatten the structure
npx tsx scripts/build/flatten.ts

# Generate .d.cts files
npx tsx scripts/build/cts.ts

# Copy basic files
for pattern in CHANGELOG.md \
  package.json \
  docs \
  LICENSE.md \
  README.md \
  SECURITY.md
do
  cp -r "$pattern" "$dir"
done

# Build CDN versions
if [ -z "$PACKAGE_SKIP_CDN" ]; then
  bun ./scripts/build/cdn.ts
fi