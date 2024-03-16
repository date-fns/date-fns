#!/bin/bash

# The script runs the time zone tests.
#
# It's a part of the test process.

set -ex

export NODE_ENV=test

echo "Running DST tests"
env TZ=America/Sao_Paulo npx tsx ./test/dst/parseISO/basic.ts
env TZ=Australia/Sydney npx tsx ./test/dst/parseISO/sydney.ts
env TZ=Pacific/Apia npx tsx ./test/dst/parseISO/samoa.ts
env TZ=Asia/Damascus npx tsx ./test/dst/eachDayOfInterval/basic.ts
env TZ=America/Santiago npx tsx ./test/dst/addBusinessDays/basic.ts
env TZ=Australia/Melbourne npx tsx ./test/dst/formatDistanceStrict/melbourne.ts
env TZ=Africa/Cairo npx tsx ./test/dst/formatDistanceStrict/cairo.ts
env TZ=Asia/Singapore npx tsx ./test/dst/getOverlappingDaysInIntervals/basic.ts
env TZ=Asia/Chita npx tsx ./test/dst/getOverlappingDaysInIntervals/basic.ts
echo "✅ DST tests passed"

echo "Running formatISO tests"
env TZ=Asia/Kolkata npx tsx ./test/formatISO/india.ts
echo "✅ formatISO tests passed"

echo "Running formatRFC3339 tests"
env TZ=Asia/Kolkata npx tsx ./test/formatRFC3339/india.ts
env TZ=America/St_Johns npx tsx ./test/formatRFC3339/newfoundland.ts
env TZ=Australia/Eucla npx tsx ./test/formatRFC3339/australia.ts
env TZ=Pacific/Chatham npx tsx ./test/formatRFC3339/newzealand.ts
env TZ=Europe/Warsaw npx tsx ./test/formatRFC3339/poland.ts
echo "✅ formatRFC3339 tests passed"