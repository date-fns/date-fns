#!/bin/bash

# The script runs the DST tests.
#
# It's a part of the test process.

set -ex

export PATH="$(yarn bin):$PATH"

env TZ=America/Sao_Paulo babel-node ./test/dst/parseISO/basic.js
env TZ=Pacific/Apia babel-node ./test/dst/parseISO/samoa.js
env TZ=Asia/Damascus babel-node ./test/dst/eachDayOfInterval/basic.js
