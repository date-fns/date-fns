#!/bin/bash

# The script runs the smoke test against every supported builder configuration.
#
# It's a part of the test process.

dir="$(pwd)/examples"

ok_message="\n\033[0;32m✓ OK!\033[0m\n"
error_message="\n\033[0;31m✗ Something went wrong!\033[0m\n"

cd "$dir" || exit 1

for example in `ls`
do
  printf "\n\033[0;32mTesting $example...\033[0m\n\n"
  cd "$example" || exit 1
  yarn
  yarn build
  yarn test || (printf "$error_message" && exit 1) || exit 1
  cd - || exit 1
  printf "$ok_message"
done
