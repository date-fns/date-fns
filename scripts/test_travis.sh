#!/bin/bash

if [ "$TEST_SUITE" == "main" ]
then
  yarn run lint || exit 1
  yarn run flow-check || exit 1
  yarn run systemjs-check || exit 1
  yarn run test-smoke || exit 1
  yarn run test-ci || exit 1
  yarn run test-tz || exit 1

elif [ "$TEST_SUITE" == "tz" ]
then
  yarn run test-tz-extended || exit 1

elif [ $TEST_SUITE == "cross_browser" ] && [ "$SAUCE_USERNAME" != "" ]
then
  yarn run test-cross-browser || exit 1

else
  printf "\n\033[0;31m" "UNKNOWN SUITE!" "\033[0m\n"
fi

yarn run count-tests
