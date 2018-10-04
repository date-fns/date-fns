#!/bin/bash

# The script unifies the build scripts.
#
# It's the entry point for the build process.

set -ex

./scripts/build/docs.js
./scripts/build/fp.js
./scripts/build/typings.js
./scripts/build/indices.js
