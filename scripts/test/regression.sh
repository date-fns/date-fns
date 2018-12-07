#!/bin/bash

# The script runs the regression tests.
#
# It's a part of the test process.

set -ex

export PATH="$(yarn bin):$PATH"

env TZ=America/Sao_Paulo babel-node ./test/regression/972.js