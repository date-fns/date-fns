#!/bin/bash

dir=tmp/npm

rm -rf $dir
mkdir $dir

for pattern in CHANGELOG.md \
  LICENSE.md \
  README.md \
  index.js \
  package.json \
  index.d.ts \
  src/*
do
  cp -r "$pattern" "$dir"
done

rm -rf "$dir/is_so_last_week"

cp dist/date_fns_docs.json $dir/docs.json
find "$dir" -type f -name "test.js" -delete
find "$dir" -type f -name "benchmark.js" -delete
cd "$dir" || exit
npm publish
cd - || exit
rm -rf "$dir"
