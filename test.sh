#!/usr/bin/env bash
set -euo pipefail

run_vitest () {
  if command -v pnpm >/dev/null 2>&1; then
    pnpm -s vitest run "$@"
  else
    npx vitest run "$@"
  fi
}

BASE_TESTS=()
for f in \
  "src/parseISO/test.ts" \
  "src/parseISO/test.js" \
  "src/parseISO/test.mts" \
  "src/parseISO/test.cts"
do
  if [ -f "$f" ]; then
    BASE_TESTS+=("$f")
  fi
done

case "${1:-}" in
  base)
    if [ ${#BASE_TESTS[@]} -eq 0 ]; then
      echo "Could not find base parseISO tests"
      exit 1
    fi
    run_vitest "${BASE_TESTS[@]}"
    ;;
  new)
   run_vitest "src/parseISO/venus/test.ts"
    ;;
  *)
    echo "Usage: ./test.sh {base|new}"
    exit 1
    ;;
esac
