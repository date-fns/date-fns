#!/bin/bash

# The script runs "Are the types wrong?" test.
#
# It's a part of the test process.

echo "🟠 These tests are deprecated as attw hangs on date-fns and will be removed in the future. If needed, add a smoke test to \`pkgs/core/examples\`".
exit 0

set -e


root="$(pwd)/$(dirname "$0")/../.."
root_rel_path="$root/tmp/types"
mkdir -p "$root_rel_path"
package_output_path=$(realpath "$root_rel_path")

./scripts/build/package.sh --dist "$package_output_path" --no-format --no-cdn

echo "$package_output_path"
pnpm attw --pack "$package_output_path"
