#!/bin/bash

# The script generates the package in the given directory.
#
# It's addition to the build process. The script is used in examples.
# It also could be used to build date-fns from a git checkout.

set -e

build_cjs=true
build_cdn=true
include_docs=true
include_fp=true
include_i18n=true
split_cdn=false

while [ "$#" -gt 0 ]; do
	case "$1" in
	--split-cdn)
		split_cdn=true
		shift
		;;
	--no-cjs)
		build_cjs=false
		shift
		;;
	--no-cdn)
		build_cdn=false
		shift
		;;
	--no-docs)
		include_docs=false
		shift
		;;
	--no-fp)
		include_fp=false
		shift
		;;
	--no-i18n)
		include_i18n=false
		shift
		;;
	*)
		echo "Unknown argument: $1"
		exit 1
		;;
	esac
done

echo "⚡️ Building package"

#region Prepare

# cd to the root dir
root="$(dirname "$0")/../.."
cd "$root" || exit 1

dist="dist"
main_dir="$dist/date-fns"
cdn_dir="$dist/date-fns-cdn"

# Clean up dir
rm -rf "$dist"

# NOTE: Needed for `scripts/build/cdn.ts`.
# TODO: Replace with an argument or a flag.
export DATE_FNS_PACKAGE_OUTPUT_PATH="$main_dir"

#endregion

#region ESM

echo
echo "🚧 Building ESM code..."

# Transpile ESM versions of files
pnpm exec date-fns-build-package src "$main_dir" esm

# Add fallback for Next.js and other tools that modularize imports:
node scripts/build/modularized.ts "$main_dir"

echo "🟢 ESM code is ready!"

#endregion

#region CommonJS

if [ "$build_cjs" = true ]; then
	echo
	echo "🚧 Building CommonJS code..."

	# Transpile CommonJS versions of files
	pnpm exec date-fns-build-package src "$main_dir" cjs

	echo "🟢 CommonJS code is ready!"
else
	echo
	echo "⚪️ --no-cjs is set, CommonJS code is skipped"
fi

#endregion

#region TypeScript

echo
echo "🚧 Building TypeScript definitions..."

# Generate TypeScript
pnpm tsgo --project tsconfig.dist.json --outDir "$main_dir"

echo "🟢 TypeScript definitions are ready!"

#endregion

#region Flattening

echo
echo "🚧 Flattening the modules..."

# Flatten the structure
node scripts/build/flatten.ts "$main_dir"

echo "🟢 Flattening is complete!"

#endregion

#region CommonJS types

if [ "$build_cjs" = true ]; then
	echo
	echo "🚧 Building CommonJS type definitions..."

	# Generate .d.cts files
	node scripts/build/cts.ts "$main_dir"

	echo "🟢 CommonJS type definitions are ready!"
else
	echo
	echo "⚪️ --no-cjs is set, CommonJS type definitions are skipped"
fi

#endregion

#region Files

echo
echo "🚧 Copying misc files..."

# Copy basic files
for pattern in CHANGELOG.md \
	package.json \
	docs \
	LICENSE.md \
	../../README.md \
	../../SECURITY.md; do
	cp -r "$pattern" "$main_dir"
done

echo "🟢 Misc files are ready!"

echo
echo "🚧 Cleaning up package.json..."

package_json_path="$main_dir/package.json"
jaq -i '. + .publishConfig' "$package_json_path"
jaq -i 'del(.devDependencies, .scripts, .publishConfig)' "$package_json_path"

echo "🟢 package.json is ready!"

#endregion

#region CDN

echo

# Build CDN versions
if [ "$build_cdn" = true ]; then
	echo "🚧 Building CDN versions..."

	DATE_FNS_CDN_OUTPUT_PATH="$cdn_dir" \
		DATE_FNS_CDN_PACKAGE=true \
		DATE_FNS_CDN_SOURCE_MAPS=true \
		DATE_FNS_CDN_WARN=false \
		node ./scripts/build/cdn.ts

	if [ "$split_cdn" = true ]; then
		node ./scripts/build/cdnPolyfills.ts "$main_dir"
	else
		DATE_FNS_CDN_OUTPUT_PATH="$main_dir" \
			DATE_FNS_CDN_PACKAGE=false \
			DATE_FNS_CDN_SOURCE_MAPS=false \
			DATE_FNS_CDN_WARN=true \
			node ./scripts/build/cdn.ts
	fi

	echo "🟢 CDN versions are ready!"
else
	echo "⚪️ --no-cdn is set, CDN versions are skipped"
fi

#endregion

#region Cleanup

if [ "$include_docs" = false ]; then
	echo
	echo "🚧 Removing docs files..."

	rm -rf "$main_dir/docs" \
		"$main_dir/CHANGELOG.md" \
		"$main_dir/SECURITY.md" \
		"$main_dir/LICENSE.md"

	echo "🟢 Docs files are removed!"
fi

if [ "$include_fp" = false ]; then
	echo
	echo "🚧 Removing FP files..."

	rm -rf "$main_dir"/fp*

	echo "🟢 FP files are removed!"
fi

if [ "$include_i18n" = false ]; then
	echo
	echo "🚧 Removing I18n files..."

	rm -rf "$main_dir"/locale* \
		"$main_dir"/format.* \
		"$main_dir"/formatDistance* \
		"$main_dir"/formatDuration* \
		"$main_dir"/formatRelative* \
		"$main_dir"/parse.*

	echo "🟢 I18n files are removed!"
fi

#endregion

#region Manifest

# For using as outputs cache
echo "build_cjs=$build_cjs
build_cdn=$build_cdn
format_code=$format_code
include_docs=$include_docs
include_fp=$include_fp
include_i18n=$include_i18n
split_cdn=$split_cdn" >"$dist/build-dist-config.txt"

#endregion

echo -e "\n⭐️ Build complete!"
