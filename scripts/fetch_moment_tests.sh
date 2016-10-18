#!/bin/bash

#rm -rf tmp/moment*
#curl https://codeload.github.com/moment/moment/zip/develop > tmp/moment.zip
rm -rf tmp/moment
unzip tmp/moment.zip -d tmp/moment
rm -rf test/moment
cp -r tmp/moment/moment-develop/src/test test/moment
