// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var lastDayOfISOWeek = require('./')

suite('lastDayOfISOWeek', function () {
  benchmark('date-fns', function () {
    return lastDayOfISOWeek(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
