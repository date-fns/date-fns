#!/usr/bin/env bash
set -e

MODE="$1"

if [ "$MODE" = "base" ]; then
  echo "Running baseline tests..."
  pnpm test
elif [ "$MODE" = "new" ]; then
  echo "Running new addDays tests only..."
  pnpm vitest src/addDays/test.ts
else
  echo "Usage:"
  echo "  ./test.sh base   # run all existing tests"
  echo "  ./test.sh new    # run only new tests"
  exit 1
fi
