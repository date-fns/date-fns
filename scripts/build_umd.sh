#!/bin/bash

dir=tmp/umd

rm -rf $dir
mkdir $dir

for pattern in index.js src/*
do
  cp -r $pattern $dir
done

yarn run build
yarn run build-uglify

rm -rf $dir
