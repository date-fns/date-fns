#!/bin/bash

# The script builds the package and publishes it to npm.
#
# It's the entry point for the release process.

set -e

if [ -z "${APP_ENV+x}" ];
then
  echo 'APP_ENV is unset; please set to staging or production'
  exit 1
fi

# A pre-release is a version with a label i.e. v2.0.0-alpha.1
if [[ "$TRAVIS_TAG" =~ ^v[0-9]+\.[0-9]+\.[0-9]+-.+$ ]]
then
  IS_PRE_RELEASE=true
else
  IS_PRE_RELEASE=false
fi

PACKAGE_PATH="$(pwd)/../../tmp/package"
./scripts/release/writeVersion.js

env PACKAGE_OUTPUT_PATH="$PACKAGE_PATH" ./scripts/build/package.sh

echo "//registry.npmjs.org/:_authToken=$NPM_KEY" > ~/.npmrc
cd "$PACKAGE_PATH" || exit 1
if [ "$IS_PRE_RELEASE" = true ]
then
  npm publish --tag next
else
  npm publish
fi
cd - || exit

./scripts/build/docs.js
./scripts/release/updateFirebase.js
if [ "$IS_PRE_RELEASE" = false ]
then
  ./scripts/release/tweet.js
fi
