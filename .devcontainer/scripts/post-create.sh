#!/usr/bin/env bash

# This script is run after the container is created.

set -e

# Set up fish shell
sudo chsh -s /usr/bin/fish $(whoami)