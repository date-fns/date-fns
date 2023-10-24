#!/bin/bash

# The script unifies the test scripts.
#
# It's used as the main CI script.

set -ex

if [ "$TEST_SUITE" == "main" ]
then
  yarn tsc --noEmit
  yarn lint
  # TODO: turn on for v3.0.0
  # yarn lint-types
  yarn locale-snapshots test
  ./scripts/test/smoke.sh

  yarn vitest run

  ./scripts/test/dst.sh
  ./scripts/test/formatISO.sh
  ./scripts/test/formatRFC3339.sh

  ./scripts/test/tz.sh

elif [ "$TEST_SUITE" == "tz" ]
then
  ./scripts/test/tzExtended.sh

elif [ "$TEST_SUITE" == "browser" ]
then
  yarn vitest run --browser

elif [ "$TEST_SUITE" == "node" ]
then
  ./scripts/test/node.sh

else
  printf "\n\033[0;31m" "UNKNOWN SUITE!" "\033[0m\n"
  exit 1
fi

./scripts/test/countTests.sh
