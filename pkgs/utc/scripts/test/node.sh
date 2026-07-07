#! /usr/bin/env bash

# This script runs tests against different Node.js versions.

set -e

# First, make sure the library is built
make build

# Apply publishConfig to package.json
jaq -i '. + .publishConfig' ./dist/package.json

versions_array=(
  "20"
  "22"
  "23"
  "24"
  "25"
  "26"
)

for version in "${versions_array[@]}"; do
  printf "\n🚧 Running tests in $version\n"
  cmd="node@${version}"

  mise x "${cmd}" -- node --eval 'require("./dist")'
  printf "✅ Package CommonJS is ok!\n"

  mise x "${cmd}" -- node scripts/test/node/esm.js
  printf "✅ Package ESM is ok!\n"

  TZ=Asia/Kolkata mise x "${cmd}" -- pnpm vitest run
done

printf "✅ All Node.js tests passed\n"