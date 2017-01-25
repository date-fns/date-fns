#!/bin/bash

dir="$(pwd)/examples"

ok_message="\n\033[0;32m✓ OK!\033[0m\n"
error_message="\n\033[0;31m✗ Something went wrong!\033[0m\n"

cd "$dir" || exit 1

for example in "browserify" "rollup" "webpack-1.x" "webpack-2.x"
do
  printf "\nTesting $example...\n"
  cd "$example" || exit 1
  yarn
  yarn build
  [[ $(env TZ="UTC" node ./dist/bundle.min.js) == "25.01.2017 21:28:15" ]] || (printf "$error_message" && exit 1) || exit 1
  cd - || exit 1
  printf "$ok_message"
done
