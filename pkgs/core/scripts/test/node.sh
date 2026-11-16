#! /usr/bin/env bash

# This script runs tests against different Node.js versions.

set -e

versions=(
  "22"
  "24"
  "25"
  "26"
)

for version in "${versions[@]}"; do
  printf "\n🚧 Running tests in $version\n"
  cmd="node@${version}"

  mise x "${cmd}" -- pnpm vitest run --project main
  printf "✅ Unit tests OK!\n"

	mise x "${cmd}" -- ./scripts/test/tz.sh
  printf "✅ TZ tests OK!\n"
done

printf "✅ All Node.js tests passed\n"