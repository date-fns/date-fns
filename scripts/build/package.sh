#!/bin/bash

# The script generates the package in the given directory.
#
# It's addition to the build process. The script is used in examples.
# It also could be used to build date-fns from a git checkout.

set -e

# cd to the root dir
root="$(pwd)/$(dirname "$0")/../.."
cd "$root" || exit 1

PATH="$(npm bin):$PATH"
# XXX: $PACKAGE_OUTPUT_PATH must be an absolute path!
dir=${PACKAGE_OUTPUT_PATH:-"$root/tmp/package"}

# Clean up output dir
rm -rf "$dir"
mkdir -p "$dir"

# Traspile CommonJS versions of files
env BABEL_ENV='commonjs' babel src --source-root src --out-dir "$dir" --extensions .ts,.js --ignore test.js,benchmark.js,snapshot.md --copy-files --quiet

# Traspile ESM versions of files
env BABEL_ENV='esm' babel src --source-root src --out-dir "$dir/esm" --extensions .ts,.js --ignore test.js,benchmark.js,snapshot.md,package.json --copy-files --quiet

# Copy basic files
for pattern in CHANGELOG.md \
  package.json \
  docs \
  LICENSE.md \
  README.md \
  typings.d.ts
do
  cp -r "$pattern" "$dir"
done

# Remove clean up code when this issues is resolved:
# https://github.com/babel/babel/issues/6226

# Clean up dev code
find "$dir" -type f -name "test.js" -delete
find "$dir" -type f -name "benchmark.js" -delete
find "$dir" -type f -name "snapshot.md" -delete

# Clean up package.json pointing to the modules
find "$dir/esm" -type f -name "package.json" -delete

./scripts/build/packages.js
./scripts/build/removeOutdatedLocales.js $dir
