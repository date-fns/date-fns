#!/bin/bash

count=$( cat tmp/tests_count.txt 2> /dev/null || echo 0 )
printf "\n%bTOTAL TESTS COMPLETED: %s%b\n" "\x1B[32m" "$count" "\x1B[0m"
rm -f tmp/tests_count.txt
