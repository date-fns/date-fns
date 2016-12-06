// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isFirstDayOfMonth = require('./')

suite('isFirstDayOfMonth', function () {
  benchmark('date-fns', function () {
    return isFirstDayOfMonth(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
