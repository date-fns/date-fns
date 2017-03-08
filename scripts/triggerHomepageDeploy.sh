#!/bin/sh

# Fail on non-zero exit code
set -e

echo '~ Triggering https://date-fns.org deployment'

body="{
\"request\": {
  \"message\": \"Build is triggered by https://travis-ci.org/date-fns/date-fns/builds/$TRAVIS_BUILD_ID\",
  \"branch\": \"master\"
}}"

curl -s -X POST \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "Travis-API-Version: 3" \
  -H "Authorization: token $TRAVIS_TOKEN" \
  -d "$body" \
  https://api.travis-ci.org/repo/date-fns%2Fdate-fns.org/requests
