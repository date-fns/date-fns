#!/usr/bin/env sh

for i in -12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0 1 2 3 4 5 6 7 8 9 10 11 12
do
  if [ $i -lt 0 ]
  then
    tz=UTC${i}
  elif [ $i -eq 0 ]
  then
    tz=UTC
  else
    tz=UTC+${i}
  fi
  printf "\nRun test in time zone $tz\n"
  env TZ=$tz npm test -- --single-run || exit 1
done

