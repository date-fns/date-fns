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

#
# This will compile all ES6 files on top of the already copied files leaving
# all non *.js files in place as expected
#
(cd src && $(npm bin)/babel --out-dir ../$dir **/*.js)

#
# Copy ES6 files into the ./src folder so that one could call
#
#   import foo from 'date-fns/es6/foo';
#
cp -r ./src $dir/es6

cp dist/date_fns_docs.json $dir/docs.json
find "$dir" -type f -name "test.js" -delete
find "$dir" -type f -name "benchmark.js" -delete
cd "$dir" || exit
npm publish
cd - || exit
rm -rf "$dir"
