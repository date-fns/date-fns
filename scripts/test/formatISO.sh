#!/bin/bash

# The script runs formatISO in a non%60 timezone offset
#
# It's a part of the test process.

set -ex

export PATH="$(yarn bin):$PATH"
export NODE_ENV=test

env TZ=Asia/Kolkata babel-node --extensions .ts,.js ./test/formatISO/india.js
