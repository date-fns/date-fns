#!/bin/bash

# The script unifies the test scripts.
#
# It's used as the main CI script.

set -ex

export PATH="$(yarn bin):$PATH"

function prebuild {
  env BUILD_TESTS=true webpack-cli --config ./config/webpack.js
}

if [ "$TEST_SUITE" == "main" ]
then
  yarn lint
  yarn lint-types
  yarn locale-snapshots test
  ./scripts/test/smoke.sh

  yarn test --single-run

  ./scripts/test/dst.sh
  ./scripts/test/formatISO.sh
  ./scripts/test/formatRFC3339.sh

  prebuild
  ./scripts/test/tz.sh

elif [ "$TEST_SUITE" == "tz" ]
then
  prebuild
  ./scripts/test/tzExtended.sh

elif [ "$TEST_SUITE" == "cross_browser" ] && [ "$SAUCE_USERNAME" != "" ]
then
  yarn test-cross-browser
  env TEST_CROSS_BROWSER=true yarn test --single-run

elif [ "$TEST_SUITE" == "node" ]
then
  ./scripts/test/node.sh

else
  printf "\n\033[0;31m" "UNKNOWN SUITE!" "\033[0m\n"
  exit 1
fi

./scripts/test/countTests.sh
