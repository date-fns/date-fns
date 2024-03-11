#!/bin/bash

# The script builds the docs and releases them
#
# It's part of the release process.

set -e

if [ -z "${APP_ENV+x}" ];
then
  echo 'APP_ENV is unset; please set to staging or production'
  exit 1
fi

# Build & deploy docs JSON
./scripts/build/docs.sh
env GOOGLE_APPLICATION_CREDENTIALS="secrets/$APP_ENV/key.json" npx date-fns-docs docs/config.js
