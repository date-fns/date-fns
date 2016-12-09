#!/bin/bash

dir=tmp/npm

rm -rf $dir
mkdir $dir

for pattern in CHANGELOG.md \
  LICENSE.md \
  README.md \
  index.js \
  package.json \
  typings.d.ts \
  src/*
do
  cp -r "$pattern" "$dir"
done

for module in $dir/*/
do
  module=${module%*/}
  cp scripts/sub_module_package.json "$module/package.json"
done

cp dist/date_fns_docs.json $dir/docs.json
find "$dir" -type f -name "test.js" -delete
find "$dir" -type f -name "benchmark.js" -delete
cd "$dir" || exit
npm publish
cd - || exit
rm -rf "$dir"
