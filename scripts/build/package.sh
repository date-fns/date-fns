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

# Prepare ES5-compatible files

# Compile ES files on top of the already copied files leaving
# all non *.js files in place as expected
babel src --source-root src --out-dir "$dir" --ignore test.js,benchmark.js --copy-files --quiet

# Copy ES (a.k.a. ES6, ES2016, ES2017, etc.) files

# Copy the source code
for fnDir in $(find src -type d -maxdepth 1 -mindepth 1 | sed 's/src\///' | sed 's/\///')
do
  if [ "$fnDir" == "esm" ]
  then
    continue
  fi

  cp -r "./src/$fnDir" "$dir/esm/"
done

# Copy global flow typing
cp ./src/index.js.flow "$dir/esm/index.js.flow"

# Copy esm indices
cp ./src/esm/index.js "$dir/esm/index.js"
cp ./src/esm/fp/index.js "$dir/esm/fp/index.js"
cp ./src/esm/locale/index.js "$dir/esm/locale/index.js"

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

# Clean up dev code
find "$dir" -type f -name "test.js" -delete
find "$dir" -type f -name "benchmark.js" -delete

# Clean up package.json pointing to the modules
find "$dir/esm" -type f -name "package.json" -delete

./scripts/build/packages.js