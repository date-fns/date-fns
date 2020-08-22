#!/bin/bash

# The script runs formatISO and formatRFC3339 in a non%60 timezone offset
#
# It's a part of the test process.

set -ex

export PATH="$(yarn bin):$PATH"
export NODE_ENV=test

env TZ=Asia/Kolkata babel-node ./test/formatISO/india.js
env TZ=Asia/Kolkata babel-node ./test/formatRFC3339/india.js
