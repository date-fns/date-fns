#!/bin/bash

# cd to the root dir
root="$(pwd)/$(dirname "$0")/.."
cd "$root" || exit 1

PATH="$(npm bin):$PATH"
# XXX: $PACKAGE_OUTPUT_PATH must be absolute path!
dir=${PACKAGE_OUTPUT_PATH:-"$root/tmp/package"}

# Clean up output dir
rm -rf "$dir"
mkdir -p "$dir"

# Copy basic files
for pattern in CHANGELOG.md \
  package.json \
  docs/* \
  LICENSE.md \
  README.md \
  typings.d.ts
do
  cp -r "$pattern" "$dir"
done

# Prepare ES5-compatible files

# Compile ES files on top of the already copied files leaving
# all non *.js files in place as expected
babel src --source-root src --out-dir "$dir" --ignore test.js,benchmark.js --copy-files --quiet

# Compile index
babel index.js --out-file "$dir/index.js"

# Copy ES (a.k.a. ES6, ES2016, ES2017, etc.) files

# Copy the source code
cp -r ./src "$dir/es"

# Copy index.js
cp ./index.js "$dir/es"

# Copy docs
cp dist/date_fns_docs.json "$dir/docs.json"

# Clean up dev code
find "$dir" -type f -name "test.js" -delete
find "$dir" -type f -name "benchmark.js" -delete

## Copy TypeScript's sub_module_package.json
#for module in $dir/*/
#do
  #module=${module%*/}
  #cp scripts/sub_module_package.json "$module/package.json"
#done
