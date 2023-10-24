#!/bin/bash

# The script runs formatRFC3339 in a non%60 timezone offset
#
# It's a part of the test process.

set -ex

export PATH="$(yarn bin):$PATH"
export NODE_ENV=test

env TZ=Asia/Kolkata yarn tsx ./test/formatRFC3339/india.ts
env TZ=America/St_Johns yarn tsx ./test/formatRFC3339/newfoundland.ts
env TZ=Australia/Eucla yarn tsx ./test/formatRFC3339/australia.ts
env TZ=Pacific/Chatham yarn tsx ./test/formatRFC3339/newzealand.ts
env TZ=Europe/Warsaw yarn tsx ./test/formatRFC3339/poland.ts

