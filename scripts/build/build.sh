#!/bin/bash

# The script unifies the build scripts.
#
# It's the entry point for the build process.

set -ex

pnpm tsx ./scripts/build/indices.ts
./scripts/build/docs.sh
pnpm tsx ./scripts/build/fp.ts
