#!/bin/bash

# The script builds the package and publishes it to npm.
#
# It's the entry point for the release process.

set -e

# A pre-release is a version with a label i.e. v2.0.0-alpha.1
if [[ "$VERSION" =~ ^v[0-9]+\.[0-9]+\.[0-9]+-.+$ ]]
then
  IS_PRE_RELEASE=true
else
  IS_PRE_RELEASE=false
fi

# Write version & commit package.json
./scripts/release/writeVersion.js
git add package.json
git commit -m "Prepare $VERSION"
git tag -a "$VERSION" -m "$VERSION"
git push

# Build the package
PACKAGE_PATH="$(pwd)/../../tmp/package"
env PACKAGE_OUTPUT_PATH="$PACKAGE_PATH" ./scripts/build/package.sh

# Right now, we do releases manually, but when we move to GitHub Actions we'll need this line:
# echo "//registry.npmjs.org/:_authToken=$NPM_KEY" > ~/.npmrc
cd "$PACKAGE_PATH" || exit 1
if [ "$IS_PRE_RELEASE" = true ]
then
  npm publish --tag next
else
  npm publish
fi
cd - || exit

# Build & deploy docs JSON
env APP_ENV=production ./scripts/release/docs.sh

# TODO: Reanimate it
# if [ "$IS_PRE_RELEASE" = false ]
# then
#   ./scripts/release/tweet.js
# fi
