#!/bin/bash

# The script runs size checks to verify the package size.
#
# It's a part of the test process.

echo ""

files=("tmp/package/index.js" "tmp/package/addDays/index.js" "tmp/package/format/index.js" "tmp/package/parse/index.js")

for file in "${files[@]}"
do
  echo -e "\033[1;32m$file\033[0m"
  echo ""
  yarn size-limit "$file"
  echo ""
done