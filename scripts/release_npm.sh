#!/bin/bash

dir="$(pwd)/tmp/npm"
env PACKAGE_OUTPUT_PATH="$dir" ./build_package.sh

cd "$dir" || exit 1
npm publish
cd - || exit
