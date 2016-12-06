// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var lastDayOfMonth = require('./')

suite('lastDayOfMonth', function () {
  benchmark('date-fns', function () {
    return lastDayOfMonth(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
