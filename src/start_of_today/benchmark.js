// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfToday = require('./')

suite('startOfToday', function () {
  benchmark('date-fns', function () {
    return startOfToday()
  })
})
