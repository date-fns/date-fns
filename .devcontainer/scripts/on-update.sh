#!/usr/bin/env bash

# This script is when the container is updated.

set -e

# Pull git submodules
if [ -d .git ]; then
  git submodule update --recursive --init --remote
fi

# Trust all mise configs
mise trust --yes --all
if [ -d .git ]; then
  git submodule foreach --recursive "mise trust"
fi

# Update mise
mise self-update -y

# Install stack
mise install

# Install dependencies
if [ -f ./pnpm-lock.yaml ]; then
  yes | pnpm install
elif [ -f ./yarn.lock ]; then
  yes | yarn install
elif [ -f ./package-lock.json ]; then
  yes | npm install
fi
