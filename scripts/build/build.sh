#!/bin/bash

# The script unifies the build scripts.
#
# It's the entry point for the build process.

set -ex

yarn tsx ./scripts/build/indices.ts
./scripts/build/docs.sh
yarn tsx ./scripts/build/fp.ts
