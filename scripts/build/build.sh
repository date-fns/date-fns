#!/bin/bash

# The script unifies the build scripts.
#
# It's the entry point for the build process.

set -ex

./scripts/build/docs.ts
./scripts/build/fp.ts
./scripts/build/typings.js
./scripts/build/indices.ts
