// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfToday = require('./')

suite('startOfYesterday', function () {
  benchmark('date-fns', function () {
    return startOfToday()
  })
})
