#!/bin/bash

if [ "$1" == "" ]
then
  echo 'Version number must be passed as an argument'
  exit 1
fi

echo $1 > VERSION

npm run sync-versions
npm run generate-index
npm run build-umd
npm run build-docs

git add .
git commit -m "Prepare release v$1"
git tag -a v$1 -m "Release v$1"
git push
git push --tags

npm run release-npm
