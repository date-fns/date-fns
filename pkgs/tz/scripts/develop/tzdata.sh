#! /usr/bin/env bash

# This script fetches fresh tzdata.

set -e

printf "🤖 Fetching latest tzdata\n"

version="2025b"
archive="tzdata$version.tar.gz"

rm -rf tzdata
mkdir tzdata
cd tzdata
wget https://data.iana.org/time-zones/releases/$archive
tar -xzf $archive -C .
rm $archive