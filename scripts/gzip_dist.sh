#!/bin/bash

rm -f dist/*.gz
gzip dist --recursive --keep --best --force
