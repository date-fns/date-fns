#!/usr/bin/env bash

# This script is run when the container is created.

set -e

# Trust mise setup first
mise trust

eval "$(mise activate bash --shims)"

# Install just completions
just --completions fish > ~/.config/fish/completions/just.fish