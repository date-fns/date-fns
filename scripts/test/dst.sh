#!/bin/bash

# The script runs the DST tests.
#
# It's a part of the test process.

set -ex

export NODE_ENV=test

env TZ=America/Sao_Paulo yarn tsx ./test/dst/parseISO/basic.ts
env TZ=Australia/Sydney yarn tsx ./test/dst/parseISO/sydney.ts
env TZ=Pacific/Apia yarn tsx ./test/dst/parseISO/samoa.ts
env TZ=Asia/Damascus yarn tsx ./test/dst/eachDayOfInterval/basic.ts
env TZ=America/Santiago yarn tsx ./test/dst/addBusinessDays/basic.ts
env TZ=Australia/Melbourne tsx ./test/dst/formatDistanceStrict/melbourne.ts
env TZ=Africa/Cairo tsx ./test/dst/formatDistanceStrict/cairo.ts