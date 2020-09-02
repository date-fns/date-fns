#!/bin/bash

# The script runs formatRFC3339 in a non%60 timezone offset
#
# It's a part of the test process.

set -ex

export PATH="$(yarn bin):$PATH"
export NODE_ENV=test

env TZ=Asia/Kolkata babel-node --extensions .ts,.js ./test/formatRFC3339/india.js
env TZ=America/St_Johns babel-node --extensions .ts,.js ./test/formatRFC3339/newfoundland.js
env TZ=Australia/Eucla babel-node --extensions .ts,.js ./test/formatRFC3339/australia.js
env TZ=Pacific/Chatham babel-node --extensions .ts,.js ./test/formatRFC3339/newzealand.js
env TZ=Europe/Warsaw babel-node --extensions .ts,.js ./test/formatRFC3339/poland.js

