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

# Copy es/index.js
cp ./src/es/index.js "$dir/es"

# Copy the source code
for fnDir in `ls -d ./src/*/ | sed 's/\.\/src\///' | sed 's/\///'`
do
  if [ "$fnDir" == "es" ]
  then
    continue
  fi

  cp -r "./src/$fnDir" "$dir/es/$fnDir"
done

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
  cp scripts/sub_module_package.json "$module/package.json"
done

# Copy TypeScript's sub_sub_module_package.json to locale directories
for locale in $dir/locale/*/
do
  locale=${locale%*/}
  cp scripts/sub_sub_module_package.json "$locale/package.json"
done

# Copy TypeScript's sub_sub_module_package.json to es directories
for esModule in $dir/es/*/
do
  esModule=${esModule%*/}
  cp scripts/sub_sub_module_package.json "$esModule/package.json"
done

# Copy TypeScript's sub_sub_sub_module_package.json to es locale directories
for esLocale in $dir/es/locale/*/
do
  esLocale=${esLocale%*/}
  cp scripts/sub_sub_sub_module_package.json "$esLocale/package.json"
done
