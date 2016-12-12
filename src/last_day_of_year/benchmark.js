// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var lastDayOfYear = require('./')

suite('lastDayOfYear', function () {
  benchmark('date-fns', function () {
    return lastDayOfYear(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
