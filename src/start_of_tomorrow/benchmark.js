// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var startOfTomorrow = require('./')

suite('startOfTomorrow', function () {
  benchmark('date-fns', function () {
    return startOfTomorrow()
  })
})
