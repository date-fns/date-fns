#!/bin/bash

# The script runs the test suite using Jest in different Node.js versions.
#
# It's a part of the test process.

export PATH="$(yarn bin):$PATH"

# Update and source nvm
curl -o ~/.nvm/nvm.sh https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/nvm.sh
source ~/.nvm/nvm.sh

# We test all LTSs (including in the maintenance mode) plus the latest version
# See the releases chart: https://nodejs.org/en/about/releases/
for version in 12 14 16
do
  echo "Running tests using Node.js $version"
  nvm install $version
  npm rebuild
  jest || exit 1
done