#!/bin/bash

# The script builds the docs.

set -ex

pnpm exec typedoc --tsconfig tsconfig.dist.json
