// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var lastDayOfQuarter = require('./')

suite('lastDayOfQuarter', function () {
  benchmark('date-fns', function () {
    return lastDayOfQuarter(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
