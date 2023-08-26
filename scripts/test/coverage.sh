#!/bin/bash

# The script generates coverage report and uploads it to Coveralls.
#
# It's a part of the test process

set -ex

env yarn vitest run --coverage
# TODO?!
# cat ./coverage/lcov.info | yarn coveralls
