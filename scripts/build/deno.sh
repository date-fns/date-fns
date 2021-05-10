#!/bin/bash

# The script builds the Deno package.

rsync --archive --prune-empty-dirs --relative --exclude={'*.flow','benchmark.*','test.*'} src/./ deno
cp {CHANGELOG.md,LICENSE.md,typings.d.ts} deno
yarn ts-node scripts/build/_lib/addDenoExtensions.ts