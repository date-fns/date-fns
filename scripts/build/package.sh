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

# Copy TypeScript's sub_module_package.json to root directories
for module in $dir/*/
do
  module=${module%*/}
  cp scripts/build/templates/subModulePackage.json "$module/package.json"
done

# Copy TypeScript's sub_sub_module_package.json to locale directories
for locale in $dir/locale/*/
do
  locale=${locale%*/}
  cp scripts/build/templates/subSubModulePackage.json "$locale/package.json"
done

# Copy TypeScript's sub_sub_module_package.json to es directories
for esmModule in $dir/esm/*/
do
  esmModule=${esmModule%*/}
  cp scripts/build/templates/subSubModulePackage.json "$esmModule/package.json"
done

# Copy TypeScript's sub_sub_sub_module_package.json to es locale directories
for esmLocale in $dir/esm/locale/*/
do
  esmLocale=${esmLocale%*/}
  cp scripts/build/templates/subSubSubModulePackage.json "$esmLocale/package.json"
done

# Copy TypeScript's sub_sub_sub_module_package.json to fp locale directories
for esmFPModule in $dir/esm/fp/*/
do
  esmFPModule=${esmFPModule%*/}
  cp scripts/build/templates/subSubSubModulePackage.json "$esmFPModule/package.json"
done
