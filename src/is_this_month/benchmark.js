// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var isThisMonth = require('./')

suite('isThisMonth', function () {
  benchmark('date-fns', function () {
    return isThisMonth(this.date)
  })
}, {
  setup: function () {
    this.date = new Date()
  }
})
