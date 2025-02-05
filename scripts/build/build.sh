#!/bin/bash

# The script unifies the build scripts.
#
# It's the entry point for the build process.

set -ex

npx tsx ./scripts/build/indices.ts
./scripts/build/docs.sh
npx tsx ./scripts/build/fp.ts
