#!/bin/bash

# The script runs the DST tests.
#
# It's a part of the test process.

set -ex

export PATH="$(yarn bin):$PATH"
export NODE_ENV=test

env TZ=America/Sao_Paulo babel-node --extensions .ts,.js ./test/dst/parseISO/basic.js
env TZ=Australia/Sydney babel-node --extensions .ts,.js ./test/dst/parseISO/sydney.js
env TZ=Pacific/Apia babel-node --extensions .ts,.js ./test/dst/parseISO/samoa.js
env TZ=Asia/Damascus babel-node --extensions .ts,.js ./test/dst/eachDayOfInterval/basic.js
env TZ=America/Santiago babel-node --extensions .ts,.js ./test/dst/addBusinessDays/basic.js
env TZ=Australia/Melbourne ts-node ./test/dst/formatDistanceStrict/melbourne.ts
env TZ=Africa/Cairo ts-node ./test/dst/formatDistanceStrict/cairo.ts