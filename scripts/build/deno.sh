#!/bin/bash

# The script builds the Deno package.

rsync --archive --prune-empty-dirs --relative --exclude={'*.flow','test.*','snapshot.md'} src/./ deno
cp {CHANGELOG.md,LICENSE.md,typings.d.ts} deno
yarn tsx scripts/build/_lib/addDenoExtensions.ts