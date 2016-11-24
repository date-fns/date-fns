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

cp dist/date_fns_docs.json $dir/docs.json
find "$dir" -type f -name "test.js" -delete
cd "$dir" || exit
npm publish
cd - || exit
rm -rf "$dir"
