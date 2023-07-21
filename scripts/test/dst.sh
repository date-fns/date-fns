#!/bin/bash

# The script runs the DST tests.
#
# It's a part of the test process.

set -ex

export NODE_ENV=test

env TZ=America/Sao_Paulo yarn babel-node --extensions .ts,.js ./test/dst/parseISO/basic.js
env TZ=Australia/Sydney yarn babel-node --extensions .ts,.js ./test/dst/parseISO/sydney.js
env TZ=Pacific/Apia yarn babel-node --extensions .ts,.js ./test/dst/parseISO/samoa.js
env TZ=Asia/Damascus yarn babel-node --extensions .ts,.js ./test/dst/eachDayOfInterval/basic.js
env TZ=America/Santiago yarn babel-node --extensions .ts,.js ./test/dst/addBusinessDays/basic.js
env TZ=Australia/Melbourne yarn ts-node ./test/dst/formatDistanceStrict/melbourne.ts
env TZ=Africa/Cairo yarn ts-node ./test/dst/formatDistanceStrict/cairo.ts