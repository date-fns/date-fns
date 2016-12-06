// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfYesterday = require('./')

suite('endOfYesterday', function () {
  benchmark('date-fns', function () {
    return endOfYesterday()
  })
})
