#!/bin/bash

# The script generates the package in the given directory.
#
# It's addition to the build process. The script is used in examples.
# It also could be used to build date-fns from a git checkout.

set -e

echo "⚡️ Building package"

#region Prepare

# cd to the root dir
root="$(pwd)/$(dirname "$0")/../.."
cd "$root" || exit 1

# XXX: $PACKAGE_OUTPUT_PATH must be an absolute path!
dir=${PACKAGE_OUTPUT_PATH:-"$root/lib"}
export PACKAGE_OUTPUT_PATH="$dir"

# Clean up output dir
rm -rf "$dir"
mkdir -p "$dir"

#endregion

#region ESM

echo
echo "🚧 Building ESM code..."

# Transpile ESM versions of files
env BABEL_ENV=esm pnpm babel src \
  --config-file ./babel.config.json \
  --source-root src \
  --out-dir "$dir" \
  --extensions .js,.ts \
  --out-file-extension .js \
  --quiet


# Add fallback for Next.js and other tools that modularize imports:
pnpm tsx scripts/build/modularized.ts

echo "🟢 ESM code is ready!"

#endregion

#region CommonJS

echo
echo "🚧 Building CommonJS code..."

# Transpile CommonJS versions of files
env BABEL_ENV=cjs pnpm babel src \
  --config-file ./babel.config.json \
  --source-root src \
  --out-dir "$dir" \
  --extensions .js,.ts \
  --out-file-extension .cjs \
  --quiet

echo "🟢 CommonJS code is ready!"

#endregion

#region TypeScript

echo
echo "🚧 Building TypeScript definitions..."

# Generate TypeScript
pnpm tsc --project tsconfig.lib.json --outDir "$dir"

echo "🟢 TypeScript definitions are ready!"

#endregion

#region Beautification

echo
echo "🚧 Formatting code..."

# Make it prettier
if [ -z "$PACKAGE_SKIP_BEAUTIFY" ]; then
  pnpm prettier --write --ignore-path "" "$dir" 1> /dev/null
fi

echo "🟢 Formatting is complete!"

#endregion

#region Flattening

if [ -n "$TEST_FLATTEN" ]; then
  exit 0
fi

echo
echo "🚧 Flattening the modules..."

# Flatten the structure
pnpm tsx scripts/build/flatten.ts

echo "🟢 Flattening is complete!"

#endregion

#region CommonJS types

echo
echo "🚧 Building CommonJS type definitions..."

# Generate .d.cts files
pnpm tsx scripts/build/cts.ts

echo "🟢 CommonJS type definitions are ready!"

#endregion

#region Files

echo
echo "🚧 Copying misc files..."

# Copy basic files
for pattern in CHANGELOG.md \
  package.json \
  docs \
  LICENSE.md \
  README.md \
  SECURITY.md
do
  cp -r "$pattern" "$dir"
done

echo "🟢 Misc files are ready!"

#endregion

#region CDN

echo

# Build CDN versions
if [ -z "$PACKAGE_SKIP_CDN" ]; then
  echo "🚧 Building CDN versions..."

  bun ./scripts/build/cdn.ts

  echo "🟢 CDN versions are ready!"
else
  echo "⚪️ PACKAGE_SKIP_CDN is set, CDN versions are skipped"
fi

#endregion

echo -e "\n⭐️ Build complete!"