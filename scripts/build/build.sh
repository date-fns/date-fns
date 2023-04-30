#!/bin/bash

# The script unifies the build scripts.
#
# It's the entry point for the build process.

set -ex

./scripts/build/docs.js
./scripts/build/fp.ts
yarn ts-node ./scripts/build/typings.js
yarn ts-node ./scripts/build/indices.ts
