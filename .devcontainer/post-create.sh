#!/usr/bin/env bash

set -eo pipefail

# when in a VS Code or GitHub Codespaces devcontainer
if [ -n "${REMOTE_CONTAINERS}" ]; then
	this_dir=$(cd -P -- "$(dirname -- "$(command -v -- "$0")")" && pwd -P)
	workspace_root=$(realpath ${this_dir}/..)

	# perform additional one-time setup just after
	# the devcontainer is created
	yarn install --cwd "${workspace_root}" # install node dependencies
	npx playwright install                 # install playwright browsers

fi
