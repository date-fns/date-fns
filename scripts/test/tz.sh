#!/bin/bash

# The script runs the time zone tests.
#
# It's a part of the test process.

set -ex

export NODE_ENV=test

echo "Running DST tests"
env TZ=America/Sao_Paulo pnpm tsx ./test/dst/parseISO/basic.ts
env TZ=Australia/Sydney pnpm tsx ./test/dst/parseISO/sydney.ts
env TZ=Pacific/Apia pnpm tsx ./test/dst/parseISO/samoa.ts
env TZ=Asia/Damascus pnpm tsx ./test/dst/eachDayOfInterval/basic.ts
env TZ=America/Santiago pnpm tsx ./test/dst/addBusinessDays/basic.ts
env TZ=Australia/Melbourne pnpm tsx ./test/dst/formatDistanceStrict/melbourne.ts
env TZ=Africa/Cairo pnpm tsx ./test/dst/formatDistanceStrict/cairo.ts
env TZ=Asia/Singapore pnpm tsx ./test/dst/getOverlappingDaysInIntervals/basic.ts
env TZ=Asia/Chita pnpm tsx ./test/dst/getOverlappingDaysInIntervals/basic.ts
echo "✅ DST tests passed"

echo "Running formatISO tests"
env TZ=Asia/Kolkata pnpm tsx ./test/formatISO/india.ts
echo "✅ formatISO tests passed"

echo "Running formatRFC3339 tests"
env TZ=Asia/Kolkata pnpm tsx ./test/formatRFC3339/india.ts
env TZ=America/St_Johns pnpm tsx ./test/formatRFC3339/newfoundland.ts
env TZ=Australia/Eucla pnpm tsx ./test/formatRFC3339/australia.ts
env TZ=Pacific/Chatham pnpm tsx ./test/formatRFC3339/newzealand.ts
env TZ=Europe/Warsaw pnpm tsx ./test/formatRFC3339/poland.ts
echo "✅ formatRFC3339 tests passed"