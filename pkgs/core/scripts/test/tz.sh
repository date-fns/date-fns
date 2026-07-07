#!/bin/bash

# The script runs the time zone tests.
#
# It's a part of the test process.

set -ex

export NODE_ENV=test

echo "Running DST tests"
env TZ=America/Sao_Paulo node ./test/dst/parseISO/basic.ts
env TZ=Australia/Sydney node ./test/dst/parseISO/sydney.ts
env TZ=Pacific/Apia node ./test/dst/parseISO/samoa.ts
env TZ=Asia/Damascus node ./test/dst/eachDayOfInterval/basic.ts
env TZ=America/Santiago node ./test/dst/addBusinessDays/basic.ts
env TZ=Australia/Melbourne node ./test/dst/formatDistanceStrict/melbourne.ts
env TZ=Africa/Cairo node ./test/dst/formatDistanceStrict/cairo.ts
env TZ=Asia/Singapore node ./test/dst/getOverlappingDaysInIntervals/basic.ts
env TZ=Asia/Chita node ./test/dst/getOverlappingDaysInIntervals/basic.ts
echo "✅ DST tests passed"

echo "Running formatISO tests"
env TZ=Asia/Kolkata node ./test/formatISO/india.ts
echo "✅ formatISO tests passed"

echo "Running formatRFC3339 tests"
env TZ=Asia/Kolkata node ./test/formatRFC3339/india.ts
env TZ=America/St_Johns node ./test/formatRFC3339/newfoundland.ts
env TZ=Australia/Eucla node ./test/formatRFC3339/australia.ts
env TZ=Pacific/Chatham node ./test/formatRFC3339/newzealand.ts
env TZ=Europe/Warsaw node ./test/formatRFC3339/poland.ts
echo "✅ formatRFC3339 tests passed"