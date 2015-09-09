#!/usr/bin/env sh

if [ $TRAVIS ]
then
  env PHANTOMJS_BIN='/usr/local/phantomjs/bin/phantomjs2' karma start config/karma.js --single-run
else
  karma start config/karma.js --single-run
fi

