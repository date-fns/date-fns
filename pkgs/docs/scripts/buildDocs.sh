#!/usr/bin/env bash

set -e
shopt -s globstar extglob nullglob
cd "$(dirname "$0")/.."

echo "⚡️ Generating docs JSON"

#region Prepare

if [[ -z "${DATE_FNS_DIR:-}" ]]; then
  echo
  echo "🔴 DATE_FNS_DIR is unset"
  exit 1
fi

if [[ ! -d "$DATE_FNS_DIR" ]]; then
  echo
  echo "🔴 DATE_FNS_DIR is not a directory"
  exit 1
fi

#endregion

#region JSON generation

echo
echo "🚧 Generating JSON with \`deno doc\`"

mkdir -p tmp
# Build the file list, excluding any _lib directories and files named test.ts
mapfile -d '' ts_files < <(find "$DATE_FNS_DIR/src" \
  -type d -name _lib -prune -o \
  -type f -name '*.ts' -not -name 'test.ts' -print0)
deno doc --json "${ts_files[@]}" > tmp/docs.json

echo "🟢 JSON generated!"

#endregion

#region Type checking

echo
echo "🚧 Type checking generated docs"

# Generate docs.ts
{
  cat <<'TS'
import type { DocNode } from "@deno/doc";

interface Docs {
  version: 1;
  nodes: DocNode[];
}

export const docs : Docs =
TS
  cat tmp/docs.json
  echo ";"
} > tmp/docs.ts

# Format the docs source code
deno fmt tmp/docs.ts 2> /dev/null

# Type check docs
pnpm tsc --noEmit --skipLibCheck --module NodeNext --moduleResolution NodeNext tmp/docs.ts

echo "🟢 Types are fine!"

#endregion

echo
echo "⭐️ Docs JSON generated!"
