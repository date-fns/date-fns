#!/bin/bash

# The script pulls the latest changes from the remote repository along with
# git submodules.
#
# It's part of the maintain process.

set -e

git submodule update --recursive --init --remote