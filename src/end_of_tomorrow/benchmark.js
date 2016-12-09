// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var endOfTomorrow = require('./')

suite('endOfTomorrow', function () {
  benchmark('date-fns', function () {
    return endOfTomorrow()
  })
})
