// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfToday = require('./')

suite('endOfToday', function () {
  benchmark('date-fns', function () {
    return endOfToday()
  })
})
