#!/bin/bash

# The script generates coverage report and uploads it to Coveralls.
#
# It's a part of the test process

set -ex

export PATH="$(yarn bin):$PATH"

env COVERAGE_REPORT=true yarn test --single-run
cat ./coverage/lcov.info | coveralls
