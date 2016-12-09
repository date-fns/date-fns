// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisWeek = require('./')

suite('isThisWeek', function () {
  benchmark('date-fns', function () {
    return isThisWeek(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
