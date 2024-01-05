#!/bin/bash

# The script runs "Are the types wrong?" test.
#
# It's a part of the test process.

set -e

# cd to the root dir
root="$(pwd)/$(dirname "$0")/../.."
export PACKAGE_OUTPUT_PATH="$root/tmp/types"

export PACKAGE_SKIP_BEAUTIFY=true

./scripts/build/package.sh

if ! command -v attw >/dev/null 2>&1; then
    npm i -g @arethetypeswrong/cli
fi

attw --pack "$PACKAGE_OUTPUT_PATH"
