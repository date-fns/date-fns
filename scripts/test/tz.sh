#!/bin/bash

# The script runs the test suite against every possible time zone offset.
#
# It's a part of the test process.

printf "\n"

for tz in UTC-12:00 UTC-11:00 UTC-10:00 UTC-09:30 UTC-09:00 \
  UTC-08:00 UTC-07:00 UTC-06:00 UTC-05:00 UTC-04:30 UTC-04:00 \
  UTC-03:30 UTC-03:00 UTC-02:00 UTC-01:00 UTC UTC+01:00 UTC+02:00 \
  UTC+03:00 UTC+03:30 UTC+04:00 UTC+04:30 UTC+05:00 UTC+05:30 \
  UTC+05:45 UTC+06:00 UTC+06:30 UTC+07:00 UTC+08:00 UTC+08:30 \
  UTC+08:45 UTC+09:00 UTC+09:30 UTC+10:00 UTC+10:30 UTC+11:00 \
  UTC+11:30 UTC+12:00 UTC+12:45 UTC+13:00 UTC+14:00
do
  printf "Run test in time zone $tz\n"
  env TEST_TZ=true USE_STATIC_TESTS=true TZ=$tz yarn test -- --single-run \
    &>tmp/last_test_output.txt || (cat tmp/last_test_output.txt && exit 1) || exit 1
done
