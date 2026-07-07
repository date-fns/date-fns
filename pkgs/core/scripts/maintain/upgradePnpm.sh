#!/bin/bash

# The script upgrades pnpm in the root and each of the submodules.
#
# It's part of the maintain process.

set -e

echo "⚡️ Upgrading pnpm"

#region Functions & consts

assert_clean() {
  local dir=$1
  # Assert clean git
  if [ -n "$(git status --porcelain | grep -v '^?? scripts/maintain/upgradePnpm.sh$' | grep -v '^.[M?] submodules/')" ]; then
    echo "🔴 Git is not clean at $dir. Please commit or stash your changes first."
    exit 1
  fi
}

upgrade() {
  local dir=$1
  echo -e "\n🚧 Upgrading pnpm at $dir..."

  # Upgrade
  corepack use pnpm@latest 1> /dev/null || {
    echo -e "🛑 Failed to upgrade pnpm at $dir"
    exit 1
  }

  # Add files
  git add package.json 2>/dev/null || true
  git add pnpm-lock.yaml 2>/dev/null || true
  git add submodules 2>/dev/null || true

  # Check if there are any staged changes
  if [ -n "$(git diff --cached --name-only)" ]; then
    git commit -m "Upgrade pnpm to the latest version" 1> /dev/null || {
      echo -e "🛑 Failed to commit changes at $dir"
      exit 1
    }

    echo "🟢 Upgraded pnpm at $dir"
  else
    echo "⚪️ Already up-to-date at $dir"
  fi
}

# Get all submodules
submodules=$(git submodule foreach --quiet 'echo $path')

#endregion

#region Assert clean git

echo -e "\n🚧 Checking git status in all repositories..."

# Check root
assert_clean "root"

# Check each submodule
for submodule in $submodules; do
  cd "$submodule"
  assert_clean "$submodule"
  cd - > /dev/null
done

echo "🟢 All repositories are clean."

#endregion

#region Upgrade pnpm

# Upgrade each submodule
for submodule in $submodules; do
  cd "$submodule"
  upgrade "$submodule"
  cd - > /dev/null
done

# Upgrade root
upgrade "root"

#endregion

echo -e "\n⭐️ Upgrade complete!"