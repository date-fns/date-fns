// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var lastDayOfISOYear = require('./')

suite('lastDayOfISOYear', function () {
  benchmark('date-fns', function () {
    return lastDayOfISOYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
