#!/bin/bash

# The script unifies the build scripts.
#
# It's the entry point for the build process.

set -ex

node ./scripts/build/indices.ts
./scripts/build/docs.sh
node ./scripts/build/fp.ts
