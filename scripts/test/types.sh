#!/bin/bash

# The script runs "Are the types wrong?" test.
#
# It's a part of the test process.

set -e

# cd to the root dir
root="$(pwd)/$(dirname "$0")/../.."
export PACKAGE_OUTPUT_PATH=$(realpath "$root/tmp/types")

export PACKAGE_SKIP_BEAUTIFY=true
export PACKAGE_SKIP_CDN=true

./scripts/build/package.sh

echo "$PACKAGE_OUTPUT_PATH"
npx attw --pack "$PACKAGE_OUTPUT_PATH"
