#!/bin/bash

dir=tmp/npm

rm -rf $dir
mkdir $dir

for pattern in CHANGELOG.md \
  LICENSE.md \
  README.md \
  index.js \
  package.json \
  src/*
do
  cp -r $pattern $dir
done

cp dist/date_fns_docs.json $dir/docs.json
rm $dir/**/test.js
cd $dir
npm publish
cd -
rm -rf $dir
