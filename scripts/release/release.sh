#!/bin/bash

# The script builds the package and publishes it to npm.
#
# It's the entry point for the release process.

set -e

PACKAGE_PATH="$(pwd)/../../tmp/package"
./scripts/release/writeVersion.js

env PACKAGE_OUTPUT_PATH="$PACKAGE_PATH" ./scripts/build/package.sh

echo "//registry.npmjs.org/:_authToken=$NPM_KEY" > ~/.npmrc
cd "$PACKAGE_PATH" || exit 1
npm publish
cd - || exit

./scripts/release/updateFirebase.js
./scripts/release/tweet.js
