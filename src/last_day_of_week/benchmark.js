// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var lastDayOfWeek = require('./')

suite('lastDayOfWeek', function () {
  benchmark('date-fns', function () {
    return lastDayOfWeek(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
