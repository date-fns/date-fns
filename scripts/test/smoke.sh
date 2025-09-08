#!/bin/bash

# The script runs the smoke test against every supported builder configuration.
#
# It's a part of the test process.

dir="$(pwd)/examples"

ok_message="\n\033[0;32m✓ OK!\033[0m\n"
error_message="\n\033[0;31m✗ Something went wrong!\033[0m\n"

scripts/build/package.sh

cd "$dir" || exit 1
pnpm install

for example in `ls`
do
  if [ ! -f "$example/package.json" ]; then
    continue
  fi
  printf "\n\033[0;32mTesting $example...\033[0m\n\n"
  cd "$example" || exit 1
  pnpm run build
  pnpm test || (printf "$error_message" && exit 1) || exit 1
  cd - || exit 1
  printf "$ok_message"
done
