#!/bin/bash

# The script builds the Deno package.

rsync --archive --prune-empty-dirs --relative --exclude={'*.flow','test.*','snapshot.md','*.d.ts'} src/./ deno
cp {CHANGELOG.md,LICENSE.md} deno
yarn ts-node scripts/build/_lib/addDenoExtensions.ts