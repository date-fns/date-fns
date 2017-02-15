#!/bin/bash

# cd to the root dir
root="$(pwd)/$(dirname "$0")/.."
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
for fnDir in `ls -d ./src/*/ | sed 's/\.\/src\///' | sed 's/\///'`
do
  if [ "$fnDir" == "esm" ]
  then
    continue
  fi

  cp -r "./src/$fnDir" "$dir/esm/"
done

# Copy esm/index.js and esm/fp/index.js
cp ./src/esm/index.js "$dir/esm/index.js"
cp ./src/esm/fp/index.js "$dir/esm/fp/index.js"

# Copy docs
cp dist/date_fns_docs.json "$dir/docs.json"

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
  cp scripts/subModulePackage.json "$module/package.json"
done

# Copy TypeScript's sub_sub_module_package.json to locale directories
for locale in $dir/locale/*/
do
  locale=${locale%*/}
  cp scripts/subSubModulePackage.json "$locale/package.json"
done

# Copy TypeScript's sub_sub_module_package.json to es directories
for esmModule in $dir/esm/*/
do
  esmModule=${esmModule%*/}
  cp scripts/subSubModulePackage.json "$esmModule/package.json"
done

# Copy TypeScript's sub_sub_sub_module_package.json to es locale directories
for esmLocale in $dir/esm/locale/*/
do
  esmLocale=${esmLocale%*/}
  cp scripts/subSubSubModulePackage.json "$esmLocale/package.json"
done

# Copy TypeScript's sub_sub_sub_module_package.json to fp locale directories
for esmFpModule in $dir/esm/fp/*/
do
  esmFpModule=${esmFpModule%*/}
  cp scripts/sub_sub_sub_module_package.json "$esmFpModule/package.json"
done
